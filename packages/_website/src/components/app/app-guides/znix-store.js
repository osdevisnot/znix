import { Element, html, PureComponent } from '@znix/znix';

class znixStore extends PureComponent {
  render() {
    return html`
      <h3 id="store">Store</h3>
<p>Brief about Store</p>
    `
  }
}
Element('znix-store', znixStore);