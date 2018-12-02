const path = require('path');
const fs = require('fs');
const showdown = require('showdown');
showdown.setFlavor('github');

const converter = new showdown.Converter();

const guides = ['getting-started', 'npm-install', 'znix-components', 'znix-router', 'znix-store'];

guides.forEach(guide => {
  const text = fs.readFileSync(path.join('..', '..', 'guides', `${guide}.md`)) + '';
  var clz = guide.replace(/-([a-z])/g, function(g) {
    return g[1].toUpperCase();
  });

  let html = converter.makeHtml(text);
  html = `import { PureComponent, html, Element } from '@znix/znix';

class ${clz} extends PureComponent {
  render() {
    return html\`
      ${html}
    \`
  }
}
Element('${guide}', ${clz});`;

  fs.writeFileSync(path.join('src', 'components', 'app', 'app-guides', `${guide}.js`), html);
});
