// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    pages: true,

    devServer: {
        port: 6000,
    },

    typescript: {
        shim: false,
    },

    css: [
        'assets/scss/fonts.scss',
        'assets/scss/transitions.scss',
        'assets/scss/main.scss',
    ],

    components: [{ path: '~/components', extensions: ['vue'] }],

    modules: [
        // https://tailwindcss.nuxtjs.org/
        '@nuxtjs/tailwindcss',

        // https://color-mode.nuxtjs.org/
        '@nuxtjs/color-mode',

        // https://storybook.nuxtjs.org/
        // '@nuxtjs/storybook',
    ],

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
});
