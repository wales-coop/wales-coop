const hapi = require('hapi');
const plugins = require('./plugins');
const routes = require('./routes');
const fs = require('fs');
const path = require('path');

const server = new hapi.Server();

server.connection({
  /*
  tls: {
    key: fs.readFileSync(path.join(__dirname, '../key.pem')),
    cert: fs.readFileSync(path.join(__dirname, '../cert.pem')),
  },
  */
  port: process.env.PORT || 4000,
});

server.register(plugins, (err) => {
  if (err) throw err;
  server.route(routes);
});

server.start(() => {
  console.log(`Server is currently running on: ${server.info.uri}`);
});
