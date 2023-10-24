import type { Preview } from '@storybook/vue3';

import { themes } from '@storybook/theming';

import '../assets/scss/fonts.scss'; // get fonts used in app
import '../assets/scss/tailwind.scss'; // replace with the name of your tailwind css file
import '../assets/scss/main.scss'; // body/html styles for dark and light mode

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on.*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        docs: {
            theme: themes.light,
        },
        darkMode: {
            current: 'light',
            classTarget: 'html',
            darkClass: 'dark-mode',
            stylePreview: true,
            // dark: {
            //     ...themes.dark,
            //     // appContentBg: '#343230',
            //     // brandTitle: 'My custom storybook',
            //     brandUrl: 'http://caitlinhawley.com',
            //     brandImage: 'https://caitlinhawley.com/caitlin-hawley-dark.svg',
            // },
            // // Override the default light theme
            // light: {
            //     ...themes.light,
            //     appContentBg: '#fdfbf9',
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
