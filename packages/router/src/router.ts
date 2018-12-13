/**
 * @module Router
 */
import { Element, html, IRenderOptions, PureComponent, TemplateResult } from '@znix/component'
import { matchRoutes } from './routes'
import { isExternal } from './utils'

/**
 * Super Simple Router for Znix Applications
 * @noInheritDoc
 */
abstract class Router extends PureComponent {
  /**
   * Dynamic definition of routes
   */
  abstract routes(): any
  render(options?: IRenderOptions): TemplateResult {
    return html``
  }
  /**
   * A private method to effectively render and re-render a route from routes definition
   */
  private renderRoute = () => {
    const { route, params, query } = matchRoutes(this.routes(), location)
    if (route && route.render) {
      this.render = route.render
      super.$f({ params, query })
    }
  }
  /**
   * Router's connectedCallback will subscribe to pushstate events in addition to calling render on component
   */
  connectedCallback() {
    window.addEventListener('pushState', this.renderRoute)
    window.addEventListener('popstate', this.renderRoute)
    this.renderRoute()
  }
  /**
   * Unsubscribe from pushstate events
   */
  disconnectedCallback() {
    window.removeEventListener('pushState', this.renderRoute)
    window.removeEventListener('popstate', this.renderRoute)
  }
}

/**
 * A super simple component to render route links with connection to Router
 * @noInheritDoc
 */
class ZnixLink extends PureComponent {
  /**
   * A destination URL
   */
  to = this.getAttribute('to')
  /**
   * The target attribute for <zlink-link>, if passed as '_blank', the router will skip normal resolution and let
   * browser open the URL in new window/tab
   */
  target = this.getAttribute('target')

  clx = (event: any) => {
    // call the original click first
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.altKey ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      this.target === '_blank' ||
      isExternal(event.currentTarget)
    ) {
    } else {
      event.preventDefault()
      if (this.to !== location.pathname) {
        history.pushState(location.pathname, '', this.to)
        dispatchEvent(new CustomEvent('pushState', { detail: this.to }))
      }
    }
  }
  /**
   * Render a wired `<a></a>` tag with handling for click events
   */
  render() {
    return html`
      <a href="${this.to}" @click="${this.clx}"><slot></slot></a>
    `
  }
}
Element('znix-link', ZnixLink)

export { Router, ZnixLink }
