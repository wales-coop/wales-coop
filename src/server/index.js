import hapi from 'hapi';
import setEnvVariablesFrom from 'env2';
import plugins from './plugins';
import routes from './routes';
import { baseConfig } from './auth';

setEnvVariablesFrom('../../config.env');

const server = new hapi.Server();

server.connection({
  port: process.env.PORT || 4000,
});

server.register(plugins, (err) => {
  if (err) throw err;
  server.auth.strategy('base', 'cookie', 'required', baseConfig);
  server.route(routes);
});

server.start(() =>
  // eslint-disable-next-line no-console
  console.log(`Server started on: ${server.info.uri}`));
