import * as handlers from './handlers';

const routes = [
  {
    method: 'GET',
    path: '/',
    config: {
      handler: handlers.home,
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
    method: 'GET',
    path: '/logout',
    config: {
      handler: handlers.logout,
    },
  }, {
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: './public',
        listing: false,
      },
    },
  },
];

export default routes;
