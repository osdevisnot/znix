import { html, Router, Element } from '@znix/znix';

class AppRoutes extends Router {
  routes() {
    return [
      {
        path: '/',
        render() {
          return html`
            <home-component></home-component>
          `;
        }
      },
      {
        path: '/counter',
        render() {
          return html`
            <counter-component></counter-component>
          `;
        }
      },
      {
        path: '/todo',
        render() {
          return html`
            <todo-component></todo-component>
          `;
        }
      },
      {
        path: '/about',
        render() {
          return html`
            <about-component></about-component>
          `;
        }
      }
    ];
  }
}
Element('app-routes', AppRoutes);
