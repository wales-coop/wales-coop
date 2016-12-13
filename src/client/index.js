/* global $ document window */
import 'materialize-css';
import { compose } from 'ramda';
import loginForm from './login-form';
import registerForm from './register-form';
import chart from './admin'


const extractRoute = href => href.split('/')[3];
const getHref = () => window.location.href;

const router = new Map([
  ['login', loginForm],
  ['register', registerForm],
  ['admin', chart]
]);

compose(
  $(document).ready,
  router.get.bind(router),
  extractRoute,
  getHref,
)();
