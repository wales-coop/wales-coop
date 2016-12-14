/* global $ */

export default error =>
  $('#content-container').html(
    $(error.responseText).find('#content-container').html(),
  );
