'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var logger = function logger(server) {
  return server.on('response', function (request) {
    return console.log(request.info.remoteAddress + ': ' + request.method.toUpperCase() + ' ' + request.url.path + ' --> ' + request.response.statusCode);
  });
};

exports.default = logger;
//# sourceMappingURL=logger.js.map