/**
 * @module Router
 */
import { Element, PureComponent, html } from '@znix/component';
import { matchRoutes } from './routes';

/**
 * Super Simple Router for Znix Applications
 * @noInheritDoc
 */
abstract class Router extends PureComponent {
  /**
   * Dynamic definition of routes
   */
  abstract routes(): any;
  render() {}
  /**
   * A private method to effectively render and re-render a route from routes definition
   */
  private renderRoute = () => {
    const { route, params, query } = matchRoutes(this.routes(), location);
    if (route && route.render) {
      this.render = route.render;
      super.flush({ params, query });
    }
  };
  /**
   * Router's connectedCallback will subscribe to pushstate events in addition to calling render on component
   */
  connectedCallback() {
    window.addEventListener('pushState', this.renderRoute);
    window.addEventListener('popstate', this.renderRoute);
    this.renderRoute();
  }
  /**
   * Unsubscribe from pushstate events
   */
  disconnectedCallback() {
    window.removeEventListener('pushState', this.renderRoute);
    window.removeEventListener('popstate', this.renderRoute);
  }
}

/**
 * Tiny Utility function to extract origin information from given location object
 * @param loc fully formed location object
 */
function getOrigin(loc) {
  return loc.protocol + '//' + loc.hostname + (loc.port ? ':' + loc.port : '');
}

/**
 * Tiny Utility function to identify if the target URL is external to application
 * @param anchorElement the <a> link to target route
 */
function isExternal(anchorElement) {
  // Location.origin and HTMLAnchorElement.origin are not
  // supported by IE and Safari.
  return getOrigin(location) !== getOrigin(anchorElement);
}

/**
 * A super simple component to render route links with connection to Router
 * @noInheritDoc
 */
class ZnixLink extends PureComponent {
  /**
   * A destination URL
   */
  to = this.getAttribute('to');
  /**
   * The target attribute for <zlink-link>, if passed as '_blank', the router will skip normal resolution and let
   * browser open the URL in new window/tab
   */
  target = this.getAttribute('target');

  handleClick = (event: any) => {
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
      event.preventDefault();
      if (this.to !== location.pathname) {
        history.pushState(location.pathname, '', this.to);
        dispatchEvent(new CustomEvent('pushState', { detail: this.to }));
      }
    }
  };
  /**
   * Render a wired a tag with handling for click events
   */
  render() {
    return html`
      <a href="${this.to}" @click="${this.handleClick}"><slot></slot></a>
    `;
  }
}
Element('znix-link', ZnixLink);

export { Router, ZnixLink };
