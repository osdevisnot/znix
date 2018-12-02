import { PureComponent, html, Element } from '@znix/znix';

class znixComponents extends PureComponent {
  render() {
    return html`
      <h3 id="components">Components</h3>
<p>Brief about components</p>
    `
  }
}
Element('znix-components', znixComponents);