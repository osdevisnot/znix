import { store } from '@znix/znix';

const extension = (window as any).__REDUX_DEVTOOLS_EXTENSION__ || (window.top as any).__REDUX_DEVTOOLS_EXTENSION__;

let ignore = false;
if (!extension) {
  console.warn('Please install / enable Redux Devtools Extension');
  (store as any).devtools = null;
}
if (!(store as any).devtools) {
  (store as any).devtools = extension.connect();
  (store as any).devtools.subscribe(message => {
    if (message.type === 'DISPATCH' && message.state) {
      ignore = message.payload.type === 'JUMP_TO_ACTION' || message.payload.type === 'JUMP_TO_STATE';
      store._overrideState(JSON.parse(message.state), message.payload.type);
    }
  });
  (store as any).devtools.init(store.state);
  store.on((state, action) => {
    if (!ignore) {
      (store as any).devtools.send(action, store.state);
    } else {
      ignore = false;
    }
  });
}
