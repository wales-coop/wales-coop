'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _pool = require('./pool');

var _pool2 = _interopRequireDefault(_pool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sql = _fs2.default.readFileSync(__dirname + '/build.sql', 'utf8');

var createTables = _pool2.default.query(sql, function (error, result) {
  return error
  // eslint-disable-next-line no-console
  ? console.log('Error:', error)
  // eslint-disable-next-line no-console
  : console.log('Loaded PostgreSQL tables:', result);
});

exports.default = createTables;
//# sourceMappingURL=build.js.map