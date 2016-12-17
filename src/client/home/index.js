/* global $ localStorage */
import { compose, prop, head } from 'ramda';
import * as api from '../api/';
import handleError from '../error';
import runQuestionnaire from './questions';
import * as chart from './chart';

$('.collapsible').collapsible();

export const convertResponsesToState = responses => ({
  responses: responses.map(response => response.response),
  questions: responses.map(response => ({
    expects_yes: response.expects_yes,
    id: response.question_id,
    question: response.question,
    topic: response.topic,
    topic_id: response.topic_id,
  })),
});

export const showResponses = (responses) => {
  const state = convertResponsesToState(responses);
  chart.init(state);
  chart.awaitSelection(state);
  $('h4.question-text')
    .text('Welcome back! Click the areas below to access relevant resources.');
};

export const showQuestions = (responses) => {
  if (responses.length) return showResponses(responses);
  return api.getQuestions()
    .then(runQuestionnaire);
};

export const storeBusinessId = (id) => {
  if (typeof Storage === 'undefined') throw new Error('Browser not supported');
  localStorage.setItem('businessId', JSON.stringify(id));
  return id;
};

export const getPreviousResponses = () =>
  api.getMe()
    .then(compose(prop('id'), head))
    .then(storeBusinessId)
    .then(api.getResponses);

export default function () {
  getPreviousResponses()
    .then(showQuestions)
    .fail(handleError);
}

