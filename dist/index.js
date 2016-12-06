'use strict';

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

var _plugins = require('./plugins');

var _plugins2 = _interopRequireDefault(_plugins);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = new _hapi2.default.Server();

server.connection({
  port: process.env.PORT || 4000
});

server.register(_plugins2.default, function (err) {
  if (err) throw err;
  server.route(_routes2.default);
});

server.start(function () {
  // eslint-disable-next-line no-console
  console.log('Server is currently running on: ' + server.info.uri);
});
//# sourceMappingURL=index.js.map