import { PureComponent, html, Element } from '@znix/znix';

class DemoNavigation extends PureComponent {
  render({ state, dispatch }) {
    return html`
      <style>
        :host header {
          height: 35px;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
        }
        :host li {
          display: inline-block;
          list-style: none;
        }
        :host znix-link::shadow a {
          text-decoration: none;
        }
      </style>
      <header>
        <li><znix-link to="/demos/home">Home</znix-link></li>
        <li><znix-link to="/demos/counter">Counter</znix-link></li>
        <li><znix-link to="/demos/about">About</znix-link></li>
        <li><znix-link to="/demos/todo">Todo</znix-link></li>
      </header>
    `;
  }
}
Element('demo-navigation', DemoNavigation);
