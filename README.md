# WOODWAVE HOME — Handcrafted Willow, Rattan & Solid Wood Furniture

A static e-commerce storefront for handcrafted willow, rattan, and solid wood furniture.
Pure HTML + CSS + vanilla JavaScript. No frameworks, no build step, no Node.js.

## Files

```
woodshop.franya.dev/
├── index.html      # The whole page (header, hero, catalog, gallery, about, contacts, cart, quick view)
├── styles.css      # All styles (WoodWave dark walnut + gold design system)
├── script.js       # All logic (catalog data, cart, quick view, lightbox, mobile menu, scroll reveal)
├── img/            # 28 furniture photos (hero, categories, products, gallery, about)
└── README.md
```

## How to run on your Linux Mint server

You already have Docker / nginx / Apache — just point any web server at this folder.
A few ways to run it without any installation:

### Option A — Python (built into every Linux Mint)
```bash
git clone https://github.com/franya1111/woodshop.franya.dev.git
cd woodshop.franya.dev
python3 -m http.server 8080
```
Open `http://localhost:8080` in your browser.

### Option B — Apache / nginx (if you already have one running)
Copy or symlink the folder into your web root, e.g.:
```bash
sudo cp -r woodshop.franya.dev /var/www/html/
```
Then visit `http://localhost/woodshop.franya.dev/`.

### Option C — Just open the file directly
```bash
xdg-open index.html
```
(Works without a server too — but `localStorage` for the cart needs a server in some browsers.)

## Features

- 12 handcrafted rattan / willow / wood furniture products
- 6 categories (Rattan Seating, Wooden Tables, Woven Storage, Rattan Beds, Lighting, Hall & Console)
- Cart drawer with localStorage persistence (survives page reload)
- Quick view modal with color swatches and specs
- Image gallery with keyboard-navigable lightbox
- Filter tabs by category
- Mobile menu, sticky header, scroll-reveal animations
- Original woodwave.ie contact info in footer

## Contact

- **Phone:** +353 85 7614192
- **Email:** mcos2666@gmail.com
- **Workshop:** R14RY62 Athy, co. Kildare, Ireland
- **Hours:** Monday – Sunday 9:00 AM – 7:00 PM

## License

© 2026 WOODWAVE HOME. All rights reserved.
