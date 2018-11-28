# znix

> A javascript micro-framework for Next Generation Web Apps

[![Build Status](https://travis-ci.org/osdevisnot/znix.svg?branch=master)](https://travis-ci.org/osdevisnot/znix)
[![The Uncompressed size of znix](http://img.badgesize.io/https://unpkg.com/@znix/znix@0.1.9/dist/znix.min.js?label=Uncompressed%20Size)](https://unpkg.com/@znix/znix)
[![The GZIP size of znix](http://img.badgesize.io/https://unpkg.com/@znix/znix@0.1.9/dist/znix.min.js?compression=gzip&label=GZIP%20Size)](https://unpkg.com/@znix/znix)
[![The Brotli size of znix](http://img.badgesize.io/https://unpkg.com/@znix/znix@0.1.9/dist/znix.min.js?compression=brotli&label=Brotli%20Size)](https://unpkg.com/@znix/znix)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) [![Greenkeeper badge](https://badges.greenkeeper.io/osdevisnot/znix.svg)](https://greenkeeper.io/)

## Features

- **Small Footprint** Components with Lifecycle + Built-in Store in < 5 KB
- **Fast** built with fast & efficient [lit-html](https://github.com/Polymer/lit-html)
- **Best DX** - **No Build Step** + **Redux devtools integration**
- **Standard Compliant** Based on Web Components Standard
- **Familiar** Ideas from Redux like libraries
- **Convenient** Connected Components without boilerplate
- **Instantly Productive**
  - `render` gets `state` and `dispatch`
  - Connected Components efficiently **auto update on state changes**
- **Simple & Familiar** - Build apps using languages you already know

## Installation

Grab a copy from UNPKG CDN:

```
<script src="https://unpkg.com/@znix/znix">

```

or Install it from NPM:

```
npm install @znix/znix
```

Then with a module bundler like [parcel](https://parceljs.org/) or [rollup](https://rollupjs.org/guide/en), use as you would anything else:

```
import { Component, render } from '@znix/znix'
```

## API

See the [docs directory](https://github.com/osdevisnot/znix/tree/master/packages/znix/docs)

## Contributing

**Found a problem?**

[Open an issue](https://github.com/osdevisnot/znix/issues), or better yet [open a pull request](https://github.com/osdevisnot/znix/pulls)

**Want to hack code?**

Clone this repo, and run `setup` script within repo root:

```
npm run setup
```

Once setup, review `examples` directory, or launch using `npm start` in any example directory.

**Ready to fix an issue?**

create a new example in `examples` directory & run `npm run boot` in repo root

`packages/znix` hosts core module, which supports below commands:

```bash
npm run build         # builds the package
npm run start         # builds the package in watch mode
npm run test          # runs tests in watch mode
npm run coverage      # runs tests and generates coverage report
```

## Acknowledgements

This library was inspired by many of the pre-existing libraries/packages for existence of which we are greatly thankful of. Specifically:

- [lit-html](https://github.com/Polymer/lit-html)
- [beedle](https://github.com/hankchizljaw/vanilla-js-state-management)

## License

[MIT License](https://oss.ninja/mit/osdevisnot) @ [osdevisnot](https://github.com/osdevisnot)
