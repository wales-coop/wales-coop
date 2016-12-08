import * as db from './db/';

export const handleError = (req, rep) => (error) => {
  console.log(error);
  return rep(error);
};

export const makeCookie = payload => ({
  username: payload.username,
  scope: payload.username === 'wales-coop' ? 'admin' : 'user',
});

export const onLogin = (req, rep) => (isValid) => {
  if (isValid) {
    req.cookieAuth.set(makeCookie(req.payload));
    return rep.redirect('/');
  }
  return handleError(req, rep)(new Error('Invalid login details'));
};

export const login = (req, rep) => {
  if (req.method === 'get') {
    if (req.auth.isAuthenticated) return rep.redirect('/');
    return rep.file('login.html');
  }
  if (req.method === 'post') {
    db.login(req.payload)
      .then(onLogin(req, rep))
      .catch(handleError(req, rep));
  }
  return undefined;
};

export const onRegister = (req, rep) => (dbResult) => {
  if (dbResult) {
    req.cookieAuth.set(makeCookie(req.payload));
    return rep.redirect('/');
  }
  return handleError(req, rep)(new Error('Problem registering. Please try again'));
};

export const register = (req, rep) => {
  if (req.method === 'get') {
    if (req.auth.isAuthenticated) return rep.redirect('/');
    return rep.file('register.html');
  }
  if (req.method === 'post') {
    db.register(req.payload)
      .then(onRegister(req, rep))
      .catch(handleError(req, rep));
  }
  return undefined;
};

export const home = (req, rep) =>
  rep.file('index.html');

export const logout = (req, rep) => {
  req.cookieAuth.clear();
  rep.redirect('/login');
};
