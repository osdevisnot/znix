import { PureComponent, html, Element } from '@znix/znix';

class znixRouter extends PureComponent {
  render() {
    return html`
      <h3 id="znix-router">Znix Router</h3>
<p>Brief about Router</p>
    `
  }
}
Element('znix-router', znixRouter);