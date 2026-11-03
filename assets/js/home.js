function site() {
    return {
        open: false, // Mobile drawer state
        m: null,     // Desktop dropdown state
        sub: null,   // Mobile accordion sub-menu state
        q: '', domain: '', typed: '', shown: 4, o: 0,

        menu: [
            { t: 'Domain', href: 'domain.html' },
            { t: 'Hosting', items: [['Shared hosting', 'BDIX hosting with Plesk for websites', 'hosting.html?plan=shared'], ['VPS hosting', 'Configurable servers with root access', 'hosting.html?plan=vps'], ['Dedicated hosting', 'A full server for heavy workloads', 'hosting.html?plan=dedicated']] },
            { t: 'Our Services', items: [['Website design and development', 'Business sites and web apps', 'web-design.html'], ['Mobile applications', 'Android and iOS apps', '#services'], ['E-commerce', 'Online shops with local payments', 'ecommerce.html'], ['SMS marketing', 'Bulk SMS for offers and alerts', 'sms-marketing.html'], ['Facebook marketing', 'Reach local buyers with campaigns', '#services'], ['Logo design', 'A logo and basic identity kit', 'logo.html']] },
            { t: 'Product', href: 'software.html' },
            { t: 'Software', items: [['All software', 'Browse every system we build', 'software.html'], ['Amar Hisab', 'Bangla accounting software', 'https://amarhisab.com/'], ['Babsaye', 'Online inventory management', 'https://babsaye.com/'], ['bHisab', 'Billing, stock and POS', 'https://bhisab.com/'], ['T-hisab', 'Travel agency management', 'https://t-hisab.com/'], ['Student and madrasa management', 'School and madrasa records, fees, results', 'https://amarhisab.com/smsoft/']] },
            { t: 'More', right: 1, items: [['Payment methods', 'How to pay us', 'payment.html'], ['Career', 'Join the Soft Host IT team', 'career.html'], ['Contact us', 'Talk to our team', '#contact'], ['About us', 'Who we are', 'about.html'], ['Terms and conditions', 'Our service terms', 'terms.html']] }
        ],

        tlds: [['.com', 1450], ['.net', 1500], ['.org', 1500], ['.xyz', 300]],

        /* Floating tags - brand colors */
        floaters: [
            { l: 'ERP', x: 3, y: 16, c: 'bg-brand-blue/10 text-brand-blue border-brand-blue/20', dot: 'bg-brand-blue', r: '-rotate-6', d: 0, dur: 16 },
            { l: 'E-commerce', x: 84, y: 7, c: 'bg-brand-orange/10 text-brand-orange border-brand-orange/20', dot: 'bg-brand-orange', r: 'rotate-3', d: 2.5, dur: 18 },
            { l: 'Travel', x: 2, y: 44, c: 'bg-brand-cyan/10 text-brand-cyan border-brand-cyan/20', dot: 'bg-brand-cyan', r: 'rotate-6', d: 5, dur: 15 },
            { l: 'Bricks', x: 88, y: 33, c: 'bg-brand-blue/10 text-brand-blue border-brand-blue/20', dot: 'bg-brand-blue', r: '-rotate-3', d: 1, dur: 17 },
            { l: 'POS', x: 91, y: 66, c: 'bg-brand-orange/10 text-brand-orange border-brand-orange/20', dot: 'bg-brand-orange', r: 'rotate-6', d: 6, dur: 19 },
            { l: 'Accounting', x: 5, y: 76, c: 'bg-brand-cyan/10 text-brand-cyan border-brand-cyan/20', dot: 'bg-brand-cyan', r: '-rotate-6', d: 1.5, dur: 16 },
            { l: 'SMS', x: 31, y: 92, c: 'bg-brand-blue/10 text-brand-blue border-brand-blue/20', dot: 'bg-brand-blue', r: 'rotate-3', d: 4.5, dur: 15 },
            { l: 'Android', x: 70, y: 94, c: 'bg-brand-orange/10 text-brand-orange border-brand-orange/20', dot: 'bg-brand-orange', r: '-rotate-3', d: 2, dur: 18 },
            { l: 'Domain', x: 78, y: 78, c: 'bg-brand-cyan/10 text-brand-cyan border-brand-cyan/20', dot: 'bg-brand-cyan', r: 'rotate-6', d: 0.5, dur: 15 },
            { l: 'React', x: 78, y: 58, c: 'bg-brand-blue/10 text-brand-blue border-brand-blue/20', dot: 'bg-brand-blue', r: 'rotate-6', d: 2, dur: 15 },
            { l: 'Inventory', x: 12, y: 60, c: 'bg-brand-orange/10 text-brand-orange border-brand-orange/20', dot: 'bg-brand-orange', r: '-rotate-3', d: 7, dur: 16 },
            { l: 'Laravel', x: 60, y: 5, c: 'bg-brand-cyan/10 text-brand-cyan border-brand-cyan/20', dot: 'bg-brand-cyan', r: '-rotate-6', d: 3, dur: 14 },
            { l: 'Plesk', x: 93, y: 50, c: 'bg-brand-blue/10 text-brand-blue border-brand-blue/20', dot: 'bg-brand-blue', r: 'rotate-3', d: 4, dur: 17 },
            { l: 'PHP', x: 38, y: 3, c: 'bg-brand-orange/10 text-brand-orange border-brand-orange/20', dot: 'bg-brand-orange', r: 'rotate-6', d: 6.5, dur: 16 }
        ],

        stats: [
            { n: '300', sym: '+', l: 'Businesses served across Bangladesh' },
            { n: '99.9', sym: '%', l: 'Uptime guarantee on every plan' },
            { n: '12', sym: 'yrs', l: 'Building websites, apps and software' },
            { n: '24/7', sym: '', l: 'Local support in Bangla and English' }
        ],

        guarantees: ['99.9% uptime SLA', 'Free migration', 'Bangla & English support', '7-day money-back'],

        words: ['websites in PHP and Laravel.', 'Android and iOS apps.', 'ERP and accounting software.', 'fast hosting on Linux VPS.'],

        ic: { code: 'M8 6 3 12l5 6M16 6l5 6-5 6', cube: 'M12 3 4 7v10l8 4 8-4V7l-8-4Zm0 0v18M4 7l8 4 8-4', globe: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM3 12h18M12 3c2.5 2.5 3.8 5.6 3.8 9S14.5 18.5 12 21c-2.5-2.5-3.8-5.6-3.8-9S9.5 5.5 12 3Z', phone: 'M7 3h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm3 15h4', cart: 'M3 4h2l2.4 10.2a2 2 0 0 0 2 1.6h7.4a2 2 0 0 0 2-1.6L20 8H6M9 20.5a1 1 0 1 0 0-.02M17 20.5a1 1 0 1 0 0-.02', chat: 'M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.9A8 8 0 1 1 21 12Z', spark: 'M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8', mega: 'M4 10v4a1 1 0 0 0 1 1h2l9 5V4L7 9H5a1 1 0 0 0-1 1Zm3 5 1 5h3' },

        search() { this.domain = (this.q || '').trim().toLowerCase().replace(/[^a-z0-9-]/g, '') },

        fl(l) { return ({'Shared hosting':'hosting.html?plan=shared','Reseller hosting':'hosting.html?plan=shared','Linux VPS':'hosting.html?plan=vps','Windows VPS':'hosting.html?plan=vps','Dedicated server':'hosting.html?plan=dedicated','Register domain':'domain.html','Transfer domain':'domain.html','.bd domain':'contact.html','Bulk SMS':'sms-marketing.html','SSL certificate':'contact.html','Logo design':'logo.html','Web development':'web-design.html','About us':'about.html','Payment method':'payment.html','Career':'career.html','Contact us':'contact.html'})[l] || '#' },

        init() {
            const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (reduce) { this.typed = this.words[0]; }
            else {
                let w = 0, c = 0, d = false;
                const tick = () => {
                    const t = this.words[w];
                    c += d ? -1 : 1;
                    this.typed = t.slice(0, c);
                    let s = d ? 25 : 55;
                    if (!d && c === t.length) { d = true; s = 1700 }
                    else if (d && c === 0) { d = false; w = (w + 1) % this.words.length; s = 320 }
                    setTimeout(tick, s);
                };
                tick();
            }
            this.$nextTick(() => { setTimeout(() => this.revealAll(), 80); });
        },

        revealAll() {
            const els = document.querySelectorAll('[data-reveal]:not(.is-in)');
            if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
                els.forEach(e => e.classList.add('is-in')); return;
            }
            const io = new IntersectionObserver((entries) => {
                entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
            }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
            els.forEach(e => io.observe(e));
        },

        /* Product tile colors - brand colors */
        products: [
            { t: 'Amar Hisab', d: 'Bangla accounting software for income, expense and small business books.', url: 'https://amarhisab.com/', c: 'bg-brand-blue' },
            { t: 'Babsaye', d: 'Online inventory management for small businesses.', url: 'https://babsaye.com/', c: 'bg-brand-orange' },
            { t: 'bHisab', d: 'Purchase, sales, stock and billing in one POS system.', url: 'https://bhisab.com/', c: 'bg-brand-cyan' },
            { t: 'T-hisab', d: 'Travel agency management for tickets, tours and accounts.', url: 'https://t-hisab.com/', c: 'bg-brand-blue' },
            { t: 'Bricks', d: 'Brickwork business software for stock, sales and dues.', url: '', c: 'bg-brand-orange' },
            { t: 'Electronics', d: 'Showroom software for mobile and electronics retailers.', url: '', c: 'bg-brand-cyan' }
        ],

        /* Service icon colors - brand colors */
        services: [
            { t: 'Website design and development', d: 'Business sites and web apps built for your brand — not from a template.', ic: 'code', ih: 'bg-brand-blue' },
            { t: 'ERP and custom software', d: 'Accounts, inventory, billing, and school or madrasa management.', ic: 'cube', ih: 'bg-brand-orange' },
            { t: 'Domain and hosting', d: '.com, .net, .org and .bd domains with BDIX-connected hosting.', ic: 'globe', ih: 'bg-brand-cyan' },
            { t: 'Android and iOS apps', d: 'Mobile apps that connect to your website or software.', ic: 'phone', ih: 'bg-brand-blue' },
            { t: 'E-commerce', d: 'Online shops with local payment gateways.', ic: 'cart', ih: 'bg-brand-orange' },
            { t: 'Bulk SMS', d: 'Offers, alerts and OTPs sent to your customers.', ic: 'chat', ih: 'bg-brand-cyan' },
            { t: 'Logo design', d: 'A logo and basic identity kit.', ic: 'spark', ih: 'bg-brand-blue' },
            { t: 'Digital marketing', d: 'Facebook marketing to reach local buyers.', ic: 'mega', ih: 'bg-brand-orange' }
        ],

        steps: [
            { t: 'Tell us about your business', d: 'Team size, services and the reports you rely on.', c: 'bg-brand-blue' },
            { t: 'See it with your workflow', d: 'A live walkthrough focused on what you actually do.', c: 'bg-brand-orange' },
            { t: 'Get a clear recommendation', d: 'The package, setup and pricing that fit.', c: 'bg-brand-cyan' }
        ],

        plans: [
            { name: 'BDIX Hosting Starter', price: 2, f: ['5 GB NVMe SSD', 'Intel 2 Core 3.8 GHz', '1 GB RAM', '10 Mbit/s internet, 100 Mbit/s BDIX', '~100 GB bandwidth', 'Managed, Plesk panel', '500 GB backup storage', 'Inode limit 300,000', 'Daily backup, last 7 days'] },
            { name: 'BDIX Hosting Advance', price: 5, hot: 1, f: ['15 GB NVMe SSD', 'Intel 2 Core 3.8 GHz', '2 GB RAM', '10 Mbit/s internet, 100 Mbit/s BDIX', '~100 GB bandwidth', 'Managed, Plesk panel', '500 GB backup storage', 'Inode limit 300,000', 'Daily backup, last 7 days'] },
            { name: 'BDIX Hosting Business', price: 10, f: ['50 GB NVMe SSD', 'Intel 2 Core 3.8 GHz', '4 GB RAM', 'Unlimited internet and BDIX', 'Unlimited bandwidth', 'Managed, Plesk panel', 'Unlimited backup storage', 'Inode limit 300,000', 'Daily backup, last 7 days'] }
        ],

        faq: [
            ['Can I pay with bKash or Nagad?', 'Yes. We accept bKash, Nagad, Rocket, bank cards and SSLCOMMERZ.'],
            ['Is my website backed up?', 'Every hosting plan includes a daily backup kept for the last seven days.'],
            ['Do you train our staff on the software?', 'Yes. We deliver in person, train your team and support you after handover.'],
            ['Can I get a custom app or ERP?', 'Yes. Tell us your workflow and we will build around it.']
        ],

        social: [['fb', 'https://facebook.com/'], ['in', 'https://linkedin.com/'], ['yt', 'https://youtube.com/'], ['wa', 'https://wa.me/8801996702370']],

        foot: [
            ['Hosting', ['Shared hosting', 'Reseller hosting', 'Linux VPS', 'Windows VPS', 'Dedicated server']],
            ['Domain', ['Register domain', 'Transfer domain', '.bd domain']],
            ['Services', ['Bulk SMS', 'SSL certificate', 'Logo design', 'Web development']],
            ['Company', ['About us', 'Payment method', 'Career', 'Contact us']]
        ]
    }
}
