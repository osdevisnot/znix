### Quick Start

Our first example is a Counter that can be incremented and decremented.

```
import { Component, Element, html, store } from '@znix/znix';

const initialState = { count: 0 };

const actions = {
  up: ({ state }) => ({ count: state.count + 1 }),
  down: ({ state }) => ({ count: state.count - 1 }),
  upBy: ({ state, payload }) => ({ count: state.count + payload })
};

store.register(initialState, actions);

class CounterComponent extends Component {
  render({ state, dispatch }) {
    return html`
      <h3>Counter: ${state.count}</h3>
      <button @click="${e => dispatch('up')}">+</button>
      <button @click="${e => dispatch('down')}">-</button>
      <button @click="${e => dispatch('upBy', 10)}">+10</button>
    `;
  }
}
Element('counter-component', CounterComponent);
```
