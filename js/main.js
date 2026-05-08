/* ─────────────────────────────────────────
   Keltan Voyce Portfolio — main.js
   ───────────────────────────────────────── */

/* Fade page in on load and back-forward cache restore */
function fadeIn() {
  document.body.style.transition = 'opacity 0.4s ease';
  document.body.style.opacity = '1';
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = '0';

  /* Apply saved theme before fade-in to avoid flash */
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light');
  }

  const toggle = document.getElementById('theme-switch');
  if (toggle) {
    toggle.checked = document.body.classList.contains('light');
    toggle.addEventListener('change', () => {
      document.body.classList.toggle('light', toggle.checked);
      localStorage.setItem('theme', toggle.checked ? 'light' : 'dark');
    });
  }

  requestAnimationFrame(fadeIn);
});

window.addEventListener('pageshow', (e) => {
  if (e.persisted) fadeIn();
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
