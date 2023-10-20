// input.stories.ts

// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Args, Meta, StoryObj } from '@storybook/vue3';

import Input from './input.vue';
import Icon from '../icon/icon.vue';

const typeOptions = [
    'text',
    'password',
    'number',
    'email',
    'tel',
    'url',
    'date',
];

const meta: Meta<typeof Input> = {
    title: 'Components/Input',
    component: Input,
    argTypes: {
        size: {
            options: ['sm', 'md'],
            control: { type: 'select' },
        },
        type: {
            options: typeOptions,
            control: { type: 'select' },
        },
        isDisabled: {
            control: { type: 'boolean' },
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
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
// https://storybook.js.org/docs/vue/writing-stories/args#args-composition - argTypes
// Multiple component groups. Example: button groups

// TODO: Slots: https://storybook.js.org/docs/vue/writing-stories/args#args-can-modify-any-aspect-of-your-component
export const Primary: Story = {
    name: 'Primary Input', // name of story
    render: (args: Args) => ({
        components: { Input },
        setup() {
            return { args };
        },
        template: `<Input v-bind="args">
            {{ args.default }}
        </Input>`,
    }),
    args: {
        size: 'md',
        type: 'text',
        placeholder: 'Enter text',
        isDisabled: false,
    },
};
export const Secondary: Story = {
    name: 'Input with Icon',
    render: (args: Args) => ({
        components: { Input, Icon },
        setup() {
            return { args };
        },
        template: `<Input v-bind="args">
            <Icon icon="search" class="pl-1" />
        </Input>`,
    }),
    args: {
        ...Primary.args,
        isRounded: false,
        iconPosition: 'right',
        isDisabled: true,
    },
};
