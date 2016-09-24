const hapi = require('hapi');
const plugins = require('./plugins');
const routes = require('./routes');

const server = new hapi.Server();

server.connection({
  port: process.env.PORT || 4000,
  host: 'localhost',
});

server.register(plugins, (err) => {
  if (err) throw err;
  server.route(routes);
});

server.start(() => {
  console.log(`Server is currently running on: ${server.info.uri}`);
});
