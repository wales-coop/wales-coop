import { Pool } from 'pg';
import url from 'url';

if (!process.env.DB_URL) throw new Error('Environment variable DB_URL must be set');

const params = url.parse(process.env.DB_URL);
const [username, password] = params.auth.split(':');

const options = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
  max: process.env.DB_MAX_CONNECTIONS || 4,
};

if (username) options.user = username;
if (password) options.password = password;
options.ssl = (options.host !== 'localhost');

const pool = new Pool(options);

pool.on('error', err =>
  // eslint-disable-next-line no-console
  console.log('Idle client error:', err.message, err.stack));

export default pool;
