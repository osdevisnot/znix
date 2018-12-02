import { PureComponent, html, Element } from '@znix/znix';

class npmInstall extends PureComponent {
  render() {
    return html`
      <h3 id="installation">Installation</h3>
<p>Grab a copy from UNPKG CDN:</p>
<pre><code>&lt;script src="https://unpkg.com/@znix/znix"&gt;</code></pre>
<p>or Install it from NPM:</p>
<pre><code>npm install @znix/znix</code></pre>
<p>Then with a module bundler like <a href="https://parceljs.org/">parcel</a> or <a href="https://rollupjs.org/guide/en">rollup</a>, use as you would anything else:</p>
<pre><code>import { Component, render } from '@znix/znix'</code></pre>
    `
  }
}
Element('npm-install', npmInstall);