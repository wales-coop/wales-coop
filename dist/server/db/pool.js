'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _pg = require('pg');

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (!process.env.DB_URL) throw new Error('Environment variable DB_URL must be set');

var params = _url2.default.parse(process.env.DB_URL);

var _params$auth$split = params.auth.split(':'),
    _params$auth$split2 = _slicedToArray(_params$auth$split, 2),
    username = _params$auth$split2[0],
    password = _params$auth$split2[1];

var options = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
  max: process.env.DB_MAX_CONNECTIONS || 4
};

if (username) options.user = username;
if (password) options.password = password;
options.ssl = options.host !== 'localhost';

var pool = new _pg.Pool(options);

pool.on('error', function (err) {
  return (
    // eslint-disable-next-line no-console
    console.log('Idle client error:', err.message, err.stack)
  );
});

exports.default = pool;
//# sourceMappingURL=pool.js.map