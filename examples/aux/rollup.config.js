const bundles = require('tslib-cli')

const isDev = !!process.env.ROLLUP_WATCH

export default bundles([
  {
    input: 'src/index.ts',
    output: { file: 'public/index.js', format: 'iife' },
    devServer: isDev,
    minify: !isDev,
    tsconfigOverride: isDev ? {} : { compilerOptions: { declaration: false } }
  }
])
