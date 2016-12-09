import * as ui from './ui_handlers';

const uiRoutes = [
  {
    method: 'GET',
    path: '/',
    config: {
      handler: ui.home,
    },
  }, {
    method: 'GET',
    path: '/admin',
    config: {
      handler: ui.admin,
      auth: {
        scope: 'admin',
      },
    },
  }, {
    method: ['GET', 'POST'],
    path: '/login',
    config: {
      handler: ui.login,
      auth: {
        mode: 'try',
      },
      plugins: {
        'hapi-auth-cookie': {
          redirectTo: false,
        },
      },
    },
  }, {
    method: 'GET',
    path: '/register',
    config: {
      handler: ui.register,
      auth: {
        mode: 'try',
      },
      plugins: {
        'hapi-auth-cookie': {
          redirectTo: false,
        },
      },
    },
  }, {
    method: 'POST',
    path: '/logout',
    config: {
      handler: ui.logout,
    },
  }, {
    method: 'GET',
    path: '/{param*}',
    config: {
      handler: {
        directory: {
          path: '.',
          listing: false,
        },
      },
      auth: {
        mode: 'try',
      },
      plugins: {
        'hapi-auth-cookie': {
          redirectTo: false,
        },
      },
    },
  },
];

export default uiRoutes;
