/* ============================================================
   WOODWAVE HOME — vanilla JS storefront
   No frameworks. Just data, DOM, and localStorage.
   ============================================================ */
'use strict';

/* ============================================================ Data ============================================================ */
const IMG = (n) => `img/${n}.png`;

const PRODUCTS = [
  {
    id: 'willowcrest-armchair', name: 'WillowCrest Rattan Armchair',
    category: 'rattan-seating', price: 489, oldPrice: 590, badge: 'bestseller',
    colors: [
      { name: 'Natural Rattan', hex: '#d4a373' },
      { name: 'Walnut Stain', hex: '#6b4423' },
      { name: 'Black Wash', hex: '#2a2a2a' },
      { name: 'Whitewash', hex: '#e8d5b7' }
    ],
    defaultColor: 'Natural Rattan',
    image: IMG('p_willowcrest_armchair'),
    rating: 4.9, reviews: 124, inStock: true,
    short: 'Hand-woven rattan armchair on a solid oak frame.',
    description: 'WillowCrest is woven by hand from sustainable Indonesian rattan over a kiln-dried solid oak frame. The seat uses a seven-step weave pattern passed down through three generations of weavers. A separate duck-down cushion with a washable linen cover is included. Each piece takes a single craftsperson 22 hours to complete.',
    specs: [
      { label: 'Frame', value: 'Solid oak' },
      { label: 'Weave', value: 'Indonesian rattan' },
      { label: 'Dimensions', value: '78 × 82 × 84 cm' },
      { label: 'Cushion', value: 'Linen + duck-down' }
    ]
  },
  {
    id: 'oakwhisper-dining-chair', name: 'OakWhisper Dining Chair',
    category: 'rattan-seating', price: 219, badge: 'new',
    colors: [
      { name: 'Natural Oak', hex: '#c8a273' },
      { name: 'Smoked Oak', hex: '#6b4423' },
      { name: 'Black Oak', hex: '#1a1a1a' }
    ],
    defaultColor: 'Natural Oak',
    image: IMG('p_oakwhisper_chair'),
    rating: 4.7, reviews: 68, inStock: true,
    short: 'Solid oak chair with hand-caned seat in natural rattan.',
    description: 'OakWhisper pairs a solid oak frame with a hand-caned seat woven from natural rattan reed. The caning is done using the traditional six-way pattern that flexes with weight yet springs back to shape. Joinery is mortise-and-tenon with wooden pegs — no metal fasteners, no glue on the visible surfaces. Sold individually, ships fully assembled.',
    specs: [
      { label: 'Frame', value: 'Solid oak' },
      { label: 'Seat', value: 'Hand-caned rattan' },
      { label: 'Dimensions', value: '46 × 52 × 84 cm' },
      { label: 'Joinery', value: 'Mortise & tenon' }
    ]
  },
  {
    id: 'halcyon-lounge-chair', name: 'Halcyon Lounge Chair',
    category: 'rattan-seating', price: 549, oldPrice: 650, badge: 'sale',
    colors: [
      { name: 'Terra', hex: '#a35233' },
      { name: 'Graphite', hex: '#2a2a2a' },
      { name: 'Ivory', hex: '#e8d5b7' }
    ],
    defaultColor: 'Terra',
    image: IMG('p_halcyon_chair'),
    rating: 4.8, reviews: 41, inStock: true,
    short: 'Bent-plywood shell on a hand-finished solid beech base.',
    description: 'Halcyon is built around a steam-bent plywood shell finished in our workshop with three coats of natural oil. The base is solid beech with a 360° swivel bearing. The seat geometry was tuned for the kind of long evenings that call for a glass of wine and a good book. Each chair is signed and numbered by the maker.',
    specs: [
      { label: 'Shell', value: 'Steam-bent plywood' },
      { label: 'Base', value: 'Solid beech, swivel' },
      { label: 'Dimensions', value: '82 × 86 × 94 cm' },
      { label: 'Finish', value: '3 coats natural oil' }
    ]
  },
  {
    id: 'monolith-coffee-table', name: 'Monolith Live-Edge Coffee Table',
    category: 'wooden-tables', price: 749, badge: 'bestseller',
    colors: [
      { name: 'Natural Oak', hex: '#c8a273' },
      { name: 'Walnut', hex: '#5a3a22' },
      { name: 'Black', hex: '#1a1a1a' }
    ],
    defaultColor: 'Natural Oak',
    image: IMG('p_monolith_table'),
    rating: 4.9, reviews: 87, inStock: true,
    short: 'Live-edge solid oak slab on a blackened steel frame.',
    description: 'Monolith is built around a single live-edge slab of European oak, dried for 18 months and hand-finished with our oil-wax blend. The natural edge is preserved and lightly sanded to a velvet touch. The base is a 4 mm blackened steel frame. Each table is one-of-a-kind: no two slabs share the same grain.',
    specs: [
      { label: 'Top', value: 'Live-edge solid oak' },
      { label: 'Base', value: '4 mm blackened steel' },
      { label: 'Dimensions', value: '110 × 60 × 34 cm' },
      { label: 'Weight', value: '32 kg' }
    ]
  },
  {
    id: 'harvest-dining-table', name: 'Harvest Oak Dining Table',
    category: 'wooden-tables', price: 1290, oldPrice: 1520, badge: 'sale',
    colors: [
      { name: 'Natural Oak', hex: '#c8a273' },
      { name: 'Smoked Oak', hex: '#6b4423' },
      { name: 'Walnut', hex: '#5a3a22' }
    ],
    defaultColor: 'Natural Oak',
    image: IMG('p_harvest_table'),
    rating: 4.8, reviews: 53, inStock: true,
    short: 'Six-seater oak table with breadboard ends and wood pegs.',
    description: 'Harvest is a six-seater dining table built from solid European oak with traditional breadboard ends that allow the top to move with the seasons. The top is 38 mm thick, joined to the legs with double-mortise joinery and walnut pegs. Seats six comfortably, eight for a special occasion. Reaches you in three flat-packed pieces, assembles in 15 minutes.',
    specs: [
      { label: 'Top', value: 'Solid oak 38 mm' },
      { label: 'Joinery', value: 'Breadboard + walnut pegs' },
      { label: 'Dimensions', value: '200 × 100 × 75 cm' },
      { label: 'Seats', value: '6–8' }
    ]
  },
  {
    id: 'willowdream-bed-frame', name: 'WillowDream Bed Frame',
    category: 'rattan-beds', price: 989, badge: 'new',
    colors: [
      { name: 'Natural Oak + Rattan', hex: '#c8a273' },
      { name: 'Smoked Oak + Rattan', hex: '#6b4423' },
      { name: 'White Oak + Rattan', hex: '#e8d5b7' }
    ],
    defaultColor: 'Natural Oak + Rattan',
    image: IMG('p_willowbed'),
    rating: 4.9, reviews: 34, inStock: true,
    short: 'Oak bed frame with a hand-woven rattan headboard.',
    description: 'WillowDream combines a solid oak frame with a hand-woven rattan headboard — a modern take on the classic mid-century woven bed. The headboard is woven in our workshop using the seven-step pattern that gives gentle flex against your back. Fits a standard 160 × 200 cm mattress (not included). The frame sits on tapered oak legs and is shipped flat-packed.',
    specs: [
      { label: 'Frame', value: 'Solid oak' },
      { label: 'Headboard', value: 'Hand-woven rattan' },
      { label: 'Mattress', value: '160 × 200 cm' },
      { label: 'Slats', value: 'Steam-bent beech' }
    ]
  },
  {
    id: 'lumen-walnut-sideboard', name: 'Lumen Cane-Front Sideboard',
    category: 'woven-storage', price: 1099, oldPrice: 1320, badge: 'bestseller',
    colors: [
      { name: 'Walnut + Cane', hex: '#5a3a22' },
      { name: 'Oak + Cane', hex: '#c8a273' },
      { name: 'Black + Cane', hex: '#1a1a1a' }
    ],
    defaultColor: 'Walnut + Cane',
    image: IMG('p_lumen_sideboard'),
    rating: 4.7, reviews: 49, inStock: true,
    short: 'Walnut sideboard with hand-caned door panels.',
    description: 'Lumen blends a solid walnut carcass with hand-caned door panels — the cane softens the visual weight of the sideboard while letting light filter through. Inside, three compartments with adjustable shelves and soft-close doors. Solid brass hardware, hand-rubbed oil finish. A modern heirloom that gets more beautiful with use.',
    specs: [
      { label: 'Frame', value: 'Solid walnut' },
      { label: 'Panels', value: 'Hand-caned rattan' },
      { label: 'Hardware', value: 'Solid brass' },
      { label: 'Dimensions', value: '180 × 45 × 72 cm' }
    ]
  },
  {
    id: 'studio-open-shelf', name: 'Studio Open Bookshelf',
    category: 'woven-storage', price: 689, badge: 'new',
    colors: [
      { name: 'Oak + Cane Back', hex: '#c8a273' },
      { name: 'Walnut + Cane Back', hex: '#5a3a22' },
      { name: 'Black + Cane Back', hex: '#1a1a1a' }
    ],
    defaultColor: 'Oak + Cane Back',
    image: IMG('p_studio_shelf'),
    rating: 4.8, reviews: 73, inStock: true,
    short: 'Open oak shelving with hand-cane back panels.',
    description: 'Studio brings the warmth of woven rattan to an open shelving unit. Five solid oak shelves sit on a blackened steel frame, with hand-cane panels stretched across the back. The cane catches light and casts gentle shadow patterns. Each shelf holds up to 25 kg. Ideal for books, plants, ceramics, or a small library of vinyl.',
    specs: [
      { label: 'Shelves', value: 'Solid oak, 30 mm' },
      { label: 'Back', value: 'Hand-cane panels' },
      { label: 'Frame', value: 'Blackened steel' },
      { label: 'Load', value: '25 kg / shelf' }
    ]
  },
  {
    id: 'halo-rattan-pendant', name: 'Halo Hand-Woven Pendant',
    category: 'lighting', price: 249, badge: 'bestseller',
    colors: [
      { name: 'Natural Rattan', hex: '#d4a373' },
      { name: 'Smoked Rattan', hex: '#6b4423' },
      { name: 'Black Rattan', hex: '#1a1a1a' }
    ],
    defaultColor: 'Natural Rattan',
    image: IMG('p_halo_pendant'),
    rating: 4.9, reviews: 96, inStock: true,
    short: 'Hand-woven rattan pendant, 45 cm diameter.',
    description: 'Halo is woven by hand from natural Indonesian rattan around a hand-bent steel ring. The weave pattern throws soft, organic shadows across the walls and ceiling when lit. Each pendant comes with a 1 m chain and a ceiling rose. Compatible with E27 LED bulbs up to 15 W. Allow 2–3 weeks for weaving when out of stock.',
    specs: [
      { label: 'Material', value: 'Hand-woven rattan' },
      { label: 'Diameter', value: '45 cm' },
      { label: 'Chain', value: '100 cm, adjustable' },
      { label: 'Fitting', value: 'E27, max 15 W' }
    ]
  },
  {
    id: 'arc-floor-lamp', name: 'Arc Brass Floor Lamp',
    category: 'lighting', price: 379, oldPrice: 450, badge: 'sale',
    colors: [
      { name: 'Aged Brass', hex: '#b08d57' },
      { name: 'Blackened Brass', hex: '#1a1a1a' },
      { name: 'Polished Brass', hex: '#d4a373' }
    ],
    defaultColor: 'Aged Brass',
    image: IMG('p_arc_lamp'),
    rating: 4.8, reviews: 67, inStock: true,
    short: 'Solid brass arc lamp on a hand-turned oak base.',
    description: 'Arc is a 1960s-inspired arc lamp reimagined for today. The arc is hand-bent solid brass, weighted at the bottom with a hand-turned solid oak disc. The shade is woven natural rattan that softens the LED light into a warm glow. The integrated 12 W LED is dimmable in three colour temperatures, from candle-warm to reading-bright.',
    specs: [
      { label: 'Arc', value: 'Solid brass' },
      { label: 'Base', value: 'Solid oak, 8 kg' },
      { label: 'Shade', value: 'Woven rattan' },
      { label: 'Light', value: '12 W LED, dimmable' }
    ]
  },
  {
    id: 'aloft-cane-console', name: 'Aloft Cane Console',
    category: 'hall-console', price: 489, badge: 'new',
    colors: [
      { name: 'Oak + Cane', hex: '#c8a273' },
      { name: 'Walnut + Cane', hex: '#5a3a22' },
      { name: 'Black + Cane', hex: '#1a1a1a' }
    ],
    defaultColor: 'Oak + Cane',
    image: IMG('p_aloft_console'),
    rating: 4.6, reviews: 28, inStock: true,
    short: 'Slim hallway console with hand-cane front panels.',
    description: 'Aloft is a slim hallway console built from solid oak with hand-cane panels on the front. Two drawers with brass pulls hold keys, mail, and small things. The cane front lets the piece breathe — it never feels heavy in a narrow hall. Ships fully assembled in protective crate; we deliver to your room of choice.',
    specs: [
      { label: 'Frame', value: 'Solid oak' },
      { label: 'Fronts', value: 'Hand-cane panels' },
      { label: 'Drawers', value: '2, soft-close' },
      { label: 'Dimensions', value: '110 × 28 × 82 cm' }
    ]
  },
  {
    id: 'willowvanity-mirror', name: 'WillowVanity Mirror Console',
    category: 'hall-console', price: 399,
    colors: [
      { name: 'Oak + Rattan Frame', hex: '#c8a273' },
      { name: 'Walnut + Rattan Frame', hex: '#5a3a22' }
    ],
    defaultColor: 'Oak + Rattan Frame',
    image: IMG('p_willowvanity'),
    rating: 4.5, reviews: 19, inStock: false,
    short: 'Console + bevelled mirror framed in hand-woven rattan.',
    description: 'WillowVanity pairs a slim oak console with a bevelled mirror framed in hand-woven rattan. The weave wraps the entire frame in a seven-step pattern, softening the geometry of the glass. A small shelf below the mirror holds keys, a bowl, a phone on charge. The console is wall-mounted with two solid-brass cleats.',
    specs: [
      { label: 'Frame', value: 'Solid oak + rattan' },
      { label: 'Mirror', value: '4 cm bevel' },
      { label: 'Dimensions', value: '80 × 22 × 180 cm' },
      { label: 'Mounting', value: 'Brass cleats included' }
    ]
  }
];

