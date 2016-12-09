import bcrypt from 'bcrypt';
import * as db from '../db/';

export const handleError = (req, rep) => (error) => {
  console.log(error);
  return rep(error);
};

export const makeCookie = ({ id, username }) => ({
  id,
  username,
  scope: username === 'wales-coop' ? ['admin'] : ['user'],
});

export const validateLogin = payload => ({ rows }) =>
  bcrypt.compare(payload.password, rows[0].password)
    .then(isValid => (
      isValid
      ? rows[0]
      : Promise.reject(new Error('Invalid login details'))
    ));

export const onLoginValidated = (req, rep) => (userData) => {
  req.cookieAuth.set(makeCookie(userData));
  return rep.redirect('/');
};

export const login = (req, rep) => {
  if (req.method === 'get') {
    if (req.auth.isAuthenticated) return rep.redirect('/');
    return rep.view('login');
  }
  if (req.method === 'post') {
    db.login(req.payload)
      .then(validateLogin(req.payload))
      .then(onLoginValidated(req, rep))
      .catch(handleError(req, rep));
  }
  return undefined;
};

export const register = (req, rep) => {
  if (req.auth.isAuthenticated) return rep.redirect('/');
  return rep.view('register');
};

export const home = (req, rep) => {
  if (req.auth.credentials.scope.indexOf('user') > -1) {
    return rep.view('home');
  } else if (req.auth.credentials.scope.indexOf('admin') > -1) {
    return rep.redirect('/admin');
  }
  return undefined;
};

export const logout = (req, rep) => {
  req.cookieAuth.clear();
  rep.redirect('/login');
};

export const admin = (req, rep) => {
  rep.view('admin');
};
