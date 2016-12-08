import * as handlers from './handlers';

const routes = [
  {
    method: 'GET',
    path: '/',
    config: {
      handler: handlers.home,
    },
  }, {
    method: 'GET',
    path: '/admin',
    config: {
      handler: handlers.admin,
      auth: {
        scope: 'admin',
      },
    },
  }, {
    method: ['GET', 'POST'],
    path: '/login',
    config: {
      handler: handlers.login,
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
    method: ['GET', 'POST'],
    path: '/register',
    config: {
      handler: handlers.register,
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
      handler: handlers.logout,
    },
  }, {
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: '.',
        listing: false,
      },
    },
  },
];

export default routes;
