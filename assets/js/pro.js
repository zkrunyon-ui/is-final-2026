/* pro.js — shared JS for zkrunyon-ui.github.io professional pages */

(function () {
  'use strict';

  // ---- Footer year stamp ----
  document.querySelectorAll('.js-year').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // ---- Active nav link ----
  // Mark the current page's nav link as active
  var currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-nav .nav-link').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ---- Smooth scroll for anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var offset = 70; // navbar height
        var top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // ---- Navbar collapse on mobile link click ----
  document.querySelectorAll('.navbar-nav .nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      var toggler = document.querySelector('.navbar-toggler');
      var collapse = document.querySelector('.navbar-collapse');
      if (collapse && collapse.classList.contains('show') && toggler) {
        toggler.click();
      }
    });
  });
})();
