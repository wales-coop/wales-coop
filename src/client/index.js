/* global $ document window */
import 'materialize-css';
import { compose } from 'ramda';
import home from './home/';
import loginForm from './login-form';
import registerForm from './register-form';

const extractRoute = href => href.split('/')[3];
const getHref = () => window.location.href;

const router = new Map([
  ['', home],
  ['login', loginForm],
  ['register', registerForm],
]);

compose(
  $(document).ready,
  router.get.bind(router),
  extractRoute,
  getHref,
)();
