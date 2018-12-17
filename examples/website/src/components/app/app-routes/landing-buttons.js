import { Element, html, PureComponent } from '@znix/znix'

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
      <znix-link to="/starter">Quick Start</znix-link>
      <znix-link to="/demos">Demos</znix-link>
    `
  }
}
Element('landing-buttons', LandingButtons)
