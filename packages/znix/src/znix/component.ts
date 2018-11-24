/**
 * @module Component
 */
import { PureComponent } from './pure-component';
import { store } from './store';

/**
 * Connected Component for Znix Applications
 * @noInheritDoc
 */
class Component extends PureComponent {
  /**
   * Invoked each time the state in store changes.
   */
  stateChanged = () => super.flush();
  /**
   * Invoked each time the custom element is appended into a document-connected element. This will happen each time
   * the node is moved, and may happen before the element's contents have been fully parsed.
   */
  connectedCallback() {
    store.on(this.stateChanged);
    super.connectedCallback();
  }
  /**
   * Invoked each time the custom element is disconnected from the document's DOM.
   */
  disconnectedCallback() {
    store.off(this.stateChanged);
  }
}

export { Component };
