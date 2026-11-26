// Theme toggle (remembers your choice)
var root = document.documentElement;
try {
  var saved = localStorage.getItem('theme');
  if (saved) root.setAttribute('data-theme', saved);
} catch (e) {}

document.getElementById('theme').onclick = function () {
  var current = root.getAttribute('data-theme');
  var dark = current ? current === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  var next = dark ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  try { localStorage.setItem('theme', next); } catch (e) {}
};

// Mobile menu
var links = document.getElementById('links');
document.getElementById('menu').onclick = function () {
  links.classList.toggle('open');
};
links.onclick = function () {
  links.classList.remove('open');
};

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Fade-in on scroll
var io = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting) {
      e.target.classList.add('show');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(function (el) {
  io.observe(el);
});
