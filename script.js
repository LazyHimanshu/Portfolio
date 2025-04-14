// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Typed.js effect for typing animation
const typed = new Typed('.auto-type', {
  strings: ["Programmer", "Web Developer", "Content Creator", "Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
});