const CATEGORIES = [
  { id: 'rattan-seating', name: 'Rattan Seating', desc: 'Hand-woven armchairs, dining chairs, lounges', image: IMG('cat_rattan_seating'), count: 18 },
  { id: 'wooden-tables', name: 'Solid Wood Tables', desc: 'Live-edge, dining, and coffee tables', image: IMG('cat_wooden_tables'), count: 14 },
  { id: 'woven-storage', name: 'Cane & Rattan Storage', desc: 'Sideboards, shelves, cabinets with woven panels', image: IMG('cat_woven_storage'), count: 11 },
  { id: 'rattan-beds', name: 'Rattan Beds', desc: 'Oak frames with woven headboards', image: IMG('cat_rattan_beds'), count: 6 },
  { id: 'lighting', name: 'Woven Lighting', desc: 'Hand-woven pendants and brass+rattan lamps', image: IMG('cat_lighting'), count: 9 },
  { id: 'hall-console', name: 'Hall & Console', desc: 'Slim consoles, mirrors, vanity pieces', image: IMG('cat_hall_console'), count: 8 }
];

const FILTER_TABS = [
  { id: 'all', label: 'All' },
  { id: 'rattan-seating', label: 'Rattan Seating' },
  { id: 'wooden-tables', label: 'Wooden Tables' },
  { id: 'woven-storage', label: 'Woven Storage' },
  { id: 'rattan-beds', label: 'Rattan Beds' },
  { id: 'lighting', label: 'Lighting' },
  { id: 'hall-console', label: 'Hall & Console' }
];

