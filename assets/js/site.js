function site() {
    return {
        open: false, m: null, sub: null, active: document.body.dataset.active || '',
        q: '', domain: '', ext: 'all', err: '',

        menu: [
            { t: 'Domain', href: 'domain.html' },
            { t: 'Hosting', items: [['Shared hosting', 'BDIX hosting with Plesk for websites', 'hosting.html?plan=shared'], ['VPS hosting', 'Configurable servers with root access', 'hosting.html?plan=vps'], ['Dedicated hosting', 'A full server for heavy workloads', 'hosting.html?plan=dedicated']] },
            { t: 'Our Services', items: [['Website design and development', 'Business sites and web apps', 'web-design.html'], ['Mobile applications', 'Android and iOS apps', 'index.html#services'], ['E-commerce', 'Online shops with local payments', 'ecommerce.html'], ['SMS marketing', 'Bulk SMS for offers and alerts', 'sms-marketing.html'], ['Facebook marketing', 'Reach local buyers with campaigns', 'index.html#services'], ['Logo design', 'A logo and basic identity kit', 'logo.html']] },
            { t: 'Product', href: 'software.html' },
            { t: 'Software', items: [['All software', 'Browse every system we build', 'software.html'], ['Amar Hisab', 'Bangla accounting software', 'https://amarhisab.com/'], ['Babsaye', 'Online inventory management', 'https://babsaye.com/'], ['bHisab', 'Billing, stock and POS', 'https://bhisab.com/'], ['T-hisab', 'Travel agency management', 'https://t-hisab.com/'], ['Student and madrasa management', 'School and madrasa records, fees, results', 'https://amarhisab.com/smsoft/']] },
            { t: 'More', right: 1, items: [['Payment methods', 'How to pay us', 'payment.html'], ['Career', 'Join the Soft Host IT team', 'career.html'], ['Contact us', 'Talk to our team', 'contact.html'], ['About us', 'Who we are', 'about.html'], ['Terms and conditions', 'Our service terms', 'terms.html']] }
        ],

        /* [extension, price in BDT per year, description] */
        tlds: [
            ['.com', 1450, 'The most popular and professional extension for any kind of website.'],
            ['.net', 1500, 'Grow your network, and your business, with a .net domain.'],
            ['.org', 1500, 'Brand your site as an organization for greater good.'],
            ['.xyz', 300, "Get personal. Show off what you're all about to your visitors."]
        ],

        faq: [
            ['How long does it take to register a domain?', 'Most .com, .net, .org and .xyz domains are active within minutes of payment.'],
            ['Can I pay with bKash or Nagad?', 'Yes. We accept bKash, Nagad, Rocket, bank cards and SSLCOMMERZ.'],
            ['Can I point my domain to hosting from another company?', 'Yes. You get full DNS control, so you can point it anywhere you like.'],
            ['How do I transfer a domain to Soft Host IT?', 'Unlock the domain at your current registrar, get the transfer code, and contact us. We handle the rest.']
        ],

        social: [['fb', 'https://facebook.com/'], ['in', 'https://linkedin.com/'], ['yt', 'https://youtube.com/'], ['wa', 'https://wa.me/8801996702370']],

        foot: [
            ['Hosting', ['Shared hosting', 'Reseller hosting', 'Linux VPS', 'Windows VPS', 'Dedicated server']],
            ['Domain', ['Register domain', 'Transfer domain', '.bd domain']],
            ['Services', ['Bulk SMS', 'SSL certificate', 'Logo design', 'Web development']],
            ['Company', ['About us', 'Payment method', 'Career', 'Contact us']]
        ],

        ic: { code: 'M8 6 3 12l5 6M16 6l5 6-5 6', cube: 'M12 3 4 7v10l8 4 8-4V7l-8-4Zm0 0v18M4 7l8 4 8-4', globe: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM3 12h18M12 3c2.5 2.5 3.8 5.6 3.8 9S14.5 18.5 12 21c-2.5-2.5-3.8-5.6-3.8-9S9.5 5.5 12 3Z', phone: 'M7 3h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm3 15h4', cart: 'M3 4h2l2.4 10.2a2 2 0 0 0 2 1.6h7.4a2 2 0 0 0 2-1.6L20 8H6M9 20.5a1 1 0 1 0 0-.02M17 20.5a1 1 0 1 0 0-.02', chat: 'M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.9A8 8 0 1 1 21 12Z', spark: 'M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8', mega: 'M4 10v4a1 1 0 0 0 1 1h2l9 5V4L7 9H5a1 1 0 0 0-1 1Zm3 5 1 5h3' },

        fl(l) { return ({'Shared hosting':'hosting.html?plan=shared','Reseller hosting':'hosting.html?plan=shared','Linux VPS':'hosting.html?plan=vps','Windows VPS':'hosting.html?plan=vps','Dedicated server':'hosting.html?plan=dedicated','Register domain':'domain.html','Transfer domain':'domain.html','.bd domain':'contact.html','Bulk SMS':'sms-marketing.html','SSL certificate':'contact.html','Logo design':'logo.html','Web development':'web-design.html','About us':'about.html','Payment method':'payment.html','Career':'career.html','Contact us':'contact.html'})[l] || '#' },

        shownTlds() { return this.ext === 'all' ? this.tlds : this.tlds.filter(t => t[0] === this.ext) },

        search() {
            // keep only the name part, drop any extension the user typed
            let v = (this.q || '').trim().toLowerCase().replace(/^https?:\/\//, '').replace(/^www\./, '').split('/')[0].split('.')[0].replace(/[^a-z0-9-]/g, '');
            if (!v) { this.domain = ''; this.err = 'Please type a domain name first.'; return }
            if (v.startsWith('-') || v.endsWith('-')) { this.domain = ''; this.err = 'A domain name cannot start or end with a hyphen.'; return }
            this.err = ''; this.domain = v;
        },

        pick(e) {
            this.ext = e;
            this.$refs.dq.focus({ preventScroll: true });
            document.getElementById('search').scrollIntoView({ behavior: 'smooth' });
        },

        init() { this.$nextTick(() => { setTimeout(() => this.revealAll(), 80); }); },

        revealAll() {
            const els = document.querySelectorAll('[data-reveal]:not(.is-in)');
            if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
                els.forEach(e => e.classList.add('is-in')); return;
            }
            const io = new IntersectionObserver((entries) => {
                entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
            }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
            els.forEach(e => io.observe(e));
        }
    }
}
