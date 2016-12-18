/* global $ localStorage */
import updateChart, * as chart from './chart';
import * as api from '../api/';
import handleError from '../error';

let resourcesPromiseExternal;

const finish = (state) => {
  $('h4.question-text')
    .text('Thank you! Click the areas below to access relevant resources.');
  $('.question-button-wrapper').slideUp('slow');
  chart.awaitSelection(state, resourcesPromiseExternal);
  api.submitQuestionnaire(state)
    .then(() => localStorage.removeItem('responses'))
    .fail(handleError);
};

export const stateReducer = (state, e) => ({
  ...state,
  responses: state.responses.concat(
    state.questions[state.responses.length].expects_yes
    ? (e.target.id === 'question-button-yes')
    : (e.target.id !== 'question-button-yes'),
 ),
});

export const setLocalStorage = state =>
  localStorage.setItem('responses', JSON.stringify(state));

export const clickHandler = state => (e) => {
  $('.question-button-wrapper').off('click');
  const newState = stateReducer(state, e);
  setLocalStorage(newState);
  updateChart(newState);
  return newState.questions.length === newState.responses.length
    ? finish(newState)
    : nextQuestion(newState); // eslint-disable-line no-use-before-define
};

export const nextQuestion = (state) => {
  $('.question-button-wrapper').fadeIn('fast');
  $('h4.question-text').fadeOut('fast', function () {
    $(this).text(state.questions[state.responses.length].question);
    $('.question-button-wrapper').on('click', clickHandler(state));
  }).fadeIn('fast');
  return state;
};

export const openModal = (state) => {
  $('.modal').modal();
  $('#home-modal').modal('open');
  nextQuestion(state);
  return state;
};

export default resourcesPromise => (questions) => {
  if (typeof Storage === 'undefined') throw new Error('Browser not supported');
  const state = JSON.parse(localStorage.getItem('responses')) || { questions, responses: [] };
  resourcesPromiseExternal = resourcesPromise;
  chart.init(state);
  return state.responses.length
    ? nextQuestion(state)
    : openModal(state);
};
