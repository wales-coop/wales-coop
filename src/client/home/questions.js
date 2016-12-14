/* global $ localStorage */
import { append, over, lensProp } from 'ramda';
import updateChart from './chart';

// const colour = '#E72B37';

const finish = () => {
  console.log(localStorage.getItem('responses'));
  localStorage.removeItem('responses');
  $('.question-container').remove();
};

export const stateReducer = e => over(
  lensProp('responses'),
  append(e.target.id === 'question-button-yes'),
);

export const setLocalStorage = state =>
  localStorage.setItem('responses', JSON.stringify(state));

export const clickHandler = state => (e) => {
  $('.question-button-wrapper').off('click');
  const newState = stateReducer(e)(state);
  setLocalStorage(newState);
  updateChart(newState);
  return newState.questions.length === newState.responses.length
    ? finish(newState)
    : nextQuestion(newState); // eslint-disable-line no-use-before-define
};

export const nextQuestion = (state) => {
  $('h4.question-text')
    .text(state.questions[state.responses.length].question);
  $('.question-button-wrapper').on('click', clickHandler(state));
  return state;
};

export const openModal = (state) => {
  $('.modal').modal({
    complete: nextQuestion(state),
  });
  $('#home-modal').modal('open');
  return state;
};

export default function (questions) {
  if (typeof Storage === 'undefined') throw new Error('Browser not supported');
  const state = JSON.parse(localStorage.getItem('responses')) || { questions, responses: [] };
  updateChart(state);
  return state.responses.length
    ? nextQuestion(state)
    : openModal(state);
}

