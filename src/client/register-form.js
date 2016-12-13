/* global document $ */
import 'jquery-validation';

export default function () {
  $('select').material_select();

  $.validator.setDefaults({
    errorClass: 'invalid',
    validClass: 'valid',
    errorPlacement(error, element) {
      $(element)
        .closest('form')
        .find(`label[for='${element.attr('id')}']`)
        .attr('data-error', error.text());
    },
  });

  $('#register-form').validate({
    rules: {
      confirmPassword: {
        equalTo: '#register-password',
      },
      username: {
        remote: {
          url: '/api/businesses',
          type: 'get',
          dataFilter: response => JSON.stringify(!JSON.parse(response).length),
        },
      },
    },
    messages: {
      confirmPassword: {
        equalTo: 'Passwords must match',
      },
      username: {
        remote: 'Username already taken',
      },
    },
  });
  return undefined;
}
