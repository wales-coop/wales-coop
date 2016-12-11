/* global document $ */
export default function () {
  $('select').material_select();

  const validatePassword = () => {
    const pass2 = $('#register-confirm-password').value;
    const pass1 = $('#register-password').value;
    if (pass1 !== pass2) {
      document.getElementById('register-confirm-password').setCustomValidity("Passwords don't match");
    } else {
      document.getElementById('register-confirm-password').setCustomValidity('');
    }
  };

  $('#register-password').change = validatePassword;
  $('#register-confirm-password').change = validatePassword;

  return undefined;
}
