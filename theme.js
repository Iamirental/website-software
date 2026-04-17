// Theme Toggle - Light/Dark Mode
(function() {
  // Get saved theme or default to dark
  const savedTheme = localStorage.getItem('iami-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  // Toggle theme function
  window.toggleTheme = function() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('iami-theme', next);
  };

  // Mobile menu toggle
  window.toggleMobileMenu = function() {
    const menu = document.getElementById('mobileMenu');
    if (menu) menu.classList.toggle('open');
  };
})();
