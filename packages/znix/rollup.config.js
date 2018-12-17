const bundles = require('tslib-cli')

export default bundles([
  { input: 'src/znix.ts', output: { file: 'dist/esm/znix.js', format: 'esm' } },
  { input: 'src/znix.ts', output: { file: 'dist/znix.js', format: 'umd', name: 'znix' } },
  { input: 'src/znix.ts', output: { file: 'dist/znix.min.js', format: 'umd', name: 'znix' }, minify: true }
])
