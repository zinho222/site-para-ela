
function checkPassword() {
  const input = document.getElementById('password').value;
  const correctPassword = '1402';

  if (input === correctPassword) {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('content').style.display = 'block';
  } else {
    document.getElementById('error').style.display = 'block';
  }
}
