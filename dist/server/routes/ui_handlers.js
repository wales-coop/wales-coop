'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.admin = exports.logout = exports.home = exports.register = exports.login = exports.onLoginValidated = exports.validateLogin = exports.makeCookie = exports.handleError = undefined;

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _db = require('../db/');

var db = _interopRequireWildcard(_db);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleError = exports.handleError = function handleError(req, rep) {
  return function (error) {
    console.log('from handleError......', error);
    return rep(error);
  };
};

var makeCookie = exports.makeCookie = function makeCookie(_ref) {
  var id = _ref.id,
      username = _ref.username;
  return {
    id: id,
    username: username,
    scope: username === 'wales-coop' ? ['admin'] : ['user']
  };
};

var validateLogin = exports.validateLogin = function validateLogin(payload) {
  return function (_ref2) {
    var rows = _ref2.rows;
    return rows.length ? _bcrypt2.default.compare(payload.password, rows[0].password.toString('utf-8')).then(function (isValid) {
      return isValid ? rows[0] : Promise.reject(new Error('Invalid login details'));
    }) : Promise.reject(new Error('Invalid login details'));
  };
};

var onLoginValidated = exports.onLoginValidated = function onLoginValidated(req, rep) {
  return function (userData) {
    req.cookieAuth.set(makeCookie(userData));
    return rep.redirect('/');
  };
};

var login = exports.login = function login(req, rep) {
  if (req.method === 'get') {
    if (req.auth.isAuthenticated) return rep.redirect('/');
    return rep.view('login');
  }
  if (req.method === 'post') {
    db.login(req.payload).then(validateLogin(req.payload)).then(onLoginValidated(req, rep)).catch(handleError(req, rep));
  }
  return undefined;
};

var register = exports.register = function register(req, rep) {
  if (req.auth.isAuthenticated) return rep.redirect('/');
  return rep.view('register');
};

var home = exports.home = function home(req, rep) {
  if (req.auth.credentials.scope.indexOf('user') > -1) {
    return rep.view('home', {
      username: req.auth.credentials.username
    });
  } else if (req.auth.credentials.scope.indexOf('admin') > -1) {
    return rep.redirect('/admin');
  }
  return undefined;
};

var logout = exports.logout = function logout(req, rep) {
  req.cookieAuth.clear();
  rep.redirect('/login');
};

var admin = exports.admin = function admin(req, rep) {
  rep.view('admin', {
    username: req.auth.credentials.username
  });
};
//# sourceMappingURL=ui_handlers.js.map