const MARQUEE_ITEMS = [
  '100% Hand-Woven', 'Solid Oak, Walnut & Ash', 'Natural Rattan & Willow',
  'Free Delivery', '2-Year Warranty', '14-Day Returns', 'Made By Hand', 'No MDF · No Plastic'
];

const BENEFITS = [
  { title: 'Made by hand', text: 'Every piece is woven, sanded, and finished by a single craftsperson in our workshop.' },
  { title: 'Free delivery', text: 'Across the country in 3–7 days. We carry it to the room of your choice and unpack it.' },
  { title: '2-year warranty', text: 'Anything that fails because of how we built it — we repair or replace it, free.' },
  { title: '14-day returns', text: 'If a piece doesn\'t fit your space, we collect it and refund you within 5 working days.' }
];

const GALLERY_IMAGES = [IMG('gallery1'), IMG('gallery2'), IMG('gallery3'), IMG('gallery4'), IMG('gallery5'), IMG('gallery6'), IMG('gallery7'), IMG('gallery8')];

const TESTIMONIALS = [
  { name: 'Anna K.', city: 'Dublin', initial: 'A', rating: 5, text: 'I ordered the WillowCrest armchair for a reading corner and it arrived fully assembled in a wooden crate. The weave is flawless and the cushion is the kind you sink into. It\'s the most beautiful piece in our home now.' },
  { name: 'Michael R.', city: 'Carlow', initial: 'M', rating: 5, text: 'The Harvest oak table is the first piece of furniture I\'ve bought that I expect to outlive me. The breadboard ends, the pegs, the smell of the oil-wax finish — it\'s the kind of work you can\'t fake. Delivery was on the day promised.' },
  { name: 'Sarah O.', city: 'Dublin 15', initial: 'S', rating: 5, text: 'Lumen is the cane-front sideboard I\'d been hunting for for two years. Real cane, real walnut, real brass. The shadows the cane throws in the afternoon sun are unreal. Thank you for making honest things.' }
];

