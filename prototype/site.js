const pages = {
  home: {
    title: 'UNA Dental — Home',
    hero: ['Modern dentistry. Human care.', 'A healthier smile starts with care built around you.', 'Comprehensive dental care for families, professionals, and anyone ready for a more comfortable dental experience.', 'split'],
    sections: ['stats','services','why','team','reviews','newpatient','journey','contact']
  },
  about: {
    title: 'About — UNA Dental',
    hero: ['About UNA Dental', 'Modern care with a neighborhood mindset.', 'We combine thoughtful dentistry, clear communication, and a calm patient experience built for long-term relationships.', 'background'],
    sections: ['story','values','team','reviews','contact']
  },
  team: {
    title: 'Meet the Team — UNA Dental',
    hero: ['People first', 'Meet the team behind your care.', 'Experienced clinicians and a welcoming support team focused on making every visit clear, comfortable, and personal.', 'split'],
    sections: ['providers','teamvalues','contact']
  },
  provider: {
    title: 'Dr. Maya Patel — UNA Dental',
    hero: ['Your dentist', 'Dr. Maya Patel, DDS', 'Comprehensive and cosmetic dentistry with an emphasis on comfort, education, and practical long-term care.', 'bleed'],
    sections: ['providerbio','providercare','reviews','contact']
  },
  services: {
    title: 'Dental Services — UNA Dental',
    hero: ['Complete care', 'Dental care for every stage of your smile.', 'Preventive, restorative, cosmetic, and emergency care designed around your health, priorities, and comfort.', 'background'],
    sections: ['servicecatalog','servicejourney','newpatient','contact']
  },
  service: {
    title: 'Dental Implants — UNA Dental',
    hero: ['Restore your smile', 'Dental implants that feel like part of you.', 'Replace missing teeth with a stable, natural-looking option planned around your bite, bone health, and long-term confidence.', 'bleed'],
    sections: ['serviceintro','benefits','process','faqshort','contact']
  },
  patients: {
    title: 'New Patients — UNA Dental',
    hero: ['New patients', 'Start with answers, not pressure.', 'Your first visit is designed to understand what you need, what matters to you, and the clearest path forward.', 'split'],
    sections: ['newpatient','journey','forms','contact']
  },
  insurance: {
    title: 'Insurance & Financing — UNA Dental',
    hero: ['Plan with confidence', 'Clear options for the cost of care.', 'We help you understand insurance, payment options, and treatment priorities before you make a decision.', 'background'],
    sections: ['insurancegrid','financing','contact']
  },
  reviews: {
    title: 'Patient Reviews — UNA Dental',
    hero: ['Patient stories', 'Care is better when patients feel heard.', 'Read how patients describe their experience with our team, communication, comfort, and treatment.', 'split'],
    sections: ['reviewsfull','trust','contact']
  },
  contact: {
    title: 'Contact — UNA Dental',
    hero: ['Reach our team', 'Questions, appointments, directions — start here.', 'Call, send a message, or visit our office. We will help you find the right next step.', 'background'],
    sections: ['location','forms']
  },
  book: {
    title: 'Book an Appointment — UNA Dental',
    hero: ['Book online', 'Request your dental appointment.', 'Tell us how to reach you and what you need help with. Our team will follow up with appointment options.', 'split'],
    sections: ['forms','expect','contact']
  },
  blog: {
    title: 'Dental Health Blog — UNA Dental',
    hero: ['Dental health library', 'Clear answers for better decisions.', 'Practical articles about dental health, treatment options, prevention, and what to expect before your visit.', 'background'],
    sections: ['bloggrid','newsletter']
  },
  post: {
    title: 'Do I Need a Root Canal? — UNA Dental',
    hero: ['Dental health', 'Do I need a root canal?', 'Common signs, what the procedure actually does, and when it may be the best way to save a tooth.', 'split'],
    sections: ['prose','related','contact']
  },
  faq: {
    title: 'FAQ — UNA Dental',
    hero: ['Questions answered', 'What patients ask us most.', 'Quick answers about appointments, insurance, treatment, emergencies, and what to expect at our office.', 'background'],
    sections: ['faqfull','contact']
  },
  privacy: {
    title: 'Privacy Policy — UNA Dental',
    hero: ['Privacy', 'Privacy policy.', 'How this website handles information, forms, analytics, and basic site data.', 'background'],
    sections: ['privacyprose']
  },
  notfound: {
    title: 'Page Not Found — UNA Dental',
    hero: ['404', 'This page could not be found.', 'The link may have changed. Use the options below to get back to the information you need.', 'background'],
    sections: ['notfoundlinks']
  },
  lpservice: {
    title: 'Dental Implants Consultation — UNA Dental',
    hero: ['Dental implants', 'Ready to replace a missing tooth?', 'See whether implants are right for you with a focused consultation and clear treatment plan.', 'bleed'],
    sections: ['benefits','process','reviews','forms']
  },
  lpcampaign: {
    title: 'New Patient Offer — UNA Dental',
    hero: ['New patient visit', 'A simpler first step toward better dental health.', 'Schedule a comprehensive first visit with a team that explains what matters and what can wait.', 'background'],
    sections: ['offer','trust','forms']
  }
};

