import { Element, html, PureComponent } from '@znix/znix';

class AppNavigation extends PureComponent {
  render() {
    return html`
      <style>
        :host {
          display: flex;
          justify-content: flex-end;
          flex-wrap: nowrap;
          padding: 0 10px 0 0;
        }
      </style>
      <ul>
        <znix-link to="/">Home</znix-link>
      </ul>
      <ul>
        <znix-link to="/starter">Quick Start</znix-link>
      </ul>
      <ul>
        <znix-link to="/guides">Documentation</znix-link>
      </ul>
      <ul>
        <znix-link to="/demos/home">Demos</znix-link>
      </ul>
      <ul>
        <znix-link to="https://github.com/osdevisnot/znix">Github</znix-link>
      </ul>
    `;
  }
}
Element('app-navigation', AppNavigation);
