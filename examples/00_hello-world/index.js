const { PureComponent, html, Element } = znix;

class HelloWorld extends PureComponent {
  render() {
    return html`
      <h3>Hello World</h3>
    `;
  }
}
Element('hello-world', HelloWorld);