const nav = [
  ['Home','index.html'],['About','about.html'],['Team','team.html'],['Services','services.html'],['New Patients','new-patients.html'],['Blog','blog.html'],['Contact','contact.html']
];

const imgs = {
  dentist: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1400&q=85',
  patient: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1600&q=85',
  team: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1500&q=85',
  room: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=85'
};

function header() {
  return `<a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header"><div class="container-full header-inner">
    <a class="brand" href="index.html"><span class="brand-mark">U</span><span class="brand-text">UNA Dental</span></a>
    <nav class="site-nav" aria-label="Primary">${nav.map(([n,h])=>`<a href="${h}">${n}</a>`).join('')}</nav>
    <div class="cluster header-actions"><a class="button button-text button-on-light" href="tel:+15555550100">Call</a><a class="button button-primary button-on-light" href="book.html">Book Online</a></div>
    <button class="menu-toggle" aria-label="Toggle menu" aria-expanded="false">Menu</button>
  </div></header>`;
}

function footer() {
  return `<footer class="site-footer surface-dark"><div class="container-full footer-grid grid-3">
    <div class="stack"><a class="brand brand-footer" href="index.html"><span class="brand-mark">U</span><span class="brand-text">UNA Dental</span></a><p class="small">UNA-Elementor dental reference site for Foundation QA.</p></div>
    <div class="stack"><p class="overline">Explore</p><a href="services.html">Services</a><a href="team.html">Our Team</a><a href="reviews.html">Reviews</a><a href="faq.html">FAQ</a></div>
    <div class="stack"><p class="overline">Contact</p><a href="tel:+15555550100">(555) 555-0100</a><a href="mailto:hello@example.com">hello@example.com</a><span>100 Main Street, Your City, MI</span></div>
  </div><div class="container-full footer-bottom"><p class="legal-text">© 2026 UNA Dental · <a href="privacy.html">Privacy</a></p><p class="legal-text">Static Foundation QA prototype — not production.</p></div></footer>`;
}

function hero(data) {
  const [overline,title,body,type] = data;
  const media = `<div class="hero-media ${type==='bleed'?'bleed-right':''}"><img class="media-4-3" src="${imgs.patient}" alt="Dentist speaking with a patient"></div>`;
  if (type === 'background') return `<section class="section-120-fluid surface-dark hero-bg"><div class="hero-bg-media" style="background-image:linear-gradient(90deg,rgba(29,33,30,.9),rgba(29,33,30,.38)),url('${imgs.room}')"></div><div class="container-full"><div class="stack hero-copy"><p class="overline">${overline}</p><h1 class="display-large">${title}</h1><p class="lead">${body}</p><div class="cluster"><a class="button button-primary button-on-dark" href="book.html">Book Online</a><a class="button button-outline button-on-dark" href="tel:+15555550100">Call Now</a></div></div></div></section>`;
  return `<section class="section-120-fluid surface-light hero-section"><div class="container-full grid-40-60 hero-grid"><div class="stack hero-copy"><p class="overline">${overline}</p><h1 class="display-large">${title}</h1><p class="lead">${body}</p><div class="cluster"><a class="button button-primary button-on-light" href="book.html">Book Online</a><a class="button button-outline button-on-light" href="tel:+15555550100">Call Now</a></div></div>${media}</div></section>`;
}

const card = (title,body,link='#') => `<article class="service-card stack"><span class="service-icon">+</span><h3>${title}</h3><p>${body}</p><a class="text-link" href="${link}">Learn more →</a></article>`;
const review = (body,name) => `<blockquote class="review-card stack"><div class="review-stars">★★★★★</div><p>“${body}”</p><footer class="meta">— ${name}</footer></blockquote>`;

