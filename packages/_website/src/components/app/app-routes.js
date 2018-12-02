import { Router, Element, html } from '@znix/znix';
import './app-routes/app-landing';
import './app-starter';
import './app-demos';
import './app-guides';

class AppRoutes extends Router {
  routes() {
    return [
      {
        path: '/',
        exact: true,
        render: () =>
          html`
            <app-landing></app-landing>
          `
      },
      {
        path: '/starter',
        render: () => html`
          <getting-started></getting-started>
        `
      },
      {
        path: '/guides',
        render: () => html`
          <app-guides></app-guides>
        `
      },
      {
        path: '/demos',
        render: () => html`
          <app-demos></app-demos>
        `
      }
    ];
  }
}
Element('app-routes', AppRoutes);
