import { Element, html, PureComponent } from '@znix/znix'

class AppFeatures extends PureComponent {
  constructor() {
    super()
    this.features = [
      {
        title: 'Lightweight',
        description: html`
          <strong>< 5KB</strong> (min + gzip), including components, store and a router.
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
      {
        title: 'Instantly Productive',
        description: 'Be instantly productive with Refresh Workflow and optional Typescript support.'
      }
    ]
  }

  render() {
    return html`
      <style>
        :host {
          display: flex;
          align-items: center;
          flex-direction: column;
        }
        :host .feature {
          width: 44vw;
          margin: 10px;
          border: 1px dotted;
        }
        :host .title {
          text-align: center;
        }
        :host .description {
          text-align: justify;
        }
      </style>
      ${this.features.map(
        feature => html`
            <div class="feature">
              <h3 class="title">${feature.title}</h3>
              <div class="description">${feature.description}</div>
            </div>
          `
      )}
    `
  }
}
Element('app-features', AppFeatures)
