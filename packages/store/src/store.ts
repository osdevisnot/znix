/**
 * @module store
 */

export type IEventHandler = (state: any, action: string) => any
export type IActionHandler = (state: any, payload?: any) => any

let _listeners: Array<IEventHandler> = [],
  _state: any = {},
  _actions: Record<string, IActionHandler> = {}

/**
 * @internal emit an event
 * @param state Current store state
 * @param action name of action
 */
function emit(state: any, action: string) {
  _listeners.map(handler => handler(state, action))
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
    _listeners = _listeners.filter(handle => handler !== handle)
  },
  /**
   * Subscribe to store updates
   * @param handler an event handler
   */
  on(handler: IEventHandler): Function {
    _listeners.push(handler)
    return store.off.bind(store, handler)
  },
  /**
   * Get Current State from store
   */
  get state() {
    return _state
  },
  /**
   * Set state and call store listeners
   * @param state updated state
   * @param action action triggering state update
   */
  setState(state: any, action: string) {
    _state = { ..._state, ...state }
    emit(_state, action)
  },
  /**
   * @internal Override current state value (useful for devtools)
   * @param state updated state
   * @param action action triggering state update
   */
  $o(state: any, action: string) {
    _state = { ...state }
    emit(_state, action)
  },
  /**
   * Dispatch an action with given payload. If action returns promise, dispatch
   * will resolve after promise resolution. Same for async calls...
   * @param action action name
   * @param payload data for action
   */
  dispatch(action: string, payload?: any): any {
    if (_actions[action]) {
      const update = _actions[action]({ state: _state, payload: payload })
      if ((update as Promise<any>).then) {
        return (update as Promise<any>).then(res => {
          return store.setState(res, action)
        })
      }
      return store.setState(update, action)
    }
  },
  /**
   * Register initial state and actions with store
   * @param state initial state
   * @param actions list of actions
   */
  use(state: any, actions?: Record<string, IActionHandler>): void {
    _state = { ..._state, ...state }
    _actions = { ..._actions, ...actions }
  }
}

export { store }
