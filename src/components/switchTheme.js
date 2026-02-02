export function switchTheme () {
  const themeSwitch = document.getElementById('themeSwitch');
  let userHasChoosenTheme = false;
  themeSwitch.addEventListener('change', toggleTheme);

  function toggleTheme () {
    const currentTheme = document.documentElement.getAttribute("data-theme");

    let newTheme;
    if(currentTheme === 'dark') {
      newTheme = 'light';
    } else {
      newTheme = 'dark';
    }

    userHasChoosenTheme = true;
    setTheme (newTheme);
  }

  function setTheme (theme) {
    document.documentElement.setAttribute("data-theme", theme);
    if (userHasChoosenTheme) {
      localStorage.setItem('theme', theme); // save the theme to local storage
    }
  }
  const savedTheme = localStorage.getItem('theme'); // set the saved theme from the local storage
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    // the function of getting theme depends of day time
    const themeByTime = getThemeByTime();
    setTheme(themeByTime);
  } 
    
  function getThemeByTime () {
    const now = new Date();
    const hours = now.getHours();
    return hours >= 7 && hours < 22 ? 'light' : 'dark';
  }
}