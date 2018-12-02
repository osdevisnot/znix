import { Component, PureComponent, Element, html, Router, store } from '@znix/znix';

import './app-demos/home-component';
import './app-demos/about-component';
import './app-demos/counter-component';
import './app-demos/todo-component';

import './app-demos/demo-navigation';
import './app-demos/demo-routes';

class AppDemos extends Component {
  render({ state, dispatch }) {
    return html`
      <demo-navigation></demo-navigation>
      <demo-routes></demo-routes>
    `;
  }
}
Element('app-demos', AppDemos);
