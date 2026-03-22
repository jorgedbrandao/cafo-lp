/* ─────────────────────────────────────
   SCROLL REVEAL
───────────────────────────────────── */
(function () {
  var reveals = document.querySelectorAll('.reveal');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(function (el) { observer.observe(el); });

  // Hero stats enter immediately
  setTimeout(function () {
    document.querySelectorAll('.hero .reveal').forEach(function (el) {
      el.classList.add('in');
    });
  }, 200);
})();

/* ─────────────────────────────────────
   MOBILE NAV
───────────────────────────────────── */
(function () {
  var hamburger = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobile-menu');
  var mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

  if (!hamburger || !mobileMenu) return;

  function openMenu() {
    hamburger.classList.add('open');
    mobileMenu.style.display = 'flex';
    // Force reflow so transition plays
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        mobileMenu.classList.add('open');
      });
    });
    document.body.style.overflow = 'hidden';
    hamburger.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
    hamburger.setAttribute('aria-expanded', 'false');
    // Wait for transition before hiding
    mobileMenu.addEventListener('transitionend', function handler() {
      mobileMenu.style.display = '';
      mobileMenu.removeEventListener('transitionend', handler);
    });
  }

  hamburger.addEventListener('click', function () {
    var isOpen = hamburger.classList.contains('open');
    if (isOpen) { closeMenu(); } else { openMenu(); }
  });

  // Close when a link is clicked
  mobileLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && hamburger.classList.contains('open')) {
      closeMenu();
    }
  });
})();

/* ─────────────────────────────────────
   NAV SCROLL SHADOW
───────────────────────────────────── */
(function () {
  var nav = document.querySelector('nav');
  if (!nav) return;
  window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
      nav.style.boxShadow = '0 1px 20px rgba(0,0,0,.06)';
    } else {
      nav.style.boxShadow = '';
    }
  }, { passive: true });
})();
