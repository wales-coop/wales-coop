/* global $ document window */
import 'materialize-css';
import { compose } from 'ramda';
import home from './home/';
import loginForm from './login-form';
import registerForm from './register-form';
import admin from './admin';
import getParameterByName from './helpers';


export const extractRoute = href => [
  href.split('?')[0].split('/')[3],
  getParameterByName('filter', href),
  getParameterByName('type', href),
];

export const getHref = () => window.location.href;

export const router = ([path, filterSelector, typeSelector]) => {
  new Map([
    ['', home],
    ['login', loginForm],
    ['register', registerForm],
    ['admin', admin(filterSelector, typeSelector)],
  ]).get(path);
};

compose(
  $(document).ready,
  router,
  extractRoute,
  getHref,
)();

