let mode_toggle = document.getElementById('mode');
let darkMode = 0;
function setDarkMode() {
  if (darkMode == 0) {
    document.body.classList.add('dark-mode');
    mode_toggle.textContent = 'Disable Dark Mode';
    darkMode = 1;
  } else {
    document.body.classList.remove('dark-mode');
    mode_toggle.textContent = 'Enable Wight Mode';
    darkMode = 0;
  }
}

mode_toggle.addEventListener('click', setDarkMode);
