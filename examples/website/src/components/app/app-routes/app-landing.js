import { Element, html, PureComponent } from '@znix/znix'
import './app-features'
import './landing-buttons'
class AppLanding extends PureComponent {
  render() {
    return html`
      <style>
        :host .landing {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          height: 30vh;
        }
        :host h1 {
          font-size: 5em;
        }
        :host .tagline {
          margin: 10px;
        }
      </style>
      <div class="landing">
        <h1>Znix</h1>
        <div class="tagline">a Javascript micro-framework for Futuristic Web Applications</div>
        <div>
          <img src="https://travis-ci.org/osdevisnot/znix.svg?branch=master" />
          <img src="http://img.badgesize.io/https://unpkg.com/@znix/znix/dist/znix.min.js?label=Uncompressed%20Size" />
          <img
            src="http://img.badgesize.io/https://unpkg.com/@znix/znix/dist/znix.min.js?compression=gzip&label=GZIP%20Size"
          />
          <img
            src="http://img.badgesize.io/https://unpkg.com/@znix/znix/dist/znix.min.js?compression=brotli&label=Brotli%20Size"
          />
          <img src="https://badges.greenkeeper.io/osdevisnot/znix.svg" />
          <img src="https://img.shields.io/badge/License-MIT-blue.svg" />
        </div>
        <landing-buttons></landing-buttons>
      </div>
      <app-features></app-features>
    `
  }
}
Element('app-landing', AppLanding)
