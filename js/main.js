// =====================
// TRANSLATIONS
// =====================
const translations = {
  es: {
    'nav.events':   'Eventos',
    'nav.about':    'Nosotros',
    'nav.cta':      'Reserva tu lugar',
    'hero.title':   'El momento<br/>en que todo<br/><em>comienza.</em>',
    'hero.sub':     'Experiencias diseñadas para conectar, disfrutar y recordar. Eventos sociales, corporativos y culturales en un espacio que lo tiene todo.',
    'hero.cta':     'Ver próximos eventos',
    'about.label':  '¿Qué es Moment0?',
    'about.title':  'Ese instante justo antes<br/>de que todo pase.',
    'about.p1':     'Moment0 nació de la idea de que los mejores recuerdos empiezan en un punto específico: el momento en que decides estar presente. Creamos eventos únicos en un hotel boutique en la Colonia Roma donde la experiencia lo es todo — desde la primera copa hasta el último beat.',
    'about.p2':     'Sociales, corporativos, exposiciones, degustaciones. Si hay personas, hay historia. Y aquí creamos la tuya.',
    'about.stat1':  'Tipos de evento',
    'about.stat2':  'Ubicación',
    'about.stat3':  'Conexiones',
    'events.label': 'Próximas experiencias',
    'events.title': 'Elige tu Moment0',
    'badge.social':   'Social',
    'badge.cultural': 'Cultural',
    'badge.party':    'Fiesta',
    'card.cta':     'Quiero asistir',
    'dating.title': 'Speed Dating',
    'dating.desc':  'Cuatro minutos. Una persona. La posibilidad de que todo cambie. Conoce a todos los asistentes en una noche de conversaciones rápidas, snacks y bebida incluida. Si hay chispa, se comparte número de WhatsApp.',
    'dating.d1':    '⏱ 4 min por pareja',
    'dating.d2':    '🍹 Bebida y snacks incluidos',
    'dating.d3':    '📲 Match = intercambio de WhatsApp',
    'games.title':  'Noche de Juegos de Mesa',
    'games.desc':   'Olvídate de la pantalla. Una noche rodeada de juegos clásicos y modernos, buena comida, snacks y la mejor compañía. Cover de entrada, todo lo demás es diversión.',
    'games.d1':     '🃏 Selección de juegos de mesa',
    'games.d2':     '🍕 Ronda de snacks y comida',
    'games.d3':     '🎟 Cover de entrada',
    'wine.title':   'Cata de Vinos',
    'wine.desc':    'Una experiencia sensorial para los que quieren saber más sobre el mundo del vino. Degustación guiada, maridaje, información vinícola y todo lo que quieras comer. El vino ya está incluido.',
    'wine.d1':      '🍇 Vinos seleccionados incluidos',
    'wine.d2':      '📖 Guía de cata y maridaje',
    'wine.d3':      '🧀 Comida a la carta',
    'coffee.title': 'Coffee Party',
    'coffee.desc':  '¿Por qué esperar a la noche para festejar? A partir de las 10am, DJ en vivo, café de especialidad, pan artesanal y si quieres algo con más vuelo: mimosas, cervezas y cócteles ligeros. Cinco horas de pura energía matutina.',
    'coffee.d1':    '☀️ 10am — 3pm',
    'coffee.d2':    '🎵 DJ en vivo · 5 horas',
    'coffee.d3':    '🥂 Café + opción de alcohol ligero',
    'tipos.label':  '¿Tienes algo en mente?',
    'tipos.title':  'También organizamos',
    'tipos.t1':     '🥂 Eventos Sociales',
    'tipos.t2':     '💼 Corporativos',
    'tipos.t3':     '🖼 Exposiciones',
    'tipos.t4':     '🎤 Presentaciones',
    'tipos.t5':     '🎂 Celebraciones',
    'tipos.t6':     '🤝 Networking',
    'cta.title':    '¿Listo para tu<br/><em>Moment0?</em>',
    'cta.sub':      'Escríbenos para reservar tu lugar en el próximo evento o para cotizar tu evento privado.',
    'cta.wa':       '💬 Escríbenos por WhatsApp',
    'cta.ig':       '📸 Síguenos en Instagram',
    'footer.contact': 'Contacto',
    'footer.follow':  'Síguenos',
  },
  en: {
    'nav.events':   'Events',
    'nav.about':    'About',
    'nav.cta':      'Reserve your spot',
    'hero.title':   'The moment<br/>when everything<br/><em>begins.</em>',
    'hero.sub':     'Experiences designed to connect, enjoy and remember. Social, corporate and cultural events in a space that has it all.',
    'hero.cta':     'See upcoming events',
    'about.label':  'What is Moment0?',
    'about.title':  'That instant just before<br/>everything happens.',
    'about.p1':     'Moment0 was born from the idea that the best memories begin at a specific point: the moment you decide to be present. We create unique events at a boutique hotel in Colonia Roma where the experience is everything — from the first drink to the last beat.',
    'about.p2':     'Social, corporate, exhibitions, tastings. Where there are people, there are stories. And here we create yours.',
    'about.stat1':  'Event types',
    'about.stat2':  'Location',
    'about.stat3':  'Connections',
    'events.label': 'Upcoming experiences',
    'events.title': 'Choose your Moment0',
    'badge.social':   'Social',
    'badge.cultural': 'Cultural',
    'badge.party':    'Party',
    'card.cta':     'I want to attend',
    'dating.title': 'Speed Dating',
    'dating.desc':  'Four minutes. One person. The possibility that everything changes. Meet all the attendees in a night of quick conversations, snacks and drinks included. If there\'s a spark, WhatsApp numbers are exchanged.',
    'dating.d1':    '⏱ 4 min per partner',
    'dating.d2':    '🍹 Drinks & snacks included',
    'dating.d3':    '📲 Match = WhatsApp exchange',
    'games.title':  'Board Game Night',
    'games.desc':   'Forget the screen. A night surrounded by classic and modern board games, great food, snacks and the best company. Cover charge at the door, everything else is just fun.',
    'games.d1':     '🃏 Board game selection',
    'games.d2':     '🍕 Snacks & food round',
    'games.d3':     '🎟 Cover charge',
    'wine.title':   'Wine Tasting',
    'wine.desc':    'A sensory experience for those who want to know more about the world of wine. Guided tasting, pairings, wine knowledge and whatever you want to eat. Wine is already included.',
    'wine.d1':      '🍇 Selected wines included',
    'wine.d2':      '📖 Tasting & pairing guide',
    'wine.d3':      '🧀 À la carte food',
    'coffee.title': 'Coffee Party',
    'coffee.desc':  'Why wait until night to celebrate? Starting at 10am, live DJ, specialty coffee, artisan bread and if you want something stronger: mimosas, beers and light cocktails. Five hours of pure morning energy.',
    'coffee.d1':    '☀️ 10am — 3pm',
    'coffee.d2':    '🎵 Live DJ · 5 hours',
    'coffee.d3':    '🥂 Coffee + light alcohol option',
    'tipos.label':  'Have something in mind?',
    'tipos.title':  'We also organize',
    'tipos.t1':     '🥂 Social Events',
    'tipos.t2':     '💼 Corporate',
    'tipos.t3':     '🖼 Exhibitions',
    'tipos.t4':     '🎤 Presentations',
    'tipos.t5':     '🎂 Celebrations',
    'tipos.t6':     '🤝 Networking',
    'cta.title':    'Ready for your<br/><em>Moment0?</em>',
    'cta.sub':      'Write to us to reserve your spot at the next event or to get a quote for your private event.',
    'cta.wa':       '💬 Message us on WhatsApp',
    'cta.ig':       '📸 Follow us on Instagram',
    'footer.contact': 'Contact',
    'footer.follow':  'Follow us',
  }
};

