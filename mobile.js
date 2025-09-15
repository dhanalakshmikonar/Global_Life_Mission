
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const dropdowns = document.querySelectorAll('.dropdown');
const navItems = navLinks.querySelectorAll('a');

// Toggle main menu
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Toggle dropdowns on mobile
dropdowns.forEach(dropdown => {
  const parentLink = dropdown.querySelector('a'); // the "Program" link
  parentLink.addEventListener('click', (e) => {
    if (window.innerWidth <= 992) {
      e.preventDefault(); // Prevent navigating away
      dropdown.classList.toggle('active'); // Toggle submenu
    }
  });
});

// Close menu when any submenu or main link is clicked
navItems.forEach(link => {
  link.addEventListener('click', () => {
    // Only close menu if it's a real link (not the parent "Program")
    const parentDropdown = link.closest('.dropdown');
    if (window.innerWidth <= 992 && !parentDropdown) {
      navLinks.classList.remove('active');
      dropdowns.forEach(dd => dd.classList.remove('active'));
    } else if (window.innerWidth <= 992 && parentDropdown && link.closest('.submenu')) {
      // If a submenu item is clicked, close the menu
      navLinks.classList.remove('active');
      dropdowns.forEach(dd => dd.classList.remove('active'));
    }
  });
});
