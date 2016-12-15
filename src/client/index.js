/* global $ document window */
import 'materialize-css';
import { compose } from 'ramda';
import home from './home/';
import loginForm from './login-form';
import registerForm from './register-form';
import admin from './admin';


const extractRoute = href => [href.split('/')[3], href.split('=')[1]];
const getHref = () => window.location.href;

const router = ([path, filterSelector]) => new Map([
    ['', home],
    ['login', loginForm],
    ['register', registerForm],
    ['admin', admin(filterSelector)],
]).get(path);

compose(
    $(document).ready,
    router,
    extractRoute,
    getHref,
       )();
