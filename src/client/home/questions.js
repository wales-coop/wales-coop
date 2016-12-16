/* global $ localStorage */
import updateChart, * as chart from './chart';

// const colour = '#E72B37';

const finish = (state) => {
  $('h4.question-text')
    .text('Thank you! Click the areas below to access relevant resources.');
  localStorage.removeItem('responses');
  $('.question-button-wrapper').slideUp('slow');
  chart.awaitSelection(state);
};

export const stateReducer = (state, e) => ({
  ...state,
  responses: state.responses.concat(
    e.target.id === 'question-button-yes' && state.questions[state.responses.length].expects_yes,
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
  $('h4.question-text').fadeOut('fast', function () {
    $(this).text(state.questions[state.responses.length].question);
    $('.question-button-wrapper').on('click', clickHandler(state));
  }).fadeIn('fast');
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
  chart.init(state);
  return state.responses.length
    ? nextQuestion(state)
    : openModal(state);
}

