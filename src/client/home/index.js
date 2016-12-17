/* global $ */
import { compose, prop, head } from 'ramda';
import * as api from '../api/';
import handleError from '../error';
import runQuestionnaire from './questions';

$('.collapsible').collapsible();

export const showResponses = () => null;

export const showQuestions = (responses) => {
  if (responses.length) return showResponses();
  return api.getQuestions()
    .then(runQuestionnaire);
};

export const getPreviousResponses = () =>
  api.getMe()
  .then(compose(prop('id'), head))
  .then(api.getResponses);

export default function () {
  getPreviousResponses()
  .then(showQuestions)
  .fail(handleError);
}

