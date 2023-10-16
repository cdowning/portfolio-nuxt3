// Radio.stories.ts

import type { Args, ArgTypes, Meta, StoryObj } from '@storybook/vue3';

import Radio from './radio.vue';

// Hide argTypes for certain stories: https://storybook.js.org/docs/vue/essentials/controls#conditional-controls
// Control types: https://storybook.js.org/docs/react/essentials/controls#annotation
const meta: Meta<typeof Radio> = {
    title: 'Components/Radio',
    component: Radio,
    argTypes: {
        radios: { control: 'object', if: { arg: 'radios' } },
        id: {
            control: 'text',
            if: { arg: 'id', exists: true },
            // table: { disable: true },
        },
        name: {
            control: 'text',
            if: { arg: 'name', exists: true },
        },
        text: {
            control: 'text',
            if: { arg: 'text', exists: true },
        },
        isStacked: {
            control: 'boolean',
            if: { arg: 'isStacked', exists: true },
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof Radio>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
// https://storybook.js.org/docs/vue/writing-stories/args#args-composition - argTypes
// Multiple component groups. Example: button groups

// TODO: Slots: https://storybook.js.org/docs/vue/writing-stories/args#args-can-modify-any-aspect-of-your-component
export const Primary: Story = {
    name: 'Primary Button', // name of story
    render: (args: Args, argTypes: ArgTypes) => ({
        components: { Radio },
        setup() {
            return { args };
        },
        template: `<Radio v-bind="args">
        </Radio>`,
    }),
    args: {
        text: 'CSS',
        id: 'css-language',
        name: 'language',
        isStacked: true,
    },
};

export const Secondary: Story = {
    name: 'Group of Radios', // name of story
    render: (args: Args) => ({
        components: { Radio },
        setup() {
            return { args };
        },
        template: `
            <div v-for="(radio, index) in args.radios">
                <Radio v-model="radio.modelValue" v-bind="radio">
                </Radio>
            </div>
        `,
    }),
    args: {
        radios: [
            {
                name: 'language',
                id: 'html-language',
                text: 'HTML',
                modelValue: 'HTML',
                isStacked: true,
            },
            {
                name: 'language',
                id: 'css-language',
                text: 'CSS',
                modelValue: 'CSS',
                isStacked: true,
            },
            {
                name: 'language',
                id: 'javascript-language',
                text: 'JavaScript',
                modelValue: 'Javascript',
                isStacked: true,
            },
        ],
    },
};
