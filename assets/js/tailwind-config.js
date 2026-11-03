tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    blue: '#1F6BA8',
                    orange: '#F4811F',
                    cyan: '#2BA6DD',
                }
            },
            fontFamily: { sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
            keyframes: { marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } }, drift: { '0%': { opacity: '0', transform: 'translate3d(0,26px,0) scale(.9)' }, '10%': { opacity: '1', transform: 'translate3d(0,0,0) scale(1)' }, '70%': { opacity: '1', transform: 'translate3d(8px,-22px,0) scale(1)' }, '85%': { opacity: '0', transform: 'translate3d(10px,-38px,0) scale(.94)' }, '100%': { opacity: '0', transform: 'translate3d(0,26px,0) scale(.9)' } }, blob: { '0%,100%': { transform: 'translate(0,0) scale(1)' }, '50%': { transform: 'translate(26px,-26px) scale(1.1)' } }, float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-6px)' } }, pulse2: { '0%,100%': { opacity: '1' }, '50%': { opacity: '.35' } } },
            animation: { marquee: 'marquee 40s linear infinite', drift: 'drift var(--dur,16s) cubic-bezier(.4,0,.2,1) infinite', blob: 'blob 24s ease-in-out infinite', float: 'float 8s ease-in-out infinite', pulse2: 'pulse2 2.2s ease-in-out infinite' }
        }
    }
}
