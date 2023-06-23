// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    pages: true,

    css: [
        'assets/scss/fonts.scss',
        'assets/scss/transitions.scss',
        'assets/scss/main.scss',
    ],

    // Auto import components: https://nuxt.com/docs/guide/directory-structure/components
    // This fixes the warning regarding duplicate component names
    components: [{ path: '~/components', extensions: ['vue'] }],

    modules: [
        // '@pinia/nuxt',

        // https://i18n.nuxtjs.org/
        // '@intlify/nuxt3',

        // https://tailwindcss.nuxtjs.org/
        '@nuxtjs/tailwindcss',

        // https://vueuse.org/guide/#installation
        // '@vueuse/nuxt',

        // https://color-mode.nuxtjs.org/
        '@nuxtjs/color-mode',
    ],

    tailwindcss: {
        // Maybe move the util sass files into a /utils
        cssPath: '~/assets/scss/tailwind.scss',
        exposeConfig: true,
    },

    // https://color-mode.nuxtjs.org/#configuration
    // colorMode: {
    //     classSuffix: '-mode',
    //     preference: 'light',
    // },
});
