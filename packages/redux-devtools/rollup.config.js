const bundles = require('tslib-cli');

export default bundles([
  {
    input: 'src/devtools.ts',
    output: { format: 'umd', file: 'dist/devtools.js', name: 'devtools' },
    external: ['@znix/znix'],
    globals: {
      '@znix/znix': 'znix'
    }
  }
]);
