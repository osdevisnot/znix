import { Element, html, PureComponent } from '@znix/znix';
import './components/app/app-navigation';
import './components/app/app-routes';

class ZnixApp extends PureComponent {
  render() {
    return html`
      <app-navigation></app-navigation>
      <app-routes></app-routes>
    `;
  }
}
Element('znix-app', ZnixApp);
