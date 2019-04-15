module.exports = {
  apps : [
    {
      name: 'roman-numerals test',
      script: 'node_modules/mocha/bin/mocha',
      args: '--colors katas/roman-numerals/roman-numerals.spec.js',
      env: {
        NODE_ENV: 'development',
        PORT: 7002
      }
    },
    {
      name: 'roman-numerals',
      script: 'katas/roman-numerals/roman-numerals.js',
      watch: 'katas/roman-numerals',
      env: {
        NODE_ENV: 'development',
        PORT: 7001
      }
    }
  ]
};
