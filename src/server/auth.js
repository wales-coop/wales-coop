const daysInMs = n => n * 24 * 60 * 60 * 1000;

export const baseConfig = {
  password: process.env.COOKIE_SECRET,
  cookie: 'wales-coop-targeted-engagement',
  isSecure: process.env.NODE_ENV !== 'development',
  ttl: daysInMs(3),
  keepAlive: true,
  redirectTo: '/login',
};

export default null;
