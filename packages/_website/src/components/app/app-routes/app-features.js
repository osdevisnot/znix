import { PureComponent, Element, html } from '@znix/znix';

class AppFeatures extends PureComponent {
  constructor() {
    super();
    this.features = [
      {
        title: 'Fast',
        description:
          'Zenix is powered by lit-html, which efficiently renders templates to DOM, including efficiently updating the DOM with new values.'
      },
      {
        title: 'Lightweight',
        description:
          'In < 5KB, you get components with lifecycle methods, a store to manage application state and a router to manage application navigation'
      },
      { title: 'Web Components Standard', description: 'Zenix is based on Web Components standards.' },
      { title: 'Instantly Productive', description: 'Zenix has strong focus on DX.' }
    ];
  }

  render() {
    return html`
      <style>
        :host {
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex-wrap: wrap;
          /* border: 1px dotted; */
        }
        :host .feature {
          width: 44vw;
          margin: 20px;
          border: 1px dotted;
        }
        :host .title {
          text-align: left;
        }
        :host .description {
          text-align: justify;
        }
      </style>
      ${
        this.features.map(
          feature => html`
            <div class="feature">
              <h3 class="title">${feature.title}</h3>
              <div class="description">${feature.description}</div>
            </div>
          `
        )
      }
    `;
  }
}
Element('app-features', AppFeatures);
