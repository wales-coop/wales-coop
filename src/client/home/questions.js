/* global $ */

export const startQuestions = () =>
  console.log('going');

export const openModal = (questions) => {
  $('.modal').modal({
    complete: startQuestions.bind(null, questions),
  });
  $('#home-modal').modal('open');
};


export default function (questions) {
  openModal(questions);
}

