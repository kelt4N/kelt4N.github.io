/* ─────────────────────────────────────────
   Keltan Voyce Portfolio — main.js
   ───────────────────────────────────────── */

/* Fade page in on load */
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.4s ease';
  requestAnimationFrame(() => {
    document.body.style.opacity = '1';
  });
});

/* Smooth page transitions on internal links */
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href]');
  if (!link) return;

  const href = link.getAttribute('href');

  /* Skip external links, anchors, mailto, blank targets */
  if (
    !href ||
    href.startsWith('http') ||
    href.startsWith('#') ||
    href.startsWith('mailto') ||
    link.target === '_blank'
  ) return;

  e.preventDefault();
  document.body.style.opacity = '0';
  setTimeout(() => {
    window.location.href = href;
  }, 350);
});
