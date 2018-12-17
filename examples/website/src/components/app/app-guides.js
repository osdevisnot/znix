import { Element, html, PureComponent } from '@znix/znix'
import './app-guides/npm-install'
import './app-guides/znix-components'
import './app-guides/znix-router'
import './app-guides/znix-store'

class AppGuides extends PureComponent {
  render() {
    return html`
      <div>These are app guides</div>
      <npm-install></npm-install>
      <div>These are app guides</div>
      <znix-components></znix-components>
      <div>These are app guides</div>
      <znix-store></znix-store>
      <div>These are app guides</div>
      <znix-router></znix-router>
    `
  }
}
Element('app-guides', AppGuides)
