// input.stories.ts

// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Args, Meta, StoryObj } from '@storybook/vue3';

import Input from './input.vue';
import Icon from '../icon/icon.vue';

// import iconList from '../../composables/icon';
const icons = ['eye', 'eye-off', 'search'];

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
        icon: {
            options: icons,
            control: { type: 'select' },
        },
        iconPosition: {
            options: ['right', 'left'],
            control: { type: 'select' },
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
        template: `<Input v-bind="args" />`,
    }),
    args: {
        modelValue: '',
        size: 'md',
        type: 'text',
        placeholder: 'Placeholder',
        isDisabled: false,
        id: '',
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
           <Icon :icon="args.icon" />
        </Input>`,
    }),
    args: {
        ...Primary.args,
        icon: 'search',
        iconPosition: 'right',
        isDisabled: false,
    },
};

export const Password: Story = {
    name: 'Password Show/Hide',
    render: (args: Args) => ({
        components: { Input, Icon },
        setup() {
            const inputType = ref('password');

            return { inputType, args };
        },
        template: `<Input v-bind="args" :type="inputType" @update-type="inputType = $event">
            <template v-slot="{ icon, onClick, iconClass }">
                <Icon
                    :icon="icon"
                    @click="onClick"
                    :class="iconClass"
                />
            </template>
        </Input>`,
    }),
    args: {
        placeholder: 'Enter password',
        icon: 'eye',
        iconPosition: 'right',
        isDisabled: false,
    },
};
