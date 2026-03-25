/**
 * APEX SPORTS — SHARED ANIMATIONS
 * Scroll reveal · 3D card tilt · Stat counters · Ticker · Micro interactions
 */

(function () {
  'use strict';

  /* ─────────────────────────────────────────────────────
     1. SCROLL REVEAL
     Every element with data-reveal gets a fade+slide-up
     when it enters the viewport.
  ───────────────────────────────────────────────────── */
  function initScrollReveal() {
    const style = document.createElement('style');
    style.textContent = `
      [data-reveal] {
        opacity: 0;
        transform: translateY(32px);
        transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1),
                    transform 0.7s cubic-bezier(0.16,1,0.3,1);
      }
      [data-reveal].revealed {
        opacity: 1;
        transform: translateY(0);
      }
      [data-reveal][data-delay="1"] { transition-delay: 0.08s; }
      [data-reveal][data-delay="2"] { transition-delay: 0.16s; }
      [data-reveal][data-delay="3"] { transition-delay: 0.24s; }
      [data-reveal][data-delay="4"] { transition-delay: 0.32s; }
      [data-reveal][data-delay="5"] { transition-delay: 0.40s; }
      [data-reveal][data-delay="6"] { transition-delay: 0.48s; }
    `;
    document.head.appendChild(style);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    // Auto-tag common elements
    const selectors = [
      '.service-card', '.expertise-card', '.insight-card', '.partner-logo',
      '.team-card', '.athlete-card', '.partner-card', '.event-item',
      '.cap-card', '.case-study-highlight', '.roster-cta', '.enquire-strip',
      'section > .section-eyebrow', 'section > .section-heading',
      'section > .section-body', '.page-hero', '.about-right',
      '.newsletter-heading', '.newsletter-body', '.newsletter-form',
      '.insights-header', '.partners-heading-row', '.cta-strip',
    ];

    selectors.forEach(sel => {
      document.querySelectorAll(sel).forEach((el, i) => {
        if (!el.hasAttribute('data-reveal')) {
          el.setAttribute('data-reveal', '');
          // Stagger siblings in grids
          const parent = el.parentElement;
          if (parent) {
            const siblings = parent.querySelectorAll(sel.split(' > ').pop() || sel);
            const idx = Array.from(siblings).indexOf(el);
            if (idx >= 0 && idx < 6) el.setAttribute('data-delay', idx + 1);
          }
        }
        observer.observe(el);
      });
    });

    // Also observe anything manually tagged
    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
  }

  /* ─────────────────────────────────────────────────────
     2. 3D CARD TILT + GLOW
     Cards tilt toward the cursor and show a gold/blue glow.
  ───────────────────────────────────────────────────── */
  function initCardTilt() {
    const tiltStyle = document.createElement('style');
    tiltStyle.textContent = `
      .tilt-card {
        transform-style: preserve-3d;
        transition: transform 0.1s ease, box-shadow 0.3s ease;
        will-change: transform;
      }
      .tilt-card:hover {
        box-shadow: 0 0 0 1px rgba(59,130,246,0.4),
                    0 20px 60px rgba(59,130,246,0.15),
                    0 0 80px rgba(212,175,55,0.06);
      }
      .tilt-card .tilt-shine {
        position: absolute;
        inset: 0;
        border-radius: inherit;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.3s ease;
        background: radial-gradient(circle at var(--mx,50%) var(--my,50%),
          rgba(212,175,55,0.12) 0%,
          rgba(59,130,246,0.06) 40%,
          transparent 70%);
      }
      .tilt-card:hover .tilt-shine { opacity: 1; }
    `;
    document.head.appendChild(tiltStyle);

    const cards = document.querySelectorAll(
      '.service-card, .insight-card, .team-card, .expertise-card, .cap-card, .partner-card'
    );

    cards.forEach(card => {
      card.classList.add('tilt-card');
      card.style.position = 'relative';

      // Inject shine layer
      const shine = document.createElement('div');
      shine.className = 'tilt-shine';
      card.appendChild(shine);

      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const rotX = ((y - cy) / cy) * -6;
        const rotY = ((x - cx) / cx) * 6;

        card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(4px)`;

        const pctX = ((x / rect.width) * 100).toFixed(1);
        const pctY = ((y / rect.height) * 100).toFixed(1);
        shine.style.setProperty('--mx', pctX + '%');
        shine.style.setProperty('--my', pctY + '%');
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateZ(0)';
      });
    });
  }

  /* ─────────────────────────────────────────────────────
     3. STAT COUNTERS
     Elements with data-count="NUMBER" count up on reveal.
  ───────────────────────────────────────────────────── */
  function initCounters() {
    function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

    function animateCounter(el) {
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const prefix = el.dataset.prefix || '';
      const duration = 2000;
      const start = performance.now();
      const isDecimal = target % 1 !== 0;

      function tick(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const current = easeOut(progress) * target;
        el.textContent = prefix + (isDecimal ? current.toFixed(1) : Math.floor(current)) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = prefix + target + suffix;
      }
      requestAnimationFrame(tick);
    }

    const counterObserver = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !e.target.dataset.counted) {
          e.target.dataset.counted = '1';
          animateCounter(e.target);
          counterObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));
  }

  /* ─────────────────────────────────────────────────────
     4. SMOOTH TICKER
     Speeds up on reduced-motion or pauses on hover.
  ───────────────────────────────────────────────────── */
  function initTicker() {
    const track = document.getElementById('ticker-track');
    if (!track) return;

    // Already animated via CSS — just ensure smooth restart
    track.style.animationDuration = '32s';

    // Pause on hover (already set in CSS, belt + braces)
    track.addEventListener('mouseenter', () => track.style.animationPlayState = 'paused');
    track.addEventListener('mouseleave', () => track.style.animationPlayState = 'running');

    // Stagger logo fade-ins on partners pages
    document.querySelectorAll('.partner-logo').forEach((el, i) => {
      el.style.animationDelay = `${i * 0.06}s`;
    });
  }

  /* ─────────────────────────────────────────────────────
     5. NAV ACTIVE STATE
     Highlight the current page in the nav.
  ───────────────────────────────────────────────────── */
  function initNavActive() {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(a => {
      const href = a.getAttribute('href');
      if (href === page || (page === '' && href === 'index.html')) {
        a.style.color = '#F5F5F5';
        a.style.fontWeight = '600';
      }
    });
  }

  /* ─────────────────────────────────────────────────────
     6. MAGNETIC BUTTONS
     CTA buttons subtly follow the cursor.
  ───────────────────────────────────────────────────── */
  function initMagneticButtons() {
    document.querySelectorAll('.btn-primary, .btn-outline, .nav-cta').forEach(btn => {
      btn.addEventListener('mousemove', e => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
        btn.style.transition = 'transform 0.4s cubic-bezier(0.16,1,0.3,1)';
      });
    });
  }

  /* ─────────────────────────────────────────────────────
     INIT — run after DOM is ready
  ───────────────────────────────────────────────────── */
  function init() {
    // Respect reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReduced) {
      initScrollReveal();
      initCardTilt();
      initMagneticButtons();
    }
    initCounters();
    initTicker();
    initNavActive();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
