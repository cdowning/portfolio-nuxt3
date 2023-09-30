/** @type {import('tailwindcss').Config} */

const colors = require('./colors.ts');

export default {
    darkMode: 'class', // or 'media' or 'class'
    important: true,
    content: [
        `components/**/*.{vue,js}`,
        `layouts/**/*.vue`,
        `pages/**/*.vue`,
        `plugins/**/*.{js,ts}`,
        `nuxt.config.{js,ts}`,
    ],
    theme: {
        // Using this for color palette in storybook
        colors: {
            yellow: colors.yellow,
            blush: colors.blush,
            teal: colors.teal,
            rose: colors.rose,
            green: colors.green,
            cream: colors.cream,
            gray: colors.gray,
            blue: colors.blue,
            purple: colors.purple,
        },
        fontFamily: {
            // https://tailwindcss.com/docs/font-family
            poppins: ['Poppins', '-apple-system', 'sans-serif'],
            lato: [
                'Lato',
                '-apple-system',
                'BlinkMacSystemFont',
                'Segoe UI',
                'Roboto',
                'Oxygen',
                'Droid Sans',
                'Helvetica Neue',
                'sans-serif',
            ],
            // Add Lobster?
            milkshake: ['Milkshake', '-apple-system', 'serif'],
        },
        // https://type-scale.com/ - Major Third (base 16px)
        fontSize: {
            xs: '0.64rem', // 10.24px
            sm: '0.8rem', // 12.80px
            base: '1rem', // based on 16px base
            md: '1.25rem', // 20.00px
            lg: '1.563rem', // 25.00px
            xl: '1.953rem', // 31.25px
            '2xl': '2.441rem', // 20.00px
            '3xl': '3.052rem', // 48.83px
            '4xl': '3.815rem', // 61.04px
        },
        extend: {
            backgroundColor: {
                primary: 'var(--bg-primary)',
                secondary: 'var(--bg-secondary)',
                // secondary: withOpacityValue('--bg-secondary'),
            },
            textColor: {
                primary: 'var(--text-primary)',
                secondary: 'var(--text-secondary)',
            },
            borderColor: {
                card: {
                    primary: 'var(--card-border-primary)',
                    secondary: 'var(--card-border-secondary)',
                },
            },
            gridTemplateColumns: {
                // https://bryanlrobinson.com/blog/howto-css-grid-layout-to-make-a-simple-fluid-card-grid/
                'card-portrait': 'repeat(auto-fit, minmax(320px, 1fr))',
                'card-landscape': 'repeat(auto-fit, minmax(200px, 1fr))',
                'card-square': 'repeat(auto-fit, minmax(357px, 1fr))',
            },
        },
        // https://github.com/rogden/tailwind-config-viewer#themereplacements
        configViewer: {
            themeReplacements: {
                'var(--bg-primary)': '#fedc97',
            },
        },
    },
    plugins: [],
};
