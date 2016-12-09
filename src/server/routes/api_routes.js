import * as api from './api_handlers';

const apiRoutes = [
  {
    method: 'GET',
    path: '/api/questions',
    config: {
      handler: api.getQuestions,
    },
  }, {
    method: 'POST',
    path: '/api/responses',
    config: {
      handler: api.postResponses,
    },
  }, {
    method: 'GET',
    path: '/api/resources',
    config: {
      handler: api.getResources,
    },
  }, {
    method: 'POST',
    path: '/api/businesses',
    config: {
      handler: api.postBusiness,
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
    path: '/api/responses',
    config: {
      handler: api.getResponses,
    },
  }, {
    method: 'GET',
    path: '/api/businesses',
    config: {
      handler: api.getBusinesses,
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

export default apiRoutes;
