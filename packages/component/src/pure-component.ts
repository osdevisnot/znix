/**
 * @module PureComponent
 */
import { store } from '@znix/store'
import { render, TemplateResult } from 'lit-html'

const NEEDS_RENDER = Symbol('NEEDS_RENDER')

export type IRenderOptions = {
  state?: object
  dispatch?: Function
  params?: any
  query?: any
}

/**
 * Base class for Znix Components
 * @noInheritDoc
 */
abstract class PureComponent extends HTMLElement {
  /**
   * The root node of Shadow DOM. Often referred as Shadow Root. Once the custom element is mounted, this can be
   * accessed using `container.shadowRoot.querySelector('#selector')`
   */
  __root__: ShadowRoot
  /**
   * The render method must be defined in the Component extending this base class. Skipping `render` definition would
   * render a no op for a custom element.
   * @param options? additional options for render
   */
  abstract render(options?: IRenderOptions): TemplateResult
  /**
   * Attaches a shadow root in 'open' mode.
   */
  constructor() {
    super()
    this.__root__ = this.createRoot()
    /**
     * Lazy Properties :- Interoperability for few frameworks (AngularJS & Angular)
     * These frameworks can set properties prior to upgrading this element.
     * https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
     */
    Object.getOwnPropertyNames(this).forEach(prop => {
      const val = (this as any)[prop]
      delete (this as any)[prop]
      ;(this as any)[prop] = val
    })
  }
  /**
   * Create a Shadow DOM root node for current component.
   * Override this method to change root behavior.
   */
  createRoot() {
    return this.attachShadow({ mode: 'open', delegatesFocus: false })
  }
  /**
   * Invoked each time the custom element is appended into a document-connected element. This will happen each time
   * the node is moved, and may happen before the element's contents have been fully parsed.
   */
  connectedCallback() {
    this.__flush__()
  }
  /**
   * Invoked each time the custom element is removed from DOM.
   */
  disconnectedCallback() {
    ;(this as any)[NEEDS_RENDER] = false
  }
  /**
   * Invoked each time one of the custom element's attributes is added, removed, or changed.
   * Which attributes to notice change for is specified in a static get observedAttributes method
   */
  attributeChangedCallback() {
    this.__flush__()
  }
  /**
   * Find an element in this ShadowRoot (alias for `querySelector`)
   * @param selector the dom selector
   */
  public $(selector: string): HTMLElement | null {
    return this.__root__.querySelector(selector)
  }
  /**
   * Returns an array of DOM elements for given selector (alias for `querySelectorAll`)
   * @param selector the dom selector
   */
  public $$(selector: string): NodeListOf<HTMLElement> {
    return this.__root__.querySelectorAll(selector)
  }
  /**
   * flush the render cache to DOM. This method should not be overridden in extended class
   * @param options additional options to pass to instance's render function
   */
  protected async __flush__(options?: IRenderOptions) {
    ;(this as any)[NEEDS_RENDER] = true
    await 0
    if ((this as any)[NEEDS_RENDER]) {
      ;(this as any)[NEEDS_RENDER] = false
      if (this.render) {
        render(this.render({ state: store.state, dispatch: store.dispatch, ...options }), this.__root__, {
          eventContext: this
        })
      }
    }
  }
}

export { PureComponent }
