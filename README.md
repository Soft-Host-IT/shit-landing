# Soft Host IT website

Static site. Open `index.html` in a browser, or upload the folder to any web server.

## Structure
- `index.html` plus `domain`, `hosting`, `web-design`, `ecommerce`, `sms-marketing`, `logo`, `software`, `about`, `contact`, `payment`, `career`, `terms` pages
- `assets/css/style.css`: shared custom CSS
- `assets/js/tailwind-config.js`: Tailwind CDN theme (colours, fonts)
- `assets/js/home.js`: Alpine.js logic for the home page
- `assets/js/site.js`: Alpine.js logic shared by all other pages (menu, footer, domain search). The highlighted menu item comes from `<body data-active="...">`
- `assets/img/`: logo SVGs; `assets/logos/`: logo gallery fallbacks; `assets/pay/`: payment method icons

## Notes
- Tailwind CSS and Alpine.js load from CDNs, so pages need internet access.
- Domain search shows prices only. Connect `search()` in `assets/js/site.js` to your availability API.
- Payment and bank details are in `payment.html`.
