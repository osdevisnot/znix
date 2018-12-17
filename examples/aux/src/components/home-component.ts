import { PureComponent, html, Element } from '@znix/znix'

class HomeComponent extends PureComponent {
  render({ state, dispatch }) {
    return html`
      <h3>Hello World from HomeComponent</h3>
    `
  }
}
Element('home-component', HomeComponent)
