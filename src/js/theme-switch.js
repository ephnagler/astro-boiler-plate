// Theme switching function
  const handleToggleTheme = () => {
    const element = document.documentElement;
    const currentTheme = element.getAttribute('data-theme');
    const button = document.querySelector('[data-toggle-theme]');
    const themes = button.dataset.toggleTheme.split(',');
    
    // Find next theme in sequence
    const currentIndex = themes.indexOf(currentTheme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    
    // Update theme
    element.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
  };
  
  // Initialize theme toggle
  const initThemeToggle = () => {
    const themeToggle = document.querySelector('[data-toggle-theme]');
    if (themeToggle) {      
      themeToggle.addEventListener('click', handleToggleTheme);
    }
  };
  
  export { initThemeToggle }; 
