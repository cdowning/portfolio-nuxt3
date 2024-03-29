// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },

    pages: true,

    ssr: false,

    devServer: {
        port: 3200,
    },

    typescript: {
        shim: false,
    },

    app: {
        head: {
            htmlAttrs: {
                lang: 'en', // set to english
            },
            title: 'Caitlin Hawley - Frontend Developer',
            meta: [
                { charset: 'utf-8' },
                { name: 'robots', content: 'index,follow' },
                {
                    name: 'google-site-verification',
                    content: 'NUI54tC2OJpBCNryTbHMv7ZBIjSz6rWZLM2V8AKIFRA',
                },
                {
                    name: 'viewport',
                    content:
                        'width=device-width, initial-scale=1, viewport-fit=cover',
                },
                {
                    name: 'og:title',
                    content: 'Caitlin Hawley',
                },
                {
                    name: 'og:site_name',
                    content: 'Caitlin Hawley - Frontend Developer',
                },
                {
                    name: 'og:url',
                    content: 'http://www.caitlinhawley.com',
                },
                {
                    name: 'og:description',
                    content: 'Frontend Developer with a passion for design',
                },
                {
                    name: 'og:type',
                    content: 'website',
                },
                {
                    name: 'og:image',
                    content:
                        'http://nuxt.caitlinhawley.com/computer-bg-square.jpg',
                },
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        "Hi, I'm Caitlin. I am a frontend web developer with a passion for design.",
                },
                { name: 'format-detection', content: 'telephone=no' },
            ],
            link: [
                { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
                { rel: 'icon', type: 'image/png', href: '/favicon.png' },
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            ],
        },
    },

    css: [
        'assets/scss/fonts.scss',
        'assets/scss/transitions.scss',
        'assets/scss/main.scss',
    ],

    // https://nuxt.com/docs/guide/directory-structure/components#component-names
    components: [
        {
            path: '~/components',
            // prefix: 'c',
            extensions: ['.vue'],
        },
    ],

    modules: [
        // https://nuxt.com/modules/gtag
        'nuxt-gtag',

        // https://tailwindcss.nuxtjs.org/
        '@nuxtjs/tailwindcss',

        // https://color-mode.nuxtjs.org/
        '@nuxtjs/color-mode',

        // https://storybook.nuxtjs.org/
        // '@nuxtjs/storybook',
    ],

    gtag: {
        id: 'G-CRTHWFY5XP',
    },

    tailwindcss: {
        // Maybe move the util sass files into a /utils
        cssPath: '~/assets/scss/tailwind.scss',
        exposeConfig: true,
    },

    // https://github.com/nuxt-modules/storybook
    // storybook: {
    //     url: 'http://localhost:6006',
    //     storybookRoute: '/__storybook__',
    //     port: 6006,
    // },

    // postcss: {
    //     plugins: {
    //         tailwindcss: {},
    //         autoprefixer: {},
    //     },
    // },

    nitro: {
        prerender: {
            crawlLinks: true,
            routes: ['/sitemap.xml', '/robots.txt'],
        },
    },
});
