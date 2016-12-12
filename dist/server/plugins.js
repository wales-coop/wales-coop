'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authConfig = exports.viewsConfig = undefined;

var _inert = require('inert');

var _inert2 = _interopRequireDefault(_inert);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _hapiAuthCookie = require('hapi-auth-cookie');

var _hapiAuthCookie2 = _interopRequireDefault(_hapiAuthCookie);

var _hapiError = require('hapi-error');

var _hapiError2 = _interopRequireDefault(_hapiError);

var _vision = require('vision');

var _vision2 = _interopRequireDefault(_vision);

var _handlebars = require('handlebars');

var _handlebars2 = _interopRequireDefault(_handlebars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var errorConfig = {
  templateName: 'errors.hbs'
};

var viewsConfig = exports.viewsConfig = {
  engines: { hbs: _handlebars2.default },
  relativeTo: _path2.default.join(__dirname, '..', '..'),
  path: 'views',
  layoutPath: _path2.default.join('views', 'layout'),
  layout: 'default',
  partialsPath: _path2.default.join('views', 'partials'),
  isCached: process.env.NODE_ENV !== 'development'
};

var daysInMs = function daysInMs(n) {
  return n * 24 * 60 * 60 * 1000;
};

var authConfig = exports.authConfig = {
  password: process.env.COOKIE_SECRET,
  cookie: 'wales-coop-targeted-engagement',
  isSecure: process.env.NODE_ENV !== 'development',
  ttl: daysInMs(3),
  keepAlive: true,
  redirectTo: '/login'
};

exports.default = [_inert2.default, _vision2.default, {
  register: _hapiError2.default,
  options: errorConfig
}, _hapiAuthCookie2.default];
//# sourceMappingURL=plugins.js.map