/* global $ */

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
