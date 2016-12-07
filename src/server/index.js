import hapi from 'hapi';
import Path from 'path';
import plugins from './plugins';
import routes from './routes';
import { baseConfig } from './auth';
import logger from './logger';

const server = new hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: Path.join(__dirname, '..', '..', 'public'),
      },
    },
  },
});

server.connection({
  port: process.env.PORT || 4000,
});

server.register(plugins, (err) => {
  if (err) throw err;
  server.auth.strategy('base', 'cookie', 'required', baseConfig);
  server.route(routes);
  server.start(() =>
    // eslint-disable-next-line no-console
    console.log(`Backend server started on: ${server.info.uri}`));
  if (process.env.NODE_ENV === 'development') logger(server);
});

