/**
 * @module Component
 */
import { store } from '@znix/store'
import { PureComponent } from './pure-component'

/**
 * Connected Component for Znix Applications
 * @noInheritDoc
 */
abstract class Component extends PureComponent {
  /**
   * Invoked each time the state in store changes.
   */
  $c = () => super.$f()
  /**
   * Invoked each time the custom element is appended into a document-connected element. This will happen each time
   * the node is moved, and may happen before the element's contents have been fully parsed.
   */
  connectedCallback() {
    store.on(this.$c)
    super.connectedCallback()
  }
  /**
   * Invoked each time the custom element is disconnected from the document's DOM.
   */
  disconnectedCallback() {
    store.off(this.$c)
  }
}

export { Component }
