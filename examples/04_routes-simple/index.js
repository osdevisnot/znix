const { Component, Element, html, Router } = znix;

class RootComponent extends Component {
  render({ state, dispatch }) {
    return html`
      <h3>This is root component</h3>
    `;
  }
}
Element('root-component', RootComponent);

class HomeComponent extends Component {
  render({ state, dispatch }) {
    return html`
      <h3>Home Component</h3>
    `;
  }
}
Element('home-component', HomeComponent);

class AboutComponent extends Component {
  render({ state, dispatch }) {
    return html`
      <h3>About Component</h3>
    `;
  }
}
Element('about-component', AboutComponent);

class AppRoutes extends Router {
  routes() {
    return [
      {
        path: '/',
        render: () =>
          html`
            <root-component></root-component>
          `
      },
      {
        path: '/home',
        render: () =>
          html`
            <home-component></home-component>
          `
      },
      {
        path: '/about',
        render: () =>
          html`
            <about-component></about-component>
          `
      }
    ];
  }
}
Element('app-routes', AppRoutes);

class ZnixApp extends Component {
  render({ state, dispatch }) {
    return html`
      <div>
        <ul>
          <li><znix-link to="/">Root</znix-link></li>
          <li><znix-link to="/home">Home</znix-link></li>
          <li><znix-link to="/about">About</znix-link></li>
        </ul>
      </div>
      <app-routes></app-routes>
      <div>Content after app routes</div>
    `;
  }
}
Element('znix-app', ZnixApp);
