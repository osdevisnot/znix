import { Component, Element, html } from '@znix/znix';
import './app-demos/about-component';
import './app-demos/counter-component';
import './app-demos/demo-navigation';
import './app-demos/demo-routes';
import './app-demos/home-component';
import './app-demos/todo-component';

class AppDemos extends Component {
  render({ state, dispatch }) {
    return html`
      <demo-navigation></demo-navigation>
      <demo-routes></demo-routes>
    `;
  }
}
Element('app-demos', AppDemos);
