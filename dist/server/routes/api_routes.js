'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api_handlers = require('./api_handlers');

var api = _interopRequireWildcard(_api_handlers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var apiRoutes = [{
  method: 'GET',
  path: '/api/questions',
  config: {
    handler: api.getQuestions
  }
}, {
  method: 'POST',
  path: '/api/responses',
  config: {
    handler: api.postResponses
  }
}, {
  method: 'GET',
  path: '/api/resources',
  config: {
    handler: api.getResources
  }
}, {
  method: 'POST',
  path: '/api/businesses',
  config: {
    handler: api.postBusiness,
    auth: {
      mode: 'try'
    },
    plugins: {
      'hapi-auth-cookie': {
        redirectTo: false
      }
    }
  }
}, {
  method: 'GET',
  path: '/api/responses',
  config: {
    handler: api.getResponses
  }
}, {
  method: 'GET',
  path: '/api/businesses',
  config: {
    handler: api.getBusinesses,
    auth: {
      mode: 'try'
    },
    plugins: {
      'hapi-auth-cookie': {
        redirectTo: false
      }
    }
  }
}];

exports.default = apiRoutes;
//# sourceMappingURL=api_routes.js.map