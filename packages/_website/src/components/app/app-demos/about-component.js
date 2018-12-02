import { PureComponent, html, Element } from '@znix/znix';

class AboutComponent extends PureComponent {
  render() {
    return html`
      <h3>This is About Component</h3>
    `;
  }
}
Element('about-component', AboutComponent);
