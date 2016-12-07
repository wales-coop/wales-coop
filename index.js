require('env2')('./config.env');
require('babel-core/register')({
  sourceMaps: 'inline',
});
require('./src/server/index.js');
