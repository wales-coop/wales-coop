/* global $ */

export const getBusiness = username =>
  $.get('/api/businesses', { username });
