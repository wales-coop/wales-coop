import hapi from 'hapi';
import plugins from './plugins';
import routes from './routes';

const server = new hapi.Server();

server.connection({
  port: process.env.PORT || 4000,
});

server.register(plugins, (err) => {
  if (err) throw err;
  server.route(routes);
});

server.start(() => {
  // eslint-disable-next-line no-console
  console.log(`Server is currently running on: ${server.info.uri}`);
});
