/* 10th Planet Jiu-Jitsu Newton — shared site scripts
   Nav, lead modal, booking page, scroll reveals, copyright. */

(function () {
  'use strict';

  /* ---------- 1. Lucide icons ---------- */
  try { if (window.lucide) lucide.createIcons(); } catch (e) {}

  /* ---------- 2. Copyright year ---------- */
  var yearEls = document.querySelectorAll('[data-year]');
  var y = new Date().getFullYear();
  yearEls.forEach(function (el) { el.textContent = y; });

  /* ---------- 3. Navbar scroll + mobile toggle ---------- */
  var nav = document.querySelector('.nav');
  if (nav) {
    var setScrolled = function () {
      if (window.scrollY > 16) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    setScrolled();
    window.addEventListener('scroll', setScrolled, { passive: true });

    var toggle = nav.querySelector('.nav-toggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        var isOpen = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        document.body.style.overflow = isOpen ? 'hidden' : '';
      });
    }
    // Close on mobile link click
    nav.querySelectorAll('.nav-mobile a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---------- 4. Scroll reveal (IntersectionObserver) ---------- */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('[data-reveal]').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('[data-reveal]').forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- 5. GSAP (optional — staggered reveals) ---------- */
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('.program-card').forEach(function (card, i) {
      gsap.from(card, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: (i % 4) * 0.08,
        ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
        scrollTrigger: { trigger: card, start: 'top 85%' }
      });
    });
  }

  /* ---------- 6. Lead modal ---------- */
  var modal = document.getElementById('leadModal');
  if (modal) {
    var openers = document.querySelectorAll('[data-cta="lead-modal"]');
    var closeBtn = modal.querySelector('.lead-modal__close');
    var backdrop = modal.querySelector('.lead-modal__backdrop');
    var form = modal.querySelector('.lead-form');

    var openModal = function (e) {
      if (e) e.preventDefault();
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
      // focus first field
      setTimeout(function () {
        var first = modal.querySelector('input, select');
        if (first) first.focus();
      }, 250);
    };
    var closeModal = function () {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    };

    openers.forEach(function (btn) { btn.addEventListener('click', openModal); });
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
    });

    // Phone mask: (###) ###-####
    var phoneInput = form && form.querySelector('input[name="phone"]');
    if (phoneInput) {
      phoneInput.addEventListener('input', function (e) {
        var v = e.target.value.replace(/\D/g, '').slice(0, 10);
        if (v.length > 6)      e.target.value = '(' + v.slice(0, 3) + ') ' + v.slice(3, 6) + '-' + v.slice(6);
        else if (v.length > 3) e.target.value = '(' + v.slice(0, 3) + ') ' + v.slice(3);
        else if (v.length > 0) e.target.value = '(' + v;
        else                   e.target.value = '';
      });
    }

    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var data = {};
        var fields = form.querySelectorAll('input, select');
        var valid = true;
        fields.forEach(function (f) {
          var field = f.closest('.lead-form__field');
          if (field) field.classList.remove('lead-form__field--invalid');
          if (f.required && !f.value.trim()) {
            if (field) field.classList.add('lead-form__field--invalid');
            valid = false;
          }
          if (f.type === 'email' && f.value && !/^\S+@\S+\.\S+$/.test(f.value)) {
            if (field) field.classList.add('lead-form__field--invalid');
            valid = false;
          }
          data[f.name] = f.value.trim();
        });
        if (!valid) return;

        try { sessionStorage.setItem('leadFormData', JSON.stringify(data)); } catch (err) {}

        // TODO: wire to GHL form or webhook here if backend capture is desired.
        var programId = data.program || 'jiu-jitsu';
        window.location.href = 'booking.html?program=' + encodeURIComponent(programId);
      });
    }
  }

  /* ---------- 7. Booking page logic ---------- */
  var bookingRoot = document.querySelector('[data-booking-root]');
  if (bookingRoot) {
    var params = new URLSearchParams(window.location.search);
    var requested = params.get('program') || 'jiu-jitsu';

    var calendars = bookingRoot.querySelectorAll('.booking-calendar');
    var chips = bookingRoot.querySelectorAll('.program-chip');

    var showProgram = function (programId) {
      var found = false;
      calendars.forEach(function (c) {
        var match = c.getAttribute('data-program') === programId;
        c.classList.toggle('active', match);
        if (match) found = true;
      });
      if (!found && calendars.length) {
        calendars[0].classList.add('active');
        programId = calendars[0].getAttribute('data-program');
      }
      chips.forEach(function (chip) {
        chip.classList.toggle('active', chip.getAttribute('data-program') === programId);
      });
    };
    showProgram(requested);

    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        var p = chip.getAttribute('data-program');
        showProgram(p);
        var url = new URL(window.location.href);
        url.searchParams.set('program', p);
        window.history.replaceState({}, '', url);
      });
    });

    // Pre-fill greeting from stored lead data
    try {
      var lead = JSON.parse(sessionStorage.getItem('leadFormData') || '{}');
      var greetEl = bookingRoot.querySelector('[data-lead-greet]');
      if (greetEl && lead.firstName) {
        greetEl.textContent = lead.firstName;
        greetEl.style.display = '';
      }
    } catch (err) {}
  }

  /* ---------- 8. FAQ toggle enhancement ---------- */
  // Using native <details>/<summary> — no JS needed for toggle itself.
  // Ensure only one open at a time (accordion behavior):
  document.querySelectorAll('.faq-list').forEach(function (list) {
    list.addEventListener('click', function (e) {
      var summary = e.target.closest('summary');
      if (!summary) return;
      var item = summary.parentElement;
      setTimeout(function () {
        if (item.open) {
          list.querySelectorAll('details[open]').forEach(function (other) {
            if (other !== item) other.open = false;
          });
        }
      }, 0);
    });
  });
})();
