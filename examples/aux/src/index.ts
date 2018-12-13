import { PureComponent, Element, html, Router, store } from '@znix/znix';

import './components/home-component';
import './components/about-component';
import './components/counter-component';

import './components/app-navigation';
import './components/app-routes';
import './components/todo-component';

class ZnixDemo extends PureComponent {
  render() {
    return html`
      <app-navigation></app-navigation>
      <app-routes></app-routes>
    `;
  }
}
Element('znix-demo', ZnixDemo);
