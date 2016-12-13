'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getResources = exports.getResourcesQuery = exports.postResponses = exports.postResponsesQuery = exports.generateResponsesInsertValues = exports.generateResponsesInsertValuePlaceholders = exports.getResponses = exports.getResponsesQuery = exports.getQuestions = exports.getQuestionsQuery = exports.getBusinesses = exports.getBusinessesQuery = exports.postBusiness = exports.postBusinessQuery = exports.login = exports.loginQuery = undefined;

var _pool = require('./pool');

var _pool2 = _interopRequireDefault(_pool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var loginQuery = exports.loginQuery = function loginQuery(payload) {
  return ['SELECT * FROM businesses WHERE username = $1', [payload.username]];
};

var login = exports.login = function login(payload) {
  return _pool2.default.query.apply(_pool2.default, _toConsumableArray(loginQuery(payload)));
};

var postBusinessQuery = exports.postBusinessQuery = function postBusinessQuery(payload) {
  return ['INSERT INTO businesses(username, password, name, address, type, sector, contact, telephone, email, help_before) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id, username', [payload.username, payload.hashedPass, payload.name, payload.address, payload.type, payload.sector, payload.contact, payload.telephone, payload.email, payload.helpBefore]];
};

var postBusiness = exports.postBusiness = function postBusiness(payload) {
  return _pool2.default.query.apply(_pool2.default, _toConsumableArray(postBusinessQuery(payload)));
};

var getBusinessesQuery = exports.getBusinessesQuery = function getBusinessesQuery(query) {
  return query.username ? ['SELECT * FROM businesses WHERE username = $1', [query.username]] : ['SELECT * FROM businesses'];
};

var getBusinesses = exports.getBusinesses = function getBusinesses(query) {
  return _pool2.default.query.apply(_pool2.default, _toConsumableArray(getBusinessesQuery(query)));
};

var getQuestionsQuery = exports.getQuestionsQuery = function getQuestionsQuery() {
  return ['SELECT * FROM questions\n   INNER JOIN topics ON questions.topic_id = topics.id'];
};

var getQuestions = exports.getQuestions = function getQuestions() {
  return _pool2.default.query.apply(_pool2.default, _toConsumableArray(getQuestionsQuery()));
};

var getResponsesQuery = exports.getResponsesQuery = function getResponsesQuery(query) {
  var baseQuery = 'SELECT * FROM interests\n      INNER JOIN businesses ON interests.business_id = businesses.id\n      INNER JOIN questions ON interests.question_id = questions.id\n      INNER JOIN topics ON questions.topic_id = topics.id';
  if (query.business_id) {
    return [baseQuery + ' WHERE business_id = $1', [query.business_id]];
  }
  if (query.type) {
    return [baseQuery + ' WHERE businesses.type = $1', [query.type]];
  }
  return [baseQuery];
};

var getResponses = exports.getResponses = function getResponses(query) {
  return _pool2.default.query.apply(_pool2.default, _toConsumableArray(getResponsesQuery(query)));
};

var generateResponsesInsertValuePlaceholders = exports.generateResponsesInsertValuePlaceholders = function generateResponsesInsertValuePlaceholders(response, idx) {
  return '($' + (idx * 3 + 1) + ', $' + (idx * 3 + 2) + ', $' + (idx * 3 + 3) + ')';
};

var generateResponsesInsertValues = exports.generateResponsesInsertValues = function generateResponsesInsertValues(businessId) {
  return function (response) {
    return [businessId, response.question_id, response.response];
  };
};

var postResponsesQuery = exports.postResponsesQuery = function postResponsesQuery(payload) {
  var _ref;

  return ['INSERT INTO interests (business_id, question_id, response) VALUES\n    ' + payload.responses.map(generateResponsesInsertValuePlaceholders).join(','), [(_ref = []).concat.apply(_ref, _toConsumableArray(payload.responses.map(generateResponsesInsertValues(payload.business_id))))]];
};

var postResponses = exports.postResponses = function postResponses(payload) {
  return _pool2.default.query.apply(_pool2.default, _toConsumableArray(postResponsesQuery(payload)));
};

var getResourcesQuery = exports.getResourcesQuery = function getResourcesQuery(query) {
  var baseQuery = 'SELECT * FROM resources INNER JOIN topics\n   ON resources.topic_id = topics.id';
  return query.topic_id ? [baseQuery + ' WHERE topic_id = $1', [query.topic_id]] : [baseQuery];
};

var getResources = exports.getResources = function getResources(query) {
  return _pool2.default.query.apply(_pool2.default, _toConsumableArray(getResourcesQuery(query)));
};
//# sourceMappingURL=index.js.map