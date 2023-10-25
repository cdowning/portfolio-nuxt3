import type { Args, Meta, StoryObj } from '@storybook/vue3';

import Textarea from './textarea.vue';

const meta: Meta<typeof Textarea> = {
    title: 'Components/Textarea',
    component: Textarea,
    argTypes: {},
    tags: ['autodocs'],
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Primary: Story = {
    name: 'Primary Textarea', // name of story
    render: (args: Args) => ({
        components: { Textarea },
        setup() {
            return { args };
        },
        template: `<Textarea v-bind="args" />`,
    }),
    args: {
        modelValue: '',
        disabled: false,
        id: '',
    },
};
