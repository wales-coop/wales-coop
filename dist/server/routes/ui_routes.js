'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ui_handlers = require('./ui_handlers');

var ui = _interopRequireWildcard(_ui_handlers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var uiRoutes = [{
  method: 'GET',
  path: '/',
  config: {
    handler: ui.home
  }
}, {
  method: 'GET',
  path: '/admin',
  config: {
    handler: ui.admin,
    auth: {
      scope: 'admin'
    }
  }
}, {
  method: ['GET', 'POST'],
  path: '/login',
  config: {
    handler: ui.login,
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
  path: '/register',
  config: {
    handler: ui.register,
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
  method: 'POST',
  path: '/logout',
  config: {
    handler: ui.logout
  }
}, {
  method: 'GET',
  path: '/{param*}',
  config: {
    handler: {
      directory: {
        path: '.',
        listing: false
      }
    },
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

exports.default = uiRoutes;
//# sourceMappingURL=ui_routes.js.map