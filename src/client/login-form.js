import * as api from './api/';

export default function () {
  // test
  api.getBusiness()
    .done(arg => console.log('Success', arg))
    .fail(err => console.log('Error', err));
  return undefined;
}
