import inert from 'inert';
import Path from 'path';
import cookieAuth from 'hapi-auth-cookie';
import hapiError from 'hapi-error';
import vision from 'vision';
import Handlebars from 'handlebars';

const errorConfig = {
  templateName: 'errors.hbs',
};

export const viewsConfig = {
  engines: { hbs: Handlebars },
  relativeTo: Path.join(__dirname, '..'),
  path: 'views',
  layoutPath: Path.join('views', 'layout'),
  layout: 'default',
  partialsPath: Path.join('views', 'partials'),
  isCached: process.env.NODE_ENV !== 'development',
};

const daysInMs = n => n * 24 * 60 * 60 * 1000;

export const authConfig = {
  password: process.env.COOKIE_SECRET,
  cookie: 'wales-coop-targeted-engagement',
  isSecure: process.env.NODE_ENV !== 'development',
  ttl: daysInMs(3),
  keepAlive: true,
  redirectTo: '/login',
};

export default [
  inert,
  vision,
  {
    register: hapiError,
    options: errorConfig,
  },
  cookieAuth,
];
