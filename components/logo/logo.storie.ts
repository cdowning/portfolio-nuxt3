import type { Args, ArgType as BaseArgType } from '@storybook/addons';

import Logo from './logo.vue';

const srcOptions = ['caitlin-hawley-light.svg'];

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Components/Logo',
    component: Logo,
    args: {
        to: '/',
        src: 'caitlin-hawley-light.svg',
        width: 144,
        height: 70,
    },
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
        to: {
            description: 'where the hyperlink should take the user',
            table: {
                type: { summary: 'text' },
                defaultValue: { summary: '/' },
            },
            control: { type: 'text' },
        },
        src: {
            description: 'image path',
            options: srcOptions,
            table: {
                type: { summary: 'text' },
                defaultValue: { summary: 'caitlin-hawley-light.svg' },
            },
            control: { type: 'select' },
        },
        width: {
            description: 'width of logo',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 155 },
            },
            control: { type: 'number' },
        },
        height: {
            description: 'height of logo',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 70 },
            },
            control: { type: 'number' },
        },
        alt: {
            description: 'Alt text for image',
            table: {
                type: { summary: 'text' },
                defaultValue: { summary: '' },
            },
            control: { type: 'text' },
        },
    },
};

const Template = (args: Args, { argTypes }: BaseArgType) => ({
    props: Object.keys(argTypes),
    components: { Logo },
    template: `<logo :to="to" :src="src" :width="width" :height="height" :alt="alt" />`,
});

export const Primary = Template.bind({});
