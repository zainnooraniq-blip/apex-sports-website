/**
 * APEX SPORTS — SHARED MOBILE NAV
 * One menu for every page: full-height panel, animated hamburger → X,
 * collapsible Services group, scroll lock, closes on link / Esc / resize.
 * Overrides the per-page toggleMenu() so the old inline-style menu is never used.
 */
(function () {
  'use strict';

  var css = [
    /* hamburger → X */
    '.nav-hamburger { position: relative; z-index: 1001; width: 44px; height: 44px; display: none; align-items: center; justify-content: center; gap: 0; }',
    '.nav-hamburger span { position: absolute; width: 22px; height: 2px; background: var(--white, #F5F5F5); transition: transform 0.3s ease, opacity 0.2s ease, top 0.3s ease; }',
    '.nav-hamburger span:nth-child(1) { transform: translateY(-7px); }',
    '.nav-hamburger span:nth-child(3) { transform: translateY(7px); }',
    'nav.nav-open .nav-hamburger span:nth-child(1) { transform: rotate(45deg); }',
    'nav.nav-open .nav-hamburger span:nth-child(2) { opacity: 0; }',
    'nav.nav-open .nav-hamburger span:nth-child(3) { transform: rotate(-45deg); }',

    '@media (max-width: 768px) {',
    '  .nav-hamburger { display: flex; margin-right: -10px; padding: 0; }',
    '  .nav-links { display: none; }',
    '  nav.nav-open .nav-links {',
    '    display: flex; flex-direction: column; align-items: stretch; gap: 0;',
    /* nav has backdrop-filter, so it is the containing block for fixed children:
       bottom:0 would resolve against the 72px bar, hence an explicit height */
    '    position: fixed; top: 72px; left: 0; right: 0; height: calc(100vh - 72px); height: calc(100dvh - 72px);',
    '    padding: 8px 20px calc(24px + env(safe-area-inset-bottom));',
    '    background: #060C22; border-top: 1px solid var(--border, rgba(59,130,246,0.15));',
    '    overflow-y: auto; -webkit-overflow-scrolling: touch; z-index: 999;',
    '    animation: navPanelIn 0.25s ease;',
    '  }',
    '  @keyframes navPanelIn { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: none; } }',
    '  nav.nav-open .nav-links > li { border-bottom: 1px solid rgba(255,255,255,0.06); }',
    '  nav.nav-open .nav-links > li > a {',
    '    display: flex; align-items: center; justify-content: space-between;',
    '    padding: 16px 4px; font-size: 16px; font-weight: 500; color: rgba(245,245,245,0.85);',
    '    white-space: normal; border-radius: 0;',
    '  }',
    '  nav.nav-open .nav-links .has-dropdown > a::after {',
    '    content: ""; width: 8px; height: 8px; margin-left: 12px; flex: none;',
    '    border-right: 1.5px solid rgba(245,245,245,0.5); border-bottom: 1.5px solid rgba(245,245,245,0.5);',
    '    transform: rotate(45deg) translateY(-2px); transition: transform 0.25s ease; opacity: 1; font-size: 0;',
    '  }',
    '  nav.nav-open .nav-links .has-dropdown.open > a::after { transform: rotate(-135deg) translateY(-2px); }',
    '  nav.nav-open .dropdown { display: none; position: static; list-style: none; border: none; box-shadow: none; background: transparent; min-width: 0; padding: 0 0 8px; }',
    '  nav.nav-open .has-dropdown.open .dropdown { display: block; }',
    '  nav.nav-open .dropdown li { border: none; }',
    '  nav.nav-open .dropdown a { display: block; padding: 11px 4px 11px 16px; font-size: 14px; color: rgba(245,245,245,0.6); border-left: 1px solid rgba(59,130,246,0.3); margin-left: 4px; }',
    '  nav.nav-open .dropdown a:hover { background: transparent; color: var(--accent, #3B82F6); }',
    /* the Contact CTA becomes a full-width button at the bottom of the panel */
    '  nav.nav-open .nav-links > li:has(> .nav-cta) { border: none; margin-top: 16px; }',
    '  nav.nav-open .nav-links > li > a.nav-cta { justify-content: center; padding: 15px 20px !important; font-size: 15px !important; border-radius: 3px !important; }',
    '  body.nav-locked { overflow: hidden; }',
    '}',
    /* hover dropdowns are for pointers only — never let :hover open them on touch */
    '@media (hover: none) { .has-dropdown:hover .dropdown { display: none; } .has-dropdown.open .dropdown { display: block; } }'
  ].join('\n');

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  function nav()   { return document.querySelector('nav'); }
  function isOpen(){ var n = nav(); return !!(n && n.classList.contains('nav-open')); }

  function setOpen(open) {
    var n = nav(); if (!n) return;
    var links = n.querySelector('.nav-links');
    var burger = n.querySelector('.nav-hamburger');
    n.classList.toggle('nav-open', open);
    document.body.classList.toggle('nav-locked', open);
    if (links) links.style.cssText = '';           // clear anything the old code left behind
    if (burger) burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (!open) n.querySelectorAll('.has-dropdown.open').forEach(function (li) { li.classList.remove('open'); });
  }

  // Replaces the toggleMenu() every page defines inline (onclick="toggleMenu()").
  window.toggleMenu = function () { setOpen(!isOpen()); };

  function init() {
    var n = nav(); if (!n) return;
    var burger = n.querySelector('.nav-hamburger');
    if (burger) {
      burger.setAttribute('role', 'button');
      burger.setAttribute('aria-label', 'Menu');
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('tabindex', '0');
      burger.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); window.toggleMenu(); } });
    }

    // Services group: swap each trigger for a clean clone so the page's own
    // click+touchend handlers are dropped, then bind a single handler.
    n.querySelectorAll('.has-dropdown > a').forEach(function (a) {
      var clone = a.cloneNode(true);
      a.parentNode.replaceChild(clone, a);
      clone.addEventListener('click', function (e) {
        if (window.innerWidth <= 768 || window.matchMedia('(hover: none)').matches) {
          e.preventDefault();
          this.parentElement.classList.toggle('open');
        }
      });
    });

    // Close after choosing a destination
    n.querySelectorAll('.nav-links a').forEach(function (a) {
      if (a.parentElement.classList.contains('has-dropdown')) return;
      a.addEventListener('click', function () { if (isOpen()) setOpen(false); });
    });

    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && isOpen()) setOpen(false); });
    window.addEventListener('resize', function () { if (window.innerWidth > 768 && isOpen()) setOpen(false); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
