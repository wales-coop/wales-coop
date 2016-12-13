/* global $ */

export const getBusiness = username =>
  $.get('/api/businesses', { username });

export const getResponses = businessId =>
  $.get('/api/responses', { businessId });

export const getMe = () =>
  $.get('/api/me');

export const getResources = () =>
  $.get('api/resources');
