import { compose, prop, head } from 'ramda';
import * as api from './api/';
import handleError from './error';

// const tr = a => b => { console.log(a, b); return b };

export const showResponses = () => null;

export const showQuestions = (responses) => {
  if (responses.length) return showResponses();
  return api.getResources()
  .then(console.log.bind(console, 'resources'));
};

export const getPreviousResponses = () =>
  api.getMe()
  .then(compose(prop('id'), head, JSON.parse))
  .then(api.getResponses)
  .then(JSON.parse)
  .then(showQuestions)
  .fail(handleError);

export default function () {
  getPreviousResponses().then(showQuestions);
}

