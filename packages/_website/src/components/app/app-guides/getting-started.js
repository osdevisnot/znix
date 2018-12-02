import { PureComponent, html, Element } from '@znix/znix';

class gettingStarted extends PureComponent {
  render() {
    return html`
      <h3 id="getting-started">Getting Started</h3>
<p>Our first example is a Counter that can be incremented and decremented.</p>
<pre><code>import { store, Component, html, Element } from '@znix/znix';

const initialState = { count: 0 };

const actions = {
  up: ({ state }) =&gt; ({ count: state.count + 1 }),
  down: ({ state }) =&gt; ({ count: state.count - 1 }),
  upBy: ({ state, payload }) =&gt; ({ count: state.count + payload })
};

store.register(initialState, actions);

class CounterComponent extends Component {
  render({ state, dispatch }) {
    return html\`
      &lt;h3&gt;Counter: \${state.count}&lt;/h3&gt;
      &lt;button @click="\${e =&gt; dispatch('up')}"&gt;+&lt;/button&gt;
      &lt;button @click="\${e =&gt; dispatch('down')}"&gt;-&lt;/button&gt;
      &lt;button @click="\${e =&gt; dispatch('upBy', 10)}"&gt;+10&lt;/button&gt;
    \`;
  }
}
Element('counter-component', CounterComponent);</code></pre>
<p>We start off by declaring initial state.</p>
    `
  }
}
Element('getting-started', gettingStarted);