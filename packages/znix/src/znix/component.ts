import { render } from 'lit-html';
import { store } from './store';

class PureComponent extends HTMLElement {
  root: ShadowRoot;
  render: any;
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.flush();
  }
  attributeChangedCallback() {
    this.flush();
  }
  flush() {
    if (this.render) {
      render(this.render(store.state, store.dispatch), this.root, { eventContext: this });
    }
  }
}

class Component extends PureComponent {
  stateChanged = () => super.flush();
  connectedCallback() {
    store.on(this.stateChanged);
    super.connectedCallback();
  }
  disconnectedCallback() {
    store.off(this.stateChanged);
  }
}

function Element(tag, clz?) {
  if (clz) return customElements.define(tag, clz);
  return (clazz: any) => customElements.define(tag, clazz);
}

export { PureComponent, Component, Element };
