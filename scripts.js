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

  /* ---------- GHL Lead Webhooks ----------
     Each program selection fires every URL in its array in parallel.
     A2 is shared between Adult and Women's, so submissions for either
     program land in the right GHL workflow. Order within an array is
     irrelevant — all fire at the same instant via fetch + keepalive. */
  var LEAD_WEBHOOKS = {
    'jiu-jitsu': [
      'https://services.leadconnectorhq.com/hooks/fTid0XDAD0QUPweprHQT/webhook-trigger/6da3906b-5170-47f6-98cb-0aee08376938',
      'https://services.leadconnectorhq.com/hooks/fTid0XDAD0QUPweprHQT/webhook-trigger/3c5fe007-1dee-4cef-b0fe-fbcf21637053'
    ],
    'womens': [
      'https://services.leadconnectorhq.com/hooks/fTid0XDAD0QUPweprHQT/webhook-trigger/3c5fe007-1dee-4cef-b0fe-fbcf21637053',
      'https://services.leadconnectorhq.com/hooks/fTid0XDAD0QUPweprHQT/webhook-trigger/7b6d75bd-7f86-4802-b689-a8d71406d43b'
    ],
    'kids': [
      'https://services.leadconnectorhq.com/hooks/fTid0XDAD0QUPweprHQT/webhook-trigger/208e9a8e-beb4-467b-b0ac-1706886b8cca',
      'https://services.leadconnectorhq.com/hooks/fTid0XDAD0QUPweprHQT/webhook-trigger/e12f049e-6c06-428a-aab0-70bf9b1fcca0'
    ]
  };

  /* ---------- 6. Lead modal ---------- */
  var modal = document.getElementById('leadModal');
  if (modal) {
    var openers = document.querySelectorAll('[data-cta="lead-modal"]');
    var closeBtn = modal.querySelector('.lead-modal__close');
    var backdrop = modal.querySelector('.lead-modal__backdrop');
    var form = modal.querySelector('.lead-form');

    var formOpenedAt = 0;
    var openModal = function (e) {
      if (e) e.preventDefault();
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
      formOpenedAt = Date.now();
      // focus first visible field (skip honeypot)
      setTimeout(function () {
        var first = modal.querySelector('input:not([name="website"]), select');
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

        // Bot protection: honeypot field + minimum-time check.
        // Real users see the lead modal, fill in 5+ fields, and tick consent — that takes
        // well over 2 seconds. Bots fill instantly and often auto-fill every visible input
        // including off-screen ones. Drop silently so the bot thinks it succeeded.
        if (data.website) return;
        if (formOpenedAt && Date.now() - formOpenedAt < 2000) return;
        delete data.website;

        try { sessionStorage.setItem('leadFormData', JSON.stringify(data)); } catch (err) {}

        var programId = data.program || 'jiu-jitsu';

        // Meta Pixel: fire Lead conversion (only after honeypot + min-time pass)
        try {
          if (typeof window.fbq === 'function') {
            window.fbq('track', 'Lead', {
              content_name: programId,
              content_category: 'Free Trial Class'
            });
          }
        } catch (err) { /* ignore */ }

        // Fire all GHL webhooks for this program in parallel. keepalive: true
        // ensures requests survive the redirect to booking.html below. We don't
        // await the responses — fire-and-forget so a slow GHL endpoint can't
        // stall the user's path to the booking calendar.
        var hooks = LEAD_WEBHOOKS[programId] || [];
        hooks.forEach(function (url) {
          try {
            fetch(url, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data),
              keepalive: true
            }).catch(function () { /* ignore — fire-and-forget */ });
          } catch (err) { /* ignore */ }
        });

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
