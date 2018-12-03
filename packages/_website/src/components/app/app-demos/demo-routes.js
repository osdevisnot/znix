import { Element, html, Router } from '@znix/znix';

class DemoRoutes extends Router {
  routes() {
    return [
      {
        path: '/demos/home',
        render() {
          return html`
            <home-component></home-component>
          `;
        }
      },
      {
        path: '/demos/counter',
        render() {
          return html`
            <counter-component></counter-component>
          `;
        }
      },
      {
        path: '/demos/todo',
        render() {
          return html`
            <todo-component></todo-component>
          `;
        }
      },
      {
        path: '/demos/about',
        render() {
          return html`
            <about-component></about-component>
          `;
        }
      }
    ];
  }
}
Element('demo-routes', DemoRoutes);
