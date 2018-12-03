import { Element, html, Router } from '@znix/znix';
import './app-demos';
import './app-guides';
import './app-guides/quick-start';
import './app-routes/app-landing';

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
          <quick-start></quick-start>
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
