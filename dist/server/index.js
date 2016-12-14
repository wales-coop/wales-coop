'use strict';

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _plugins = require('./plugins');

var plug = _interopRequireWildcard(_plugins);

var _routes = require('./routes/');

var _routes2 = _interopRequireDefault(_routes);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = new _hapi2.default.Server({
  connections: {
    routes: {
      files: {
        relativeTo: _path2.default.join(__dirname, '..', '..', 'public')
      }
    }
  }
});

server.connection({
  port: process.env.PORT || 4000
});

server.register(plug.default, function (err) {
  if (err) throw err;
  server.auth.strategy('base', 'cookie', 'required', plug.authConfig);
  server.views(plug.viewsConfig);
  server.route(_routes2.default);
  server.start(function () {
    return (
      // eslint-disable-next-line no-console
      console.log('Backend server started on: ' + server.info.uri)
    );
  });
  if (process.env.NODE_ENV === 'development') (0, _logger2.default)(server);
});
//# sourceMappingURL=index.js.map