function section(name) {
  const map = {
    stats: `<section class="section-64-fluid surface-neutral"><div class="container-full grid-4 stats-grid">${[['20+','Years serving families'],['4.9','Average patient rating'],['5k+','Smiles cared for'],['1','Team focused on you']].map(([n,l])=>`<div class="stat-card stack"><strong class="stat-number">${n}</strong><span class="meta">${l}</span></div>`).join('')}</div></section>`,
    services: `<section class="section-120-fluid surface-light"><div class="container-full stack section-heading-block"><p class="overline">Care for every stage</p><h2>Everything your smile needs, in one trusted practice.</h2><p class="lead">From prevention to confident smile transformations, treatment is planned around your goals, comfort, and long-term health.</p></div><div class="container-full grid-3">${card('Preventive Care','Cleanings, exams, gum care, and prevention that protects your smile.','service.html')}${card('Restorative Dentistry','Natural-looking solutions for damaged or missing teeth.','service.html')}${card('Cosmetic Dentistry','Thoughtful improvements designed to still look like you.','service.html')}</div></section>`,
    why: `<section class="section-140-fluid surface-dark"><div class="container-full grid-60-40 align-center"><div class="stack"><p class="overline">Why patients stay</p><h2>Clinical standards without the cold experience.</h2><p class="lead">Know what is happening, understand your options, and feel confident in every decision.</p><div class="grid-2 benefit-grid">${['Clear treatment plans','Comfort-first visits','Modern technology','One long-term team'].map(x=>`<div class="stack benefit-item"><span class="benefit-mark">✓</span><h4>${x}</h4><p class="small">A repeatable pattern using the approved UNA foundation classes.</p></div>`).join('')}</div></div><img class="media-3-4" src="${imgs.dentist}" alt="Dentist in a modern practice"></div></section>`,
    team: `<section class="section-120-fluid surface-light"><div class="container-full grid-40-60 align-center"><div class="stack"><p class="overline">Meet your dentist</p><h2>A relationship you can build your care around.</h2><p class="lead">We take time to understand your concerns, explain your options, and build a plan you feel good about.</p><a class="button button-secondary button-on-light" href="team.html">Meet the team</a></div><img class="media-4-3" src="${imgs.team}" alt="Dental team"></div></section>`,
    reviews: `<section class="section-120-fluid surface-neutral"><div class="container-full stack section-heading-block"><p class="overline">Patient stories</p><h2>What care feels like matters.</h2></div><div class="container-full grid-3">${review('They explained every step and never made me feel rushed.','Melissa R.')}${review('The people are the reason I came back.','Daniel P.')}${review('Booking was easy and the treatment plan was straightforward.','Amanda L.')}</div></section>`,
    reviewsfull: `<section class="section-120-fluid surface-neutral"><div class="container-full grid-3">${['The team made a complicated treatment feel manageable.','I finally understand my dental health.','The office is calm and everyone communicates clearly.','My kids actually enjoy coming here.','No pressure—just clear options.','The entire process was smooth from booking to follow-up.'].map((x,i)=>review(x,['Jordan','Casey','Taylor','Morgan','Riley','Jamie'][i])).join('')}</div></section>`,
    newpatient: `<section class="section-120-fluid surface-primary"><div class="container-full grid-70-30 align-center"><div class="stack"><p class="overline">New patient visit</p><h2>Start with answers, not pressure.</h2><p class="lead">Your first visit is designed around what you need and the clearest path forward.</p></div><div class="stack appointment-card"><p class="meta">Your first visit can include</p><ul><li>Comprehensive exam</li><li>Digital imaging as needed</li><li>Treatment discussion</li><li>Insurance guidance</li></ul><a class="button button-primary button-on-dark" href="book.html">Request Appointment</a></div></div></section>`,
    journey: `<section class="section-120-fluid surface-light"><div class="container-full grid-60-40 align-center"><div class="stack"><p class="overline">Simple process</p><h2>Know what happens next.</h2><p class="lead">A clear patient journey reduces uncertainty before you ever sit in the chair.</p></div><ol class="steps-list stack">${[['01','Book your visit'],['02','Meet your care team'],['03','Leave with a plan']].map(([n,t])=>`<li><span class="step-number">${n}</span><div class="stack"><h4>${t}</h4><p class="small">A clear next step with no unnecessary friction.</p></div></li>`).join('')}</ol></div></section>`,
    contact: `<section class="section-140-fluid surface-dark"><div class="container-full grid-60-40 align-start"><div class="stack"><p class="overline">Ready when you are</p><h2>Make your next dental visit the easy one.</h2><p class="lead">Book online or call our team.</p><div class="cluster"><a class="button button-primary button-on-dark" href="book.html">Book Online</a><a class="button button-outline button-on-dark" href="tel:+15555550100">Call Now</a></div></div>${form()}</div></section>`,
    forms: `<section class="section-120-fluid surface-neutral"><div class="container-full grid-40-60"><div class="stack"><p class="overline">Request an appointment</p><h2>Tell us how we can help.</h2><p class="lead">This is the scoped `.gf-form` visual test. Production will map to Gravity Forms.</p></div>${form(true)}</div></section>`,
    story: `<section class="section-120-fluid surface-light"><div class="container-full grid-40-60 align-center"><div class="stack"><p class="overline">Our story</p><h2>Built around long-term relationships.</h2><p class="lead">The practice is designed to make high-quality dentistry easier to understand and easier to stay consistent with.</p><p>We focus on prevention, thoughtful treatment planning, and a patient experience that respects your time and questions.</p></div><img class="media-4-3" src="${imgs.team}" alt="Dental team"></div></section>`,
    values: `<section class="section-120-fluid surface-neutral"><div class="container-full grid-4">${['Explain clearly','Treat conservatively','Respect your time','Plan long term'].map(x=>card(x,'A small content primitive inside a repeatable card composition.')).join('')}</div></section>`,
    providers: `<section class="section-120-fluid surface-light"><div class="container-full grid-3">${['Dr. Maya Patel','Dr. Jordan Lee','Dr. Sofia Martinez'].map((x,i)=>`<article class="provider-card stack"><img class="media-3-4" src="${imgs.dentist}" alt="${x}"><p class="overline">General Dentist</p><h3>${x}</h3><p>Focused on clear communication, comfort, and practical treatment planning.</p><a class="text-link" href="provider.html">View profile →</a></article>`).join('')}</div></section>`,
    teamvalues: `<section class="section-120-fluid surface-dark"><div class="container-full grid-3">${['Clinical excellence','Calm communication','Consistent follow-through'].map(x=>`<div class="stack"><h3>${x}</h3><p>Shared standards create a better patient experience across every touchpoint.</p></div>`).join('')}</div></section>`,
    providerbio: `<section class="section-120-fluid surface-light"><div class="container-full grid-40-60"><img class="media-3-4" src="${imgs.dentist}" alt="Dr. Maya Patel"><div class="stack"><p class="overline">About Dr. Patel</p><h2>Care built on clarity and trust.</h2><p class="lead">Dr. Patel believes patients make better decisions when treatment is explained in plain language.</p><p>Her approach balances prevention, function, esthetics, and long-term maintainability.</p><div class="grid-2"><div><p class="meta">Education</p><p>University School of Dentistry</p></div><div><p class="meta">Focus</p><p>Comprehensive & cosmetic care</p></div></div></div></div></section>`,
    providercare: `<section class="section-120-fluid surface-neutral"><div class="container-full grid-3">${card('Preventive','Build a healthier baseline.')}${card('Restorative','Repair and protect function.')}${card('Cosmetic','Refine your smile with restraint.')}</div></section>`,
    servicecatalog: `<section class="section-120-fluid surface-light"><div class="container-full grid-3">${['Dental Checkups','Emergency Dentistry','Root Canal Treatment','Dental Crowns','Dental Implants','Invisalign','Teeth Whitening','Gum Care','Family Dentistry'].map(x=>card(x,'Representative service card for repeated production use.','service.html')).join('')}</div></section>`,
    servicejourney: `<section class="section-120-fluid surface-dark"><div class="container-full grid-60-40"><div class="stack"><p class="overline">How we plan care</p><h2>Start with the problem, then choose the treatment.</h2><p class="lead">Service pages should help patients understand why treatment matters, what options exist, and what action to take.</p></div><div class="stack"><p class="meta">Discover → Explore → Intent → Convert</p><p>Every service page should support the customer action journey without forcing a CTA into every paragraph.</p></div></div></section>`,
    serviceintro: `<section class="section-120-fluid surface-light"><div class="container-read stack"><p class="overline">What are dental implants?</p><h2>A stable replacement for missing teeth.</h2><p class="lead">Implants replace the tooth root with a biocompatible post that supports a crown, bridge, or denture.</p><p>The goal is to restore function and confidence while protecting surrounding teeth and bone where possible.</p></div></section>`,
    benefits: `<section class="section-120-fluid surface-neutral"><div class="container-full grid-4">${['Stable function','Natural appearance','Bone support','Long-term planning'].map(x=>card(x,'Short benefit content to stress-test card rhythm.')).join('')}</div></section>`,
    process: `<section class="section-120-fluid surface-light"><div class="container-full grid-30-70"><div class="stack"><p class="overline">The process</p><h2>What treatment can look like.</h2></div><ol class="steps-list stack">${[['01','Consultation & imaging'],['02','Treatment planning'],['03','Implant placement'],['04','Restoration & follow-up']].map(([n,t])=>`<li><span class="step-number">${n}</span><div class="stack"><h4>${t}</h4><p class="small">Timing varies by healing needs and treatment complexity.</p></div></li>`).join('')}</ol></div></section>`,
    faqshort: `<section class="section-120-fluid surface-light"><div class="container-read stack"><p class="overline">Common questions</p><h2>Dental implant FAQ</h2>${faqItems(4)}</div></section>`,
    faqfull: `<section class="section-120-fluid surface-light"><div class="container-read stack">${faqItems(10)}</div></section>`,
    insurancegrid: `<section class="section-120-fluid surface-light"><div class="container-full grid-3">${card('Insurance','We help verify benefits and explain estimated coverage.')}${card('Membership options','Simple alternatives may be available for patients without insurance.')}${card('Payment plans','Financing can help spread larger treatment costs over time.')}</div></section>`,
    financing: `<section class="section-120-fluid surface-neutral"><div class="container-full grid-60-40"><div class="stack"><p class="overline">Treatment priorities</p><h2>Plan the care and the cost together.</h2><p class="lead">Good financial conversations should support clinical priorities, not obscure them.</p></div><div class="stack"><h3>Before treatment begins</h3><ul><li>Review estimated insurance</li><li>Discuss payment timing</li><li>Prioritize urgent vs elective care</li><li>Confirm financing when needed</li></ul></div></div></section>`,
    trust: `<section class="section-64-fluid surface-primary"><div class="container-full grid-4">${[['4.9','Rating'],['500+','Reviews'],['20+','Years'],['Same week','Availability']].map(([n,l])=>`<div class="stack"><strong class="stat-number light-stat">${n}</strong><span class="meta">${l}</span></div>`).join('')}</div></section>`,
    location: `<section class="section-120-fluid surface-light"><div class="container-full grid-40-60"><div class="stack"><p class="overline">Visit us</p><h2>100 Main Street, Your City, MI</h2><p class="lead">Easy parking, accessible entrance, and a team ready to help before you arrive.</p><div class="grid-2"><div><p class="meta">Hours</p><p>Mon–Thu 8–5<br>Fri 8–2</p></div><div><p class="meta">Phone</p><p>(555) 555-0100</p></div></div></div><div class="map-shell">Map / Directions</div></div></section>`,
    expect: `<section class="section-120-fluid surface-light"><div class="container-full grid-3">${card('We confirm your request','A team member follows up with appointment options.')}${card('We answer questions','Insurance, records, and visit expectations can be clarified in advance.')}${card('You arrive prepared','The goal is less uncertainty before the appointment begins.')}</div></section>`,
    bloggrid: `<section class="section-120-fluid surface-light"><div class="container-full grid-3">${['Do I Need a Root Canal?','Why Are My Gums Bleeding?','Dental Implants: What to Expect','Invisalign vs Braces','How Often Should I Get a Cleaning?','What Should I Do If I Chip a Tooth?'].map(x=>`<article class="blog-card stack"><img class="media-4-3" src="${imgs.room}" alt="Dental care"><p class="overline">Dental Health</p><h3>${x}</h3><p>Short educational summary designed to test article-card rhythm.</p><a class="text-link" href="post.html">Read article →</a></article>`).join('')}</div></section>`,
    newsletter: `<section class="section-96-fluid surface-primary"><div class="container-read stack centered-copy"><p class="overline">Stay informed</p><h2>Useful dental guidance, without the noise.</h2><p class="lead">A lightweight content CTA pattern for the blog index.</p></div></section>`,
    prose: `<section class="section-120-fluid surface-light"><article class="container-read wp-prose"><p class="meta">8 min read · Reviewed August 2026</p><h2>What a root canal actually treats</h2><p>A root canal treats inflammation or infection inside a tooth. The goal is to remove damaged tissue, clean the inside of the tooth, and preserve the tooth when possible.</p><h3>Common signs</h3><ul><li>Persistent tooth pain</li><li>Lingering sensitivity</li><li>Swelling near the tooth</li><li>Darkening of the tooth</li></ul><h2>Does every toothache need one?</h2><p>No. Tooth pain can have several causes. An exam and imaging help determine whether the nerve is involved and whether another treatment is more appropriate.</p><blockquote>Long-form WordPress content needs its own scoped prose rhythm instead of inheriting page-builder zero-margin behavior.</blockquote><h3>What happens next</h3><p>If treatment is recommended, the tooth is cleaned internally, sealed, and usually restored with a crown or other final restoration depending on the tooth.</p></article></section>`,
    related: `<section class="section-96-fluid surface-neutral"><div class="container-full grid-3">${card('Dental Crowns','How crowns protect damaged teeth.','post.html')}${card('Emergency Dentistry','When pain should not wait.','post.html')}${card('Tooth Extraction','When saving a tooth is not the best option.','post.html')}</div></section>`,
    privacyprose: `<section class="section-120-fluid surface-light"><article class="container-read wp-prose"><h2>Information we collect</h2><p>This prototype demonstrates the long-form legal content system. A production privacy policy must reflect the actual website, analytics, forms, vendors, and legal requirements.</p><h2>Forms</h2><p>General marketing forms should not request unnecessary sensitive patient information.</p><h2>Analytics and cookies</h2><p>Tracking should be documented and verified before claims are made about what is collected or measured.</p><h2>Contact</h2><p>Questions about website privacy can be directed to the practice through the published contact information.</p></article></section>`,
    notfoundlinks: `<section class="section-96-fluid surface-light"><div class="container-read stack centered-copy"><h2>Try one of these instead.</h2><div class="cluster"><a class="button button-primary button-on-light" href="index.html">Home</a><a class="button button-outline button-on-light" href="services.html">Services</a><a class="button button-outline button-on-light" href="contact.html">Contact</a></div></div></section>`,
    offer: `<section class="section-96-fluid surface-secondary"><div class="container-full grid-60-40 align-center"><div class="stack"><p class="overline">New patient offer</p><h2>Comprehensive first visit</h2><p class="lead">A focused landing-page offer block designed to test conversion hierarchy.</p></div><div class="appointment-card stack"><strong class="display-small">$99</strong><p>Example promotional treatment only. Real offers require client approval and compliance review.</p><a class="button button-primary button-on-dark" href="book.html">Claim Offer</a></div></div></section>`
  };
  return map[name] || '';
}

