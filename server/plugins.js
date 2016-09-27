const inert = require('inert');
const requireHttps = require('hapi-require-https');

module.exports = [
  inert,
  requireHttps,
];
