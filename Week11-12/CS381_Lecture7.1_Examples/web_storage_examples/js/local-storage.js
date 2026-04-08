

const txtUsername = document.getElementById('username'); // Get form elements
const txtAnswer = document.getElementById('answer');

  txtUsername.value = localStorage.getItem('username');  // Elements populated
  txtAnswer.value = localStorage.getItem('answer');      // by localStorage data

  txtUsername.addEventListener('input', function () {    // Data saved on keyup
    localStorage.setItem('username', txtUsername.value);
  }, false);

  txtAnswer.addEventListener('input', function () {      // Data saved on keyup
    localStorage.setItem('answer', txtAnswer.value);
  }, false);

  //
