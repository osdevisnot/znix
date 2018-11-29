const bundles = require('tslib-cli');

export default bundles([
  {
    input: 'src/index.ts',
    output: { file: 'dist/index.js', format: 'iife' },
    devServer: true
  }
]);
