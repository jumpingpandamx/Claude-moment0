// =====================
// TRANSLATIONS
// =====================
const translations = {
  es: {
    'nav.events':   'Eventos',
    'nav.about':    'Nosotros',
    'nav.faq':      'FAQ',
    'nav.cta':      'Reserva tu lugar',
    'hero.title':   'El momento<br/>en que todo<br/><em>comienza.</em>',
    'hero.sub':     'Experiencias diseñadas para conectar, disfrutar y recordar. Eventos sociales, corporativos y culturales en un espacio que lo tiene todo.',
    'hero.cta':     'Ver próximos eventos',
    'about.label':  '¿Qué es Moment0?',
    'about.title':  'Ese instante justo antes<br/>de que todo pase.',
    'about.p1':     'Moment0 nació de la idea de que los mejores recuerdos empiezan en un punto específico: el momento en que decides estar presente. Creamos eventos únicos en un bar y restaurante boutique en la Colonia Roma donde la experiencia lo es todo — desde la primera copa hasta el último beat.',
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
    'dating.d1':    '⏱ 3 min por pareja',
    'dating.d2':    '🍹 Bebida y snacks incluidos',
    'dating.d3':    '📲 Match = intercambio de WhatsApp',
    'dating.d4':    '💳 $1,000 MXN · incluye canapé y copa de bienvenida',
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
    'tm.eyebrow':     'Próximo evento',
    'tm.subtitle':    'Una noche de speed dating, vino y conexiones reales · Roma Norte, CDMX',
    'tm.date':        'Miércoles 10 de junio 2026',
    'tm.capacity':    'Cupo limitado · Solo 20 personas',
    'tm.location':    'El lugar exacto se confirma 48 horas antes del evento',
    'tm.price':       '$1,000 MXN por persona · Incluye canapé de bienvenida y una copa',
    'tm.desc':        'Llega solo. Sal con una historia. Tendrás tres minutos con cada persona — una copa en la mano, música de fondo, sin presión. Al final de la noche, tú decides.',
    'tm.screening.title': 'Proceso de admisión',
    'tm.screening.body':  'Moment0 cura cada evento para garantizar la mejor experiencia para todos los asistentes. Al reservar tu lugar, recibirás un mensaje de WhatsApp con instrucciones rápidas. Tu lugar se confirma en menos de 24 horas una vez que revisemos tu perfil.',
    'tm.screening.p1':    '✓ Perfiles verificados',
    'tm.screening.p2':    '✓ Cupo balanceado',
    'tm.screening.p3':    '✓ Confirmación en 24hrs',
    'tm.women.title': 'Para ellas',
    'tm.women.l1':    'Evento 100% curado y seguro',
    'tm.women.l2':    'Cupo máximo de 10 mujeres',
    'tm.women.l3':    'Staff de Moment0 presente en todo momento',
    'tm.women.l4':    'Tolerancia cero a comportamiento irrespetuoso — cualquier asistente puede ser retirado inmediatamente',
    'tm.women.l5':    'El intercambio de información personal es siempre tu decisión',
    'tm.women.l6':    'Nadie entra sin reserva previa — todos los asistentes son verificados',
    'tm.women.l7':    'Si en algún momento no te sientes cómoda, acércate al staff de inmediato',
    'tm.men.title':   'Para ellos',
    'tm.men.l1':      'Cupo máximo de 10 hombres',
    'tm.men.l2':      'Evento balanceado — igual número de hombres y mujeres',
    'tm.men.l3':      'Dinámica clara y sin presión',
    'tm.men.l4':      'Respeto absoluto en todo momento — un "no" es un "no"',
    'tm.men.l5':      'Sin teléfonos durante las rondas — atención total a la conversación',
    'tm.men.l6':      'Dress code: smart casual',
    'tm.men.l7':      'Llega puntual — las rondas inician a la hora indicada',
    'tm.safety.title':'Lineamientos de convivencia',
    'tm.safety.l1':   'Respeto absoluto. Un "no" es un "no". Comportamiento irrespetuoso = salida inmediata sin reembolso.',
    'tm.safety.l2':   'El número de hombres y mujeres es exactamente igual. El intercambio de información personal es decisión de cada persona.',
    'tm.safety.l3':   'Staff de Moment0 presente en todo momento.',
    'tm.safety.l4':   'Tolerancia cero a acoso o comentarios no solicitados sobre apariencia física.',
    'tm.cta.women':   'Reservar · Mujer',
    'tm.cta.men':     'Reservar · Hombre',
    'tm.cta.note':    'Cupo limitado · 10 lugares por género · El lugar se confirma 48hrs antes',
    'tm.boletia.label': 'Procesado por',
    'tm.cd.days':    'Días',
    'tm.cd.hours':   'Horas',
    'tm.cd.mins':    'Minutos',
    'tm.cd.secs':    'Segundos',
    'tm.cd.today':   '¡El evento es hoy!',
    'other.date':    '📅 Fecha por confirmar',
    'faq.title': 'Preguntas Frecuentes',
    'faq.q1':  '¿Cómo es la dinámica del evento?',
    'faq.a1':  'Todo comienza 48 horas antes — si tu perfil fue aceptado, recibirás un mensaje de WhatsApp con la dirección exacta del lugar en la Colonia Roma. Ese es tu primer momento Moment0.<br><br><strong>7:45 PM — Registro:</strong> Llega puntual y presenta tu INE en la entrada. Solo entran los perfiles confirmados — sin excepciones.<br><br><strong>8:00 PM — Rompe el hielo:</strong> Una copa de vino y un canapé de bienvenida. El staff de Moment0 da la bienvenida oficial y explica la dinámica en menos de 5 minutos. Respira. Estás listo/a.<br><br><strong>8:15 PM — Las rondas:</strong> 10 rondas de 3 minutos cada una. Una señal indica el inicio y el fin de cada conversación. Sin teléfonos, sin distracciones — solo tú y la persona frente a ti.<br><br><strong>Dinámica final:</strong> Al terminar las rondas hay un momento especial de cierre diseñado para que la noche no termine de golpe.<br><br><strong>Intercambio de contactos:</strong> Si hubo conexión, el intercambio es completamente voluntario. Sin presión, sin obligación — solo si ambos quieren.<br><br><strong>Cierre:</strong> Los asistentes de Tres Minutos tienen acceso a una cena con precio especial en el mismo lugar. Porque la mejor parte de la noche a veces empieza después de las rondas.',
    'faq.q2':  '¿Hay código de vestimenta?',
    'faq.a2':  'Sí. El dress code es smart casual — queremos que te veas bien y te sientas bien. Recuerda que de la vista nace el amor, así que aprovecha la ocasión para dar tu mejor primera impresión.',
    'faq.q3':  '¿Es seguro conocer personas en un evento así?',
    'faq.a3':  'Totalmente. Todos los asistentes pasan por un proceso de admisión antes de confirmar su lugar. Nadie entra sin haber sido verificado previamente, y el staff de Moment0 estará presente durante todo el evento.',
    'faq.q4':  '¿Qué tipo de personas asisten?',
    'faq.a4':  'Personas que viven o visitan CDMX — nacionales e internacionales. El rango de edad suele ser entre 25 y 45 años. Lo que todos tienen en común es que están abiertos a conocer gente nueva en persona, sin filtros ni algoritmos.',
    'faq.q5':  '¿Van a ser el mismo número de hombres que mujeres?',
    'faq.a5':  'Sí, siempre. El evento está diseñado con paridad exacta — si hay 10 mujeres, hay 10 hombres. Ni uno más, ni uno menos. Si un género se llena antes, el otro cierra automáticamente.',
    'faq.q6':  '¿Qué pasa si me pongo nervioso/a?',
    'faq.a6':  'Es completamente normal — y para eso estamos. El evento es guiado de principio a fin por el staff de Moment0. Te explicamos la dinámica antes de comenzar, manejamos los tiempos de cada ronda y nos aseguramos de que nadie se quede sin conversación. Solo tienes que aparecer — nosotros nos encargamos del resto.',
    'faq.q7':  '¿Puedo ir si nunca he hecho speed dating?',
    'faq.a7':  'Claro — de hecho la mayoría de los asistentes es su primera vez. El formato es sencillo, el ambiente es relajado y el staff está ahí para que te sientas cómodo/a desde el momento en que llegas.',
    'faq.q8':  '¿Qué pasa si no conecto con nadie?',
    'faq.a8':  'Que igual lo pasaste bien, tomaste algo rico y conociste gente interesante. Moment0 no es solo para encontrar pareja — es para salir de la pantalla y recordar que conectar en persona se siente diferente. Y siempre hay una próxima edición.',
    'faq.q9':  '¿Cómo confirmo mi lugar?',
    'faq.a9':  'Reservas en línea a través de moment0.mx. Después recibirás un mensaje de WhatsApp con instrucciones rápidas. Tu lugar se confirma en menos de 24 horas una vez que revisemos tu perfil.',
    'faq.q10': '¿Puedo asistir si soy extranjero/a?',
    'faq.a10': 'Absolutamente. Los eventos son bilingües — español e inglés. Roma Norte es un barrio cosmopolita y nuestros eventos reflejan eso.',
  },
  en: {
    'nav.events':   'Events',
    'nav.about':    'About',
    'nav.faq':      'FAQ',
    'nav.cta':      'Reserve your spot',
    'hero.title':   'The moment<br/>when everything<br/><em>begins.</em>',
    'hero.sub':     'Experiences designed to connect, enjoy and remember. Social, corporate and cultural events in a space that has it all.',
    'hero.cta':     'See upcoming events',
    'about.label':  'What is Moment0?',
    'about.title':  'That instant just before<br/>everything happens.',
    'about.p1':     'Moment0 was born from the idea that the best memories begin at a specific point: the moment you decide to be present. We create unique events at a boutique bar and restaurant in Colonia Roma where the experience is everything — from the first drink to the last beat.',
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
    'dating.d1':    '⏱ 3 min per partner',
    'dating.d2':    '🍹 Drinks & snacks included',
    'dating.d3':    '📲 Match = WhatsApp exchange',
    'dating.d4':    '💳 $1,000 MXN · includes welcome canapé and one drink',
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
    'tm.eyebrow':     'Next event',
    'tm.subtitle':    'A night of speed dating, wine and real connections · Roma Norte, CDMX',
    'tm.date':        'Wednesday, June 10th 2026',
    'tm.capacity':    'Limited capacity · 20 people only',
    'tm.location':    'Exact venue confirmed 48 hours before the event',
    'tm.price':       '$1,000 MXN per person · Includes welcome canapé and one drink',
    'tm.desc':        'Arrive alone. Leave with a story. You\'ll have three minutes with each person — a drink in hand, music in the background, no pressure. At the end of the night, you decide.',
    'tm.screening.title': 'Admission Process',
    'tm.screening.body':  'Moment0 curates every event to guarantee the best experience for all attendees. When you reserve your spot, you\'ll receive a WhatsApp message with quick instructions. Your spot is confirmed within 24 hours once we review your profile.',
    'tm.screening.p1':    '✓ Verified profiles',
    'tm.screening.p2':    '✓ Balanced capacity',
    'tm.screening.p3':    '✓ Confirmed within 24hrs',
    'tm.women.title': 'For her',
    'tm.women.l1':    '100% curated and safe event',
    'tm.women.l2':    'Maximum of 10 women',
    'tm.women.l3':    'Moment0 staff present at all times',
    'tm.women.l4':    'Zero tolerance for disrespectful behavior — any attendee can be removed immediately',
    'tm.women.l5':    'Sharing personal information is always your decision',
    'tm.women.l6':    'No one enters without a prior reservation — all attendees are verified',
    'tm.women.l7':    'If at any point you feel uncomfortable, approach the staff immediately',
    'tm.men.title':   'For him',
    'tm.men.l1':      'Maximum of 10 men',
    'tm.men.l2':      'Balanced event — equal number of men and women',
    'tm.men.l3':      'Clear dynamics, no pressure',
    'tm.men.l4':      'Absolute respect at all times — a "no" means no',
    'tm.men.l5':      'No phones during rounds — full attention to the conversation',
    'tm.men.l6':      'Dress code: smart casual',
    'tm.men.l7':      'Arrive on time — rounds start at the indicated hour',
    'tm.safety.title':'Community Guidelines',
    'tm.safety.l1':   'Absolute respect. A "no" means no. Disrespectful behavior = immediate removal, no refund.',
    'tm.safety.l2':   'The number of men and women is exactly equal. Sharing personal information is each person\'s own decision.',
    'tm.safety.l3':   'Moment0 staff present at all times.',
    'tm.safety.l4':   'Zero tolerance for harassment or unsolicited comments about physical appearance.',
    'tm.cta.women':   'Reserve · Woman',
    'tm.cta.men':     'Reserve · Man',
    'tm.cta.note':    'Limited capacity · 10 spots per gender · Venue confirmed 48hrs before',
    'tm.boletia.label': 'Processed by',
    'tm.cd.days':    'Days',
    'tm.cd.hours':   'Hours',
    'tm.cd.mins':    'Minutes',
    'tm.cd.secs':    'Seconds',
    'tm.cd.today':   'The event is today!',
    'other.date':    '📅 Date to be confirmed',
    'faq.title': 'Frequently Asked Questions',
    'faq.q1':  'How does the event work?',
    'faq.a1':  'Everything starts 48 hours before — if your profile was accepted, you\'ll receive a WhatsApp message with the exact address in Colonia Roma. That\'s your first Moment0 moment.<br><br><strong>7:45 PM — Check-in:</strong> Arrive on time and present your ID at the door. Only confirmed profiles enter — no exceptions.<br><br><strong>8:00 PM — Icebreaker:</strong> A welcome glass of wine and a canapé. The Moment0 staff gives the official welcome and explains the format in under 5 minutes. Breathe. You\'re ready.<br><br><strong>8:15 PM — The rounds:</strong> 10 rounds of 3 minutes each. A signal marks the start and end of each conversation. No phones, no distractions — just you and the person in front of you.<br><br><strong>Final dynamic:</strong> After the rounds there\'s a special closing moment designed so the night doesn\'t end abruptly.<br><br><strong>Contact exchange:</strong> If there was a connection, exchanging info is completely voluntary. No pressure, no obligation — only if both want to.<br><br><strong>To close the night:</strong> Tres Minutos attendees get access to dinner at a special price at the same venue. Because the best part of the night sometimes starts after the rounds.',
    'faq.q2':  'Is there a dress code?',
    'faq.a2':  'Yes. The dress code is smart casual — we want you to look good and feel good. First impressions matter, so make the most of it.',
    'faq.q3':  'Is it safe to meet people at an event like this?',
    'faq.a3':  'Absolutely. All attendees go through an admission process before confirming their spot. Nobody enters without being verified in advance, and Moment0 staff will be present throughout the entire event.',
    'faq.q4':  'What kind of people attend?',
    'faq.a4':  'People who live in or are visiting CDMX — locals and internationals. The age range is typically between 25 and 45 years old. What everyone has in common is being open to meeting new people in person, without filters or algorithms.',
    'faq.q5':  'Will there be equal numbers of men and women?',
    'faq.a5':  'Yes, always. The event is designed with exact parity — if there are 10 women, there are 10 men. Not one more, not one less. If one gender sells out first, the other closes automatically.',
    'faq.q6':  'What if I get nervous?',
    'faq.a6':  'Completely normal — and that\'s what we\'re here for. The event is guided from start to finish by the Moment0 staff. We explain the format before we begin, manage the timing of each round, and make sure nobody is left without a conversation. Just show up — we handle the rest.',
    'faq.q7':  'Can I attend if I\'ve never done speed dating before?',
    'faq.a7':  'Of course — in fact most attendees are doing it for the first time. The format is simple, the atmosphere is relaxed, and the staff is there to make you feel comfortable from the moment you arrive.',
    'faq.q8':  'What if I don\'t connect with anyone?',
    'faq.a8':  'You still had a great time, had a good drink, and met interesting people. Moment0 isn\'t just about finding a partner — it\'s about stepping away from the screen and remembering what connecting in person feels like. And there\'s always a next edition.',
    'faq.q9':  'How do I confirm my spot?',
    'faq.a9':  'Reserve online at moment0.mx. You\'ll then receive a WhatsApp message with quick instructions. Your spot is confirmed within 24 hours once we review your profile.',
    'faq.q10': 'Can I attend if I\'m a foreigner?',
    'faq.a10': 'Absolutely. Events are bilingual — Spanish and English. Roma Norte is a cosmopolitan neighborhood and our events reflect that.',
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

  document.querySelectorAll('.faq__item--open .faq__body').forEach(body => {
    body.style.maxHeight = body.scrollHeight + 'px';
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
// COUNTDOWN TIMER
// =====================
const countdownTarget = new Date('2026-06-10T20:00:00-06:00').getTime();

function updateCountdown() {
  const el = document.getElementById('countdown');
  if (!el) return;

  const diff = countdownTarget - Date.now();

  if (diff <= 0) {
    const msg = translations[currentLang]['tm.cd.today'] || '¡El evento es hoy!';
    el.innerHTML = `<p class="tm__countdown-today">${msg}</p>`;
    return;
  }

  const days  = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins  = Math.floor((diff % 3600000)  / 60000);
  const secs  = Math.floor((diff % 60000)    / 1000);

  const pad = n => String(n).padStart(2, '0');
  document.getElementById('cd-days').textContent  = pad(days);
  document.getElementById('cd-hours').textContent = pad(hours);
  document.getElementById('cd-mins').textContent  = pad(mins);
  document.getElementById('cd-secs').textContent  = pad(secs);
}

updateCountdown();
setInterval(updateCountdown, 1000);

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

// =====================
// FAQ ACCORDION
// =====================
(function () {
  var items = document.querySelectorAll('.faq__item');
  if (!items.length) return;

  function openItem(item) {
    var body = item.querySelector('.faq__body');
    item.classList.add('faq__item--open');
    item.querySelector('.faq__btn').setAttribute('aria-expanded', 'true');
    body.style.maxHeight = body.scrollHeight + 'px';
  }

  function closeItem(item) {
    var body = item.querySelector('.faq__body');
    item.classList.remove('faq__item--open');
    item.querySelector('.faq__btn').setAttribute('aria-expanded', 'false');
    body.style.maxHeight = '0';
  }

  // Open first item on load without playing the open animation
  var firstBody = items[0].querySelector('.faq__body');
  firstBody.style.transition = 'none';
  openItem(items[0]);
  requestAnimationFrame(function () {
    requestAnimationFrame(function () { firstBody.style.transition = ''; });
  });

  items.forEach(function (item) {
    item.querySelector('.faq__btn').addEventListener('click', function () {
      var isOpen = item.classList.contains('faq__item--open');
      items.forEach(closeItem);
      if (!isOpen) openItem(item);
    });
  });
})();
