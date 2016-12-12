/* global document $ */
import 'jquery-validation';

export default function () {
  $('select').material_select();

  $('#register-form').validate({
    rules: {
      confirmPassword: {
        equalTo: '#register-password',
      },
    },
    messages: {
      confirmPassword: {
        equalTo: 'Passwords must match',
      },
    },
    errorClass: 'invalid',
    validClass: 'valid',
    errorPlacement(error, element) {
      $(element)
        .closest('form')
        .find(`label[for='${element.attr('id')}']`)
        .attr('data-error', error.text());
    },
  });
  return undefined;
}
