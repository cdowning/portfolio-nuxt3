import type { Args, Meta, StoryObj } from '@storybook/vue3';

import Label from './label.vue';

const meta: Meta<typeof Label> = {
    title: 'Components/Label',
    component: Label,
    argTypes: {
        isOptional: {
            control: { type: 'boolean' },
        },
        labelFor: {
            control: { type: 'text' },
        },
        default: {
            control: 'text',
            description: 'Slot content',
            table: {
                category: 'Slots',
                type: { summary: 'html' },
                defaultValue: { summary: 'null' },
            },
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof Label>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
// https://storybook.js.org/docs/vue/writing-stories/args#args-composition - argTypes
// Multiple component groups. Example: button groups

// TODO: Slots: https://storybook.js.org/docs/vue/writing-stories/args#args-can-modify-any-aspect-of-your-component
export const Primary: Story = {
    name: 'Primary', // name of story
    render: (args: Args) => ({
        components: { Label },
        setup() {
            return { args };
        },
        template: `<Label v-bind="args">
            {{ args.default }}
        </Label>`,
    }),
    args: {
        default: 'Hello there',
        isOptional: false,
    },
};
