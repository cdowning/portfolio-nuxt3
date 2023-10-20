import type { Preview } from '@storybook/vue3';

import { themes } from '@storybook/theming';

import '../assets/scss/tailwind.scss'; // replace with the name of your tailwind css file

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on.*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        // docs: {
        //     theme: themes.light,
        // },
        darkMode: {
            current: 'light',
            classTarget: 'html',
            darkClass: 'dark-mode',
            // stylePreview: true,
            // dark: {
            //     ...themes.dark,
            //     // brandTitle: 'My custom storybook',
            //     brandUrl: 'http://caitlinhawley.com',
            //     brandImage: 'https://caitlinhawley.com/caitlin-hawley-dark.svg',
            // },
            // // Override the default light theme
            // light: {
            //     ...themes.light,
            //     // brandTitle: 'My custom storybook',
            //     brandUrl: 'http://caitlinhawley.com',
            //     brandImage:
            //         'https://caitlinhawley.com/caitlin-hawley-light.svg',
            // },
        },
        options: {
            storySort: {
                order: ['Design System', 'Components'],
            },
        },
    },
};

export default preview;
