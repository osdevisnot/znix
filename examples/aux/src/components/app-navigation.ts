import { PureComponent, html, Element } from '@znix/znix'

class AppNavigation extends PureComponent {
  render({ state, dispatch }) {
    return html`
      <style>
        :host header {
          height: 35px;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
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
        <li><znix-link to="/">Home</znix-link></li>
        <li><znix-link to="/counter">Counter</znix-link></li>
        <li><znix-link to="/about">About</znix-link></li>
        <li><znix-link to="/todo">Todo</znix-link></li>
      </header>
    `
  }
}
Element('app-navigation', AppNavigation)
