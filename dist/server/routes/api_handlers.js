'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getQuestions = exports.postResponses = exports.getResources = exports.getResponses = exports.getBusinesses = exports.postBusiness = exports.formatBusinessPayload = exports.returnData = exports.loginPostedBusiness = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _db = require('../db/');

var db = _interopRequireWildcard(_db);

var _ui_handlers = require('./ui_handlers');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loginPostedBusiness = exports.loginPostedBusiness = function loginPostedBusiness(req, rep) {
  return function (_ref) {
    var rows = _ref.rows;

    req.cookieAuth.set((0, _ui_handlers.makeCookie)(rows[0]));
    return rep.redirect('/');
  };
};

var returnData = exports.returnData = function returnData(req, rep) {
  return function (_ref2) {
    var rows = _ref2.rows;
    return rep(JSON.stringify(rows));
  };
};

var formatBusinessPayload = exports.formatBusinessPayload = function formatBusinessPayload(payload) {
  return function (hashedPass) {
    return _extends({}, payload, {
      password: undefined,
      hashedPass: hashedPass,
      helpBefore: (0, _moment2.default)().add(payload.helpBefore, 'weeks')
    });
  };
};

var postBusiness = exports.postBusiness = function postBusiness(req, rep) {
  return _bcrypt2.default.hash(req.payload.password, 10).then(formatBusinessPayload(req.payload)).then(db.postBusiness).then(loginPostedBusiness(req, rep)).catch((0, _ui_handlers.handleError)(req, rep));
};

var getBusinesses = exports.getBusinesses = function getBusinesses(req, rep) {
  return db.getBusinesses(req.query).then(returnData(req, rep)).catch((0, _ui_handlers.handleError)(req, rep));
};

var getResponses = exports.getResponses = function getResponses(req, rep) {
  return db.getResponses(req.query).then(returnData(req, rep)).catch((0, _ui_handlers.handleError)(req, rep));
};

var getResources = exports.getResources = function getResources(req, rep) {
  return db.getResources().then(returnData(req, rep)).catch((0, _ui_handlers.handleError)(req, rep));
};

var postResponses = exports.postResponses = function postResponses(req, rep) {
  return db.postResponses(req.payload).then(returnData(req, rep)).catch((0, _ui_handlers.handleError)(req, rep));
};

var getQuestions = exports.getQuestions = function getQuestions(req, rep) {
  return db.getQuestions().then(returnData(req, rep)).catch((0, _ui_handlers.handleError)(req, rep));
};
//# sourceMappingURL=api_handlers.js.map