function devtools(store) {
  const extension = (window as any).__REDUX_DEVTOOLS_EXTENSION__ || (window.top as any).__REDUX_DEVTOOLS_EXTENSION__;
  let ignore = false;
  if (!extension) {
    console.warn('Please install / enable Redux Devtools Extension');
    store.devtools = null;
    return store;
  }
  if (!store.devtools) {
    store.devtools = extension.connect();
    store.devtools.subscribe(message => {
      if (message.type === 'DISPATCH' && message.state) {
        ignore = message.payload.type === 'JUMP_TO_ACTION' || message.payload.type === 'JUMP_TO_STATE';
        store._overrideState(JSON.parse(message.state), message.payload.type);
      }
    });
    store.devtools.init(store.state);
    store.on((state, action) => {
      if (!ignore) {
        store.devtools.send(action, store.state);
      } else {
        ignore = false;
      }
    });
  }
  return store;
}

export { devtools };
