'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{
  path: '/{param*}',
  method: 'GET',
  handler: {
    directory: {
      path: './public',
      listing: false
    }
  }
}];
//# sourceMappingURL=routes.js.map