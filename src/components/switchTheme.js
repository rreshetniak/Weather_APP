export function switchTheme () {
  const themeSwitch = document.getElementById('themeSwitch');

  themeSwitch.addEventListener('change', toggleTheme);

  function toggleTheme () {
    const currentTheme = document.documentElement.getAttribute("data-theme");
  }

  function setTheme (theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }  
}