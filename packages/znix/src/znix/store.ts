let _listeners = [],
  _state = {},
  _actions = {};

function emit(state, action) {
  _listeners.map(handler => handler(state, action));
}

const store = {
  off(handler) {
    _listeners = _listeners.splice(_listeners.indexOf(handler) >>> 1, 0);
  },
  on(handler) {
    _listeners.push(handler);
    return store.off.bind(store, handler);
  },
  get state() {
    return _state;
  },
  setState(state, action) {
    _state = { ..._state, ...state };
    emit(_state, action);
  },
  _overrideState(state, action) {
    _state = { ...state };
    emit(_state, action);
  },
  dispatch(action, payload?) {
    if (_actions[action]) {
      const update = _actions[action](_state, payload);
      if (update.then) {
        return update.then(res => {
          return store.setState(res, action);
        });
      }
      store.setState(update, action);
    }
  },
  register(state, actions?) {
    _state = { ..._state, ...state };
    _actions = { ..._actions, ...actions };
  }
};

export { store };
