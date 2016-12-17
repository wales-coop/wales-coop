/* global $ localStorage */

export const getBusiness = username =>
  $.get('/api/businesses', { username })
    .then(JSON.parse);

export const getResponses = businessId =>
  $.get('/api/responses', { businessId })
    .then(JSON.parse);

export const getMe = () =>
  $.get('/api/me')
    .then(JSON.parse);

export const getResources = topicId =>
  $.get('api/resources', { topicId })
    .then(JSON.parse);

export const getQuestions = () =>
  $.get('api/questions')
    .then(JSON.parse);

export const getQuestionnirePayload = state => ({
  businessId: JSON.parse(localStorage.getItem('businessId')),
  responses: JSON.stringify(state.questions.map((question, idx) => ({
    questionId: question.id,
    response: state.responses[idx],
  }))),
});

export const submitQuestionnaire = state =>
  $.post('api/responses', getQuestionnirePayload(state))
    .then(JSON.parse);
