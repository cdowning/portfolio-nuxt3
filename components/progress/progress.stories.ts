// Progress-bar.stories.ts

import type { Args, Meta, StoryObj } from '@storybook/vue3';

import Progress from './progress.vue';

const meta: Meta<typeof Progress> = {
    title: 'Components/Progress Bar',
    component: Progress,
    argTypes: {
        variant: {
            options: ['', 'success', 'warning', 'info', 'error'],
            control: { type: 'select' },
        },
        value: {
            control: {
                type: 'number',
                min: 0,
                max: 100,
            },
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof Progress>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
// https://storybook.js.org/docs/vue/writing-stories/args#args-composition - argTypes
// Multiple component groups. Example: button groups

// TODO: Slots: https://storybook.js.org/docs/vue/writing-stories/args#args-can-modify-any-aspect-of-your-component
export const Primary: Story = {
    name: 'Progress Bar', // name of story
    render: (args: Args) => ({
        components: { Progress },
        setup() {
            return { args };
        },
        template: `<Progress v-bind="args">
            {{ args.default }}
        </Progress>`,
    }),
    args: {
        label: 'JavaScript',
        value: 75,
        max: 100,
        showProgress: true,
        variant: '',
    },
};
