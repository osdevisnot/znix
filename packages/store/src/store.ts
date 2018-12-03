/**
 * @module store
 */

export type IEventHandler = (state: any, action: string) => void;
export type IActionHandler = (state: any, payload?: any) => any;

let _listeners: Array<IEventHandler> = [],
  _state: any = {},
  _actions: Record<string, IActionHandler> = {};

/**
 * emit an event @internal
 * @param state Current store state
 * @param action name of action
 */
function emit(state: any, action: string) {
  _listeners.map(handler => handler(state, action));
}

/**
 * Super simple pub/sub, event emitter for Znix applications
 */
const store = {
  /**
   * Unsubscribe from store updates
   * @param handler an event handler
   */
  off(handler: IEventHandler) {
    const newListeners = [];
    let i = 0,
      len = _listeners.length;
    for (; i < len; i++) {
      if (_listeners[i] !== handler) {
        newListeners.push(_listeners[i]);
      }
    }
    _listeners = newListeners;
  },
  /**
   * Subscribe to store updates
   * @param handler an event handler
   */
  on(handler: IEventHandler): Function {
    _listeners.push(handler);
    return store.off.bind(store, handler);
  },
  /**
   * Get Current State from store
   */
  get state() {
    return _state;
  },
  /**
   * Set state and call store listeners
   * @param state updated state
   * @param action action triggering state update
   */
  setState(state: any, action: string) {
    _state = { ..._state, ...state };
    emit(_state, action);
  },
  /**
   * Override current state value (useful for devtools)
   * @param state updated state
   * @param action action triggering state update
   */
  _override(state: any, action: string) {
    _state = { ...state };
    emit(_state, action);
  },
  /**
   * Dispatch an action with given payload. If action returns promise, dispatch
   * will resolve after promise resolution. Same for async calls...
   * @param action action name
   * @param payload data for action
   */
  dispatch(action: string, payload?: any): void {
    if (_actions[action]) {
      const update = _actions[action]({ state: _state, payload: payload });
      if ((update as Promise<any>).then) {
        (update as Promise<any>).then(res => {
          return store.setState(res, action);
        });
      }
      store.setState(update, action);
    }
  },
  /**
   * Register initial state and actions with store
   * @param state initial state
   * @param actions list of actions
   */
  register(state: any, actions?: Record<string, IActionHandler>): void {
    _state = { ..._state, ...state };
    _actions = { ..._actions, ...actions };
  }
};

export { store };