// =====================
// LANGUAGE SWITCHER
// =====================
let currentLang = localStorage.getItem('moment0-lang') || 'es';

function applyLanguage(lang) {
  const t = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.documentElement.lang = lang;
  localStorage.setItem('moment0-lang', lang);
  currentLang = lang;
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

applyLanguage(currentLang);

// =====================
// NAV SCROLL EFFECT
// =====================
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// =====================
// MOBILE HAMBURGER
// =====================
const hamburger = document.querySelector('.nav__hamburger');
const navLinks  = document.querySelector('.nav__links');
hamburger?.addEventListener('click', () => {
  const open = navLinks.style.display === 'flex';
  navLinks.style.display = open ? 'none' : 'flex';
  if (!open) {
    Object.assign(navLinks.style, {
      flexDirection: 'column',
      position:      'absolute',
      top:           '70px',
      right:         '24px',
      background:    '#111',
      padding:       '20px 28px',
      borderRadius:  '12px',
      border:        '1px solid rgba(201,168,76,0.2)',
      gap:           '20px',
    });
  }
});

// =====================
// SCROLL REVEAL
// =====================
const observer = new IntersectionObserver(
  entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
  { threshold: 0.12 }
);

document.querySelectorAll('.card, .stat, .tipo').forEach(el => {
  el.style.opacity   = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

document.head.insertAdjacentHTML('beforeend', `
  <style>
    .card.visible, .stat.visible, .tipo.visible {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  </style>
`);