/* ============================================================ Helpers ============================================================ */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);
const el = (tag, props = {}, ...children) => {
  const n = document.createElement(tag);
  Object.entries(props).forEach(([k, v]) => {
    if (k === 'class') n.className = v;
    else if (k === 'html') n.innerHTML = v;
    else if (k === 'text') n.textContent = v;
    else if (k.startsWith('on') && typeof v === 'function') n.addEventListener(k.slice(2).toLowerCase(), v);
    else if (k === 'dataset') Object.entries(v).forEach(([dk, dv]) => n.dataset[dk] = dv);
    else if (v !== null && v !== undefined) n.setAttribute(k, v);
  });
  children.forEach((c) => {
    if (c === null || c === undefined) return;
    if (typeof c === 'string' || typeof c === 'number') n.appendChild(document.createTextNode(String(c)));
    else n.appendChild(c);
  });
  return n;
};
const fmt = (n) => `€${n}`;

function starsSVG(rating) {
  return Array.from({ length: 5 }, (_, i) => {
    const filled = i < Math.round(rating);
    return `<svg width="16" height="16" viewBox="0 0 24 24" fill="${filled ? 'var(--gold)' : 'transparent'}" stroke="${filled ? 'var(--gold)' : 'var(--wood-700)'}" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
  }).join('');
}

/* ============================================================ Cart ============================================================ */
const CART_KEY = 'ww-cart';
let cart = loadCart();

function loadCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch { return []; }
}
function saveCart() { localStorage.setItem(CART_KEY, JSON.stringify(cart)); }

function cartTotalItems() { return cart.reduce((s, i) => s + i.quantity, 0); }
function cartTotalPrice() { return cart.reduce((s, i) => s + i.product.price * i.quantity, 0); }

function addToCart(product, color, qty = 1) {
  const idx = cart.findIndex(i => i.product.id === product.id && i.color === color);
  if (idx >= 0) cart[idx].quantity += qty;
  else cart.push({ product, color, quantity: qty });
  saveCart();
  renderCartCount();
  openCart();
  showToast(`Added ${product.name} (${color})`);
}

function removeFromCart(productId, color) {
  cart = cart.filter(i => !(i.product.id === productId && i.color === color));
  saveCart();
  renderCartCount();
  renderCartItems();
}

function updateQty(productId, color, qty) {
  const item = cart.find(i => i.product.id === productId && i.color === color);
  if (!item) return;
  item.quantity = Math.max(1, qty);
  if (item.quantity <= 0) removeFromCart(productId, color);
  saveCart();
  renderCartCount();
  renderCartItems();
}

function renderCartCount() {
  const count = cartTotalItems();
  const badge = $('#cartCount');
  if (count > 0) { badge.hidden = false; badge.textContent = count; }
  else { badge.hidden = true; }
}

function renderCartItems() {
  const wrap = $('#cartItems');
  const footer = $('#cartFooter');
  const sub = $('#cartSubtitle');

  if (cart.length === 0) {
    wrap.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
        </div>
        <div class="cart-empty-title">Your cart is empty</div>
        <p class="cart-empty-text">Add a piece from the catalog to start your order.</p>
        <button id="browseCatalogBtn" class="btn btn-outline">Browse the catalog</button>
      </div>`;
    footer.hidden = true;
    sub.textContent = 'Empty';
    $('#browseCatalogBtn').addEventListener('click', () => { closeCart(); document.querySelector('#catalog').scrollIntoView({ behavior: 'smooth' }); });
    return;
  }

  wrap.innerHTML = '';
  cart.forEach((item) => {
    const line = el('div', { class: 'cart-line' });
    line.appendChild(el('img', { src: item.product.image, alt: item.product.name, class: 'cart-line-img' }));
    const info = el('div', { class: 'cart-line-info' });
    info.appendChild(el('div', { class: 'cart-line-name', text: item.product.name }));
    const colorRow = el('div', { class: 'cart-line-color' });
    colorRow.appendChild(el('span', { class: 'color-dot', style: `background:${item.product.colors.find(c => c.name === item.color)?.hex || 'var(--wood-600)'}; width:14px; height:14px; border-radius:50%; border:1px solid var(--wood-700); display:inline-block;` }));
    colorRow.appendChild(el('span', { text: item.color }));
    info.appendChild(colorRow);

    const bottom = el('div', { class: 'cart-line-bottom' });
    const qtyWrap = el('div', { class: 'qty' });
    qtyWrap.appendChild(el('button', { class: 'qty-btn', 'aria-label': 'Decrease', onclick: () => updateQty(item.product.id, item.color, item.quantity - 1) },
      el('svg', { width: '14', height: '14', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', stroke_width: '2', html: '<line x1="5" y1="12" x2="19" y2="12"/>' })));
    qtyWrap.appendChild(el('span', { class: 'qty-val', text: String(item.quantity) }));
    qtyWrap.appendChild(el('button', { class: 'qty-btn', 'aria-label': 'Increase', onclick: () => updateQty(item.product.id, item.color, item.quantity + 1) },
      el('svg', { width: '14', height: '14', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', stroke_width: '2', html: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>' })));
    bottom.appendChild(qtyWrap);
    bottom.appendChild(el('div', { class: 'cart-line-price', text: fmt(item.product.price * item.quantity) }));
    info.appendChild(bottom);

    line.appendChild(info);
    line.appendChild(el('button', { class: 'cart-line-remove', 'aria-label': 'Remove', onclick: () => removeFromCart(item.product.id, item.color) },
      el('svg', { width: '16', height: '16', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', stroke_width: '2', html: '<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>' })));
    wrap.appendChild(line);
  });

  footer.hidden = false;
  sub.textContent = `${cartTotalItems()} items · ${fmt(cartTotalPrice())}`;
  $('#cartTotal').textContent = fmt(cartTotalPrice());
}

function openCart() {
  $('#cartOverlay').hidden = false;
  requestAnimationFrame(() => $('#cartOverlay').classList.add('open'));
  $('#cartDrawer').classList.add('open');
  $('#cartDrawer').setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  renderCartItems();
}
function closeCart() {
  $('#cartOverlay').classList.remove('open');
  $('#cartDrawer').classList.remove('open');
  $('#cartDrawer').setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  setTimeout(() => { $('#cartOverlay').hidden = true; }, 300);
}

/* ============================================================ Quick View ============================================================ */
let qvProduct = null;
let qvColor = '';

function openQuickView(product) {
  qvProduct = product;
  qvColor = product.defaultColor;
  $('#quickViewImg').src = product.image;
  $('#quickViewImg').alt = product.name;
  $('#quickViewName').textContent = product.name;
  $('#quickViewMeta').textContent = `${product.rating} · ${product.reviews} reviews`;
  $('#quickViewStars').innerHTML = starsSVG(product.rating);
  $('#quickViewStock').textContent = product.inStock ? 'In stock' : 'Made to order · 7–10 days';
  $('#quickViewPrice').textContent = fmt(product.price);
  $('#quickViewOldPrice').textContent = product.oldPrice ? fmt(product.oldPrice) : '';
  $('#quickViewOldPrice').style.display = product.oldPrice ? 'inline' : 'none';
  $('#quickViewDesc').textContent = product.description;
  $('#quickViewColor').textContent = qvColor;

  // Badges
  const badges = $('#quickViewBadges');
  badges.innerHTML = '';
  if (product.badge === 'new') badges.appendChild(el('span', { class: 'badge-new', text: 'NEW' }));
  if (product.badge === 'sale' && product.oldPrice) {
    const pct = Math.round((1 - product.price / product.oldPrice) * 100);
    badges.appendChild(el('span', { class: 'badge-discount', text: `-${pct}%` }));
  }

  // Colors
  const colorsWrap = $('#quickViewColors');
  colorsWrap.innerHTML = '';
  product.colors.forEach((c) => {
    const s = el('button', {
      class: `swatch ${c.name === qvColor ? 'active' : ''}`,
      title: c.name, 'aria-label': c.name,
      style: `background:${c.hex}`,
      onclick: () => {
        qvColor = c.name;
        $('#quickViewColor').textContent = qvColor;
        colorsWrap.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
        s.classList.add('active');
      }
    });
    colorsWrap.appendChild(s);
  });

  // Specs
  const specs = $('#quickViewSpecs');
  specs.innerHTML = '';
  product.specs.forEach((s) => {
    specs.appendChild(el('div', {},
      el('div', { class: 'spec-label', text: s.label }),
      el('div', { class: 'spec-value', text: s.value })
    ));
  });

  // Add to cart button
  $('#quickViewAddBtn').textContent = `Add to cart · ${fmt(product.price)}`;
  $('#quickViewAddBtn').onclick = () => { addToCart(product, qvColor, 1); closeQuickView(); };

  $('#quickViewOverlay').hidden = false;
  requestAnimationFrame(() => $('#quickViewOverlay').classList.add('open'));
  document.body.style.overflow = 'hidden';
}
function closeQuickView() {
  $('#quickViewOverlay').classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => { $('#quickViewOverlay').hidden = true; }, 300);
}

/* ============================================================ Render: Categories ============================================================ */
function renderCategories() {
  const grid = $('#categoriesGrid');
  CATEGORIES.forEach((cat, i) => {
    const card = el('a', { href: '#catalog', class: `category-card reveal reveal-delay-${(i % 4) + 1}` });
    card.appendChild(el('img', { src: cat.image, alt: cat.name, class: 'category-img', loading: 'lazy' }));
    card.appendChild(el('div', { class: 'category-overlay' }));
    const content = el('div', { class: 'category-content' });
    content.appendChild(el('h3', { class: 'category-name', text: cat.name }));
    content.appendChild(el('p', { class: 'category-desc', text: cat.desc }));
    const meta = el('div', { class: 'category-meta' });
    meta.appendChild(el('span', { text: `${cat.count} pieces` }));
    meta.appendChild(el('svg', { width: '14', height: '14', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', stroke_width: '2', html: '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>' }));
    content.appendChild(meta);
    card.appendChild(content);
    grid.appendChild(card);
  });
}

/* ============================================================ Render: Benefits ============================================================ */
function renderBenefits() {
  const icons = [
    '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
    '<rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',
    '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    '<polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>'
  ];
  const grid = $('#benefitsGrid');
  BENEFITS.forEach((b, i) => {
    const card = el('div', { class: `benefit-card reveal reveal-delay-${i + 1}` });
    card.appendChild(el('div', { class: 'benefit-icon', html: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${icons[i]}</svg>` }));
    card.appendChild(el('h3', { class: 'benefit-title', text: b.title }));
    card.appendChild(el('p', { class: 'benefit-text', text: b.text }));
    grid.appendChild(card);
  });
}

/* ============================================================ Render: Marquee ============================================================ */
function renderMarquee() {
  const track = $('#marqueeTrack');
  const itemHTML = (label) => `
    <div class="marquee-item">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
      <span>${label}</span>
      <span class="dot">•</span>
    </div>`;
  track.innerHTML = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map(itemHTML).join('');
}

/* ============================================================ Render: Filter Tabs ============================================================ */
let activeFilter = 'all';
function renderFilterTabs() {
  const wrap = $('#filterTabs');
  FILTER_TABS.forEach((t) => {
    const btn = el('button', {
      class: `filter-tab ${t.id === activeFilter ? 'active' : ''}`,
      text: t.label,
      onclick: () => {
        activeFilter = t.id;
        wrap.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProducts();
      }
    });
    wrap.appendChild(btn);
  });
}

/* ============================================================ Render: Products ============================================================ */
function productCard(product, index) {
  const card = el('div', { class: `product-card reveal reveal-delay-${(index % 4) + 1}` });

  // Image wrap
  const imgWrap = el('div', { class: 'product-img-wrap' });
  imgWrap.appendChild(el('img', { src: product.image, alt: product.name, class: 'product-img', loading: 'lazy' }));

  const badges = el('div', { class: 'product-badges' });
  if (product.badge === 'new') badges.appendChild(el('span', { class: 'badge-new', text: 'NEW' }));
  if (product.badge === 'sale' && product.oldPrice) {
    const pct = Math.round((1 - product.price / product.oldPrice) * 100);
    badges.appendChild(el('span', { class: 'badge-discount', text: `-${pct}%` }));
  }
  if (product.badge === 'bestseller') badges.appendChild(el('span', { class: 'badge-bestseller', text: 'BESTSELLER' }));
  imgWrap.appendChild(badges);

  imgWrap.appendChild(el('button', { class: 'quick-view-btn', 'aria-label': 'Quick view', onclick: () => openQuickView(product) },
    el('svg', { width: '20', height: '20', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', stroke_width: '2', html: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>' })));

  if (!product.inStock) imgWrap.appendChild(el('div', { class: 'badge-out', text: 'Made to order' }));
  card.appendChild(imgWrap);

  // Body
  const body = el('div', { class: 'product-body' });
  const rating = el('div', { class: 'product-rating' });
  rating.appendChild(el('span', { class: 'stars', html: starsSVG(product.rating) }));
  rating.appendChild(el('span', { text: `(${product.reviews})` }));
  body.appendChild(rating);

  body.appendChild(el('h3', { class: 'product-name', text: product.name }));
  body.appendChild(el('p', { class: 'product-short', text: product.short }));

  const colors = el('div', { class: 'product-colors' });
  product.colors.forEach((c) => colors.appendChild(el('span', { class: 'color-dot', title: c.name, style: `background:${c.hex}` })));
  body.appendChild(colors);

  const bottom = el('div', { class: 'product-bottom' });
  const priceWrap = el('div', { class: 'product-price-wrap' });
  priceWrap.appendChild(el('span', { class: 'price', text: fmt(product.price) }));
  if (product.oldPrice) priceWrap.appendChild(el('span', { class: 'price-old', text: fmt(product.oldPrice) }));
  bottom.appendChild(priceWrap);
  bottom.appendChild(el('button', { class: 'add-to-cart', onclick: () => addToCart(product, product.defaultColor, 1) },
    el('svg', { width: '14', height: '14', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', stroke_width: '2', html: '<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>' }),
    el('span', { text: 'Add to cart' })));
  body.appendChild(bottom);
  card.appendChild(body);
  return card;
}

function renderProducts() {
  const grid = $('#productsGrid');
  grid.innerHTML = '';
  const filtered = activeFilter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === activeFilter);
  filtered.forEach((p, i) => grid.appendChild(productCard(p, i)));
  observeReveals();
}

function renderBestsellers() {
  const grid = $('#bestsellersGrid');
  let best = PRODUCTS.filter(p => p.badge === 'bestseller').slice(0, 4);
  if (best.length < 4) best = best.concat(PRODUCTS.filter(p => p.badge !== 'bestseller').slice(0, 4 - best.length));
  grid.innerHTML = '';
  best.forEach((p, i) => grid.appendChild(productCard(p, i)));
  observeReveals();
}

/* ============================================================ Render: Gallery ============================================================ */
function renderGallery() {
  const grid = $('#galleryGrid');
  GALLERY_IMAGES.forEach((src, i) => {
    const item = el('button', {
      class: `gallery-item reveal reveal-delay-${(i % 6) + 1} ${i === 0 ? 'feature' : ''}`,
      'aria-label': `Open image ${i + 1}`,
      onclick: () => openLightbox(i)
    });
    item.appendChild(el('img', { src, alt: `Interior ${i + 1}`, loading: 'lazy' }));
    const overlay = el('div', { class: 'gallery-overlay' });
    overlay.appendChild(el('div', { class: 'gallery-eye', html: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>' }));
    item.appendChild(overlay);
    grid.appendChild(item);
  });
  observeReveals();
}

/* ============================================================ Lightbox ============================================================ */
let lightboxIdx = 0;
function openLightbox(i) {
  lightboxIdx = i;
  updateLightbox();
  $('#lightbox').hidden = false;
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  $('#lightbox').hidden = true;
  document.body.style.overflow = '';
}
function updateLightbox() {
  $('#lightboxImg').src = GALLERY_IMAGES[lightboxIdx];
  $('#lightboxImg').alt = `Interior ${lightboxIdx + 1}`;
  $('#lightboxCount').textContent = `${lightboxIdx + 1} / ${GALLERY_IMAGES.length}`;
}
function lightboxNext() { lightboxIdx = (lightboxIdx + 1) % GALLERY_IMAGES.length; updateLightbox(); }
function lightboxPrev() { lightboxIdx = (lightboxIdx - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length; updateLightbox(); }

/* ============================================================ Testimonials ============================================================ */
function renderTestimonials() {
  const grid = $('#testimonialsGrid');
  TESTIMONIALS.forEach((t, i) => {
    const card = el('article', { class: `testimonial-card reveal reveal-delay-${i + 1}` });
    card.appendChild(el('div', { class: 'testimonial-quote', html: '<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/></svg>' }));
    card.appendChild(el('div', { class: 'stars', html: starsSVG(t.rating) }));
    card.appendChild(el('blockquote', { class: 'testimonial-text', text: `"${t.text}"` }));
    const foot = el('footer', { class: 'testimonial-foot' });
    foot.appendChild(el('div', { class: 'testimonial-avatar', text: t.initial }));
    const info = el('div');
    info.appendChild(el('div', { class: 'testimonial-name', text: t.name }));
    info.appendChild(el('div', { class: 'testimonial-city', text: t.city }));
    foot.appendChild(info);
    card.appendChild(foot);
    grid.appendChild(card);
  });
  observeReveals();
}

/* ============================================================ Scroll Reveal ============================================================ */
let revealObserver;
function observeReveals() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          revealObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -80px 0px' });
  }
  $$('.reveal:not(.revealed)').forEach((node) => revealObserver.observe(node));
}

/* ============================================================ Toast ============================================================ */
let toastTimer;
function showToast(text) {
  const t = $('#toast');
  $('#toastText').textContent = text;
  t.hidden = false;
  requestAnimationFrame(() => t.classList.add('show'));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    t.classList.remove('show');
    setTimeout(() => { t.hidden = true; }, 300);
  }, 2500);
}

/* ============================================================ Init ============================================================ */
function init() {
  // Render all sections
  renderMarquee();
  renderCategories();
  renderBenefits();
  renderFilterTabs();
  renderProducts();
  renderBestsellers();
  renderGallery();
  renderTestimonials();

  // Initial cart count
  renderCartCount();

  // Header scroll behaviour
  const header = $('#header');
  const onScroll = () => { header.classList.toggle('scrolled', window.scrollY > 30); };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu
  const menu = $('#mobileMenu');
  $('#menuBtn').addEventListener('click', () => { menu.hidden = false; document.body.style.overflow = 'hidden'; });
  $('#closeMenuBtn').addEventListener('click', () => { menu.hidden = true; document.body.style.overflow = ''; });
  $$('.mobile-link').forEach((l) => l.addEventListener('click', () => { menu.hidden = true; document.body.style.overflow = ''; }));

  // Cart
  $('#cartBtn').addEventListener('click', openCart);
  $('#closeCartBtn').addEventListener('click', closeCart);
  $('#cartOverlay').addEventListener('click', closeCart);
  $('#checkoutBtn').addEventListener('click', () => alert('Demo: this is a mock checkout. A real payment provider is not connected.'));

  // Quick view
  $('#quickViewClose').addEventListener('click', closeQuickView);
  $('#quickViewOverlay').addEventListener('click', (e) => { if (e.target.id === 'quickViewOverlay') closeQuickView(); });

  // Lightbox
  $('#lightboxClose').addEventListener('click', closeLightbox);
  $('#lightboxPrev').addEventListener('click', lightboxPrev);
  $('#lightboxNext').addEventListener('click', lightboxNext);
  $('#lightbox').addEventListener('click', (e) => { if (e.target.id === 'lightbox') closeLightbox(); });

  // Keyboard
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (!$('#quickViewOverlay').hidden) closeQuickView();
      else if (!$('#lightbox').hidden) closeLightbox();
      else if ($('#cartDrawer').classList.contains('open')) closeCart();
      else if (!$('#mobileMenu').hidden) { $('#mobileMenu').hidden = true; document.body.style.overflow = ''; }
    }
    if (!$('#lightbox').hidden) {
      if (e.key === 'ArrowRight') lightboxNext();
      if (e.key === 'ArrowLeft') lightboxPrev();
    }
  });

  // Back to top
  $('#backToTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Newsletter
  $('#newsletterForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = $('#newsletterEmail').value;
    if (!email.includes('@')) return;
    $('#newsletterBtnText').textContent = 'Done';
    $('#newsletterBtnIcon').innerHTML = '<polyline points="20 6 9 17 4 12"/>';
    $('#newsletterMsg').hidden = false;
    $('#newsletterMsg').textContent = "Thank you! Check your inbox — we've sent a confirmation email.";
    setTimeout(() => {
      $('#newsletterEmail').value = '';
      $('#newsletterBtnText').textContent = 'Subscribe';
      $('#newsletterBtnIcon').innerHTML = '<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>';
      $('#newsletterMsg').hidden = true;
    }, 4000);
  });

  // First reveal pass for already-visible elements
  observeReveals();
}

document.addEventListener('DOMContentLoaded', init);
