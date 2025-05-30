import type { Config } from 'tailwindcss';

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            transitionProperty: {
                'rounded-and-color': 'border-radius, border-color',
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.5rem',
            },
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                fontColor: 'var(--fontColor)',
                primary: 'var(--primary)',
                secundary: 'var(--secundary)',
                accent: 'var(--accent)',
            },
            fontFamily: {
                poppins: ['Poppins', 'poppins'],
                montserrat: ['Montserrat', 'montserrat', 'arial'],
                lato: ['Lato', 'lato'],
            },
        },
    },
    safelist: ['animate-spin', 'text-primary'],
    plugins: [],
} satisfies Config;
