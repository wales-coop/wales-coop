import { compose, prop, head } from 'ramda';
import * as api from './api/';

// const tr = a => b => { console.log(a, b); return b };

export default function () {
  api.getMe()
    .then(compose(prop('id'), head, JSON.parse))
    .then(api.getResponses)
    .then(JSON.parse)
    .fail(console.log.bind(console));
}