function faqItems(count){return Array.from({length:count},(_,i)=>`<details class="faq-item"><summary>${['Do you accept insurance?','Are you accepting new patients?','What if I have a dental emergency?','Do you offer payment plans?','How long is a first visit?','Can I book online?','Do you treat children?','What should I bring?','Do you offer cosmetic dentistry?','How often should I visit?'][i]}</summary><p>Representative FAQ answer used to test content length, spacing, keyboard interaction, and responsive behavior.</p></details>`).join('');}

function form(light=false){return `<form class="gf-form form-shell ${light?'form-light':''}"><div class="stack"><div class="field-group"><label>Name</label><input type="text" autocomplete="name"></div><div class="field-group"><label>Email</label><input type="email" autocomplete="email"></div><div class="field-group"><label>Phone</label><input type="tel" autocomplete="tel"></div><div class="field-group"><label>How can we help?</label><textarea rows="5"></textarea></div><button class="button button-primary ${light?'button-on-light':'button-on-dark'}" type="button">Request Appointment</button><p class="helper-text">Prototype only — production maps to Gravity Forms under the `.gf-form` scope.</p></div></form>`;}

function render(){
  const key=document.body.dataset.page || 'home';
  const page=pages[key] || pages.home;
  document.title=page.title;
  document.body.innerHTML=header()+`<main id="main">${hero(page.hero)}${page.sections.map(section).join('')}</main>`+footer();
  const toggle=document.querySelector('.menu-toggle');
  const navEl=document.querySelector('.site-nav');
  toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));navEl.classList.toggle('is-open',!open);});
}
render();
