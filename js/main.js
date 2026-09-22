// ARCA — bozza, interazioni base
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', links.classList.contains('open'));
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  // Demo-validazione modulo contatti (bozza — non invia dati reali)
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const note = document.querySelector('#form-note');
      if (note) {
        note.textContent = 'Bozza dimostrativa: il modulo non invia ancora dati reali. Da collegare a WhatsApp Business API / Netlify Forms prima della pubblicazione.';
        note.style.display = 'block';
      }
    });
  }
});
