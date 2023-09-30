import type { StorybookConfig } from '@storybook-vue/nuxt';

const config: StorybookConfig = {
    stories: [
        '../components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
        '../components/**/*.stories.mdx',
        '../stories/**/*.mdx',
        '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        // {
        //     name: '@storybook/addon-postcss',
        //     options: {
        //         cssLoaderOptions: {
        //             importLoaders: 1,
        //         },
        //         postcssLoaderOptions: {
        //             implementation: require('postcss'),
        //         },
        //     },
        // },
        // {
        //     name: '@storybook/addon-styling',
        //     options: {},
        // },
    ],
    framework: {
        name: '@storybook-vue/nuxt',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
};
export default config;
