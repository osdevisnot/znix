const bundles = require('tslib-cli');

export default bundles([
  { input: 'src/znix.ts', output: { format: 'umd', file: 'dist/znix.js', name: 'znix' } },
  { input: 'src/znix.ts', output: { format: 'umd', file: 'dist/znix.min.js', name: 'znix' }, minify: true },
  { input: 'src/devtools.ts', output: { format: 'cjs', file: 'dist/devtools.js' } }
]);
