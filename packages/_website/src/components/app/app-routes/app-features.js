import { Element, html, PureComponent } from '@znix/znix';

class AppFeatures extends PureComponent {
  constructor() {
    super();
    this.features = [
      {
        title: 'Lightweight',
        description: html`
          <strong>< 5KB</strong> (min + gzip), incliding components, store and a router.
        `
      },
      {
        title: 'Fast',
        description: html`
          Powered by <a href="https://github.com/Polymer/lit-html">lit-html</a>, which efficiently renders and
          re-renders templates to DOM.
        `
      },
      { title: 'Future Proof', description: 'Based on Web Components standards. No more Framework fatigue' },
      // { title: 'Simple', description: 'Tiny API and Familier Concepts.' },
      {
        title: 'Instantly Productive',
        description: 'Be instantly productive with Refresh Workflow and optional Typescript support.'
      }
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
