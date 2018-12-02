import { PureComponent, Element, html } from '@znix/znix';

class LandingButtons extends PureComponent {
  render() {
    return html`
      <style>
        :host {
          width: 30%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin: 15px;
        }
        :host button {
          border: 1px solid white;
        }
      </style>
      <znix-link to="/docs">Getting Started</znix-link>
      <znix-link to="/demos">Demos</znix-link>
    `;
  }
}
Element('landing-buttons', LandingButtons);
