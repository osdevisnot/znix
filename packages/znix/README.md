# znix

> A javascript micro-framework for Next Generation Web Apps

## Features

- **Small Footprint** Components with lifecycles + Built in Store in < 4 KB
- **Fast** built with efficient [lit-html](https://github.com/Polymer/lit-html)
- **Best DX** - **No Build Step** + **Redux devtools integration**
- **Standard Compliant** Based on Web Components Standard
- **Familier** Ideas from Redux like libraries
- **Convinient** Connected Components without boilerplate
- **Instantly Productive**
  - `render` gets `state` and `dispatch`
  - Connected Components efficiently **auto update on state changes**
- **Simple & Familier** - Build apps using launguages you already know

## Installation

Grab a copy from UNPKG CDN:

```
<script src="https://unpkg.com/@znix/znix">

```

or Install it from NPM:

```
npm install @znix/znix
```

Then with module bundler like [parcel](https://parceljs.org/) or [rollup](https://rollupjs.org/guide/en), use as you would anything else:

```
import { Component, render } from '@znix/znix'
```

## Roadmap

- [ ] IE11 Support
  - [ ] template polyfill
  - [ ] legacy es5 build + custom element polyfill
- [ ] Better Typings
- [ ] Better Error Messages (for improved DX)
- [ ] Better Documentation
- [ ] Minimalistic SPA router

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

## License

[MIT License](https://oss.ninja/mit/osdevisnot) @ [osdevisnot](https://github.com/osdevisnot)
