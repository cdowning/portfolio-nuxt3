import type { Args, Meta, StoryObj } from '@storybook/vue3';

import Logo from './logo.vue';

const logoOptions = ['caitlin-hawley-light', 'caitlin-hawley-dark'];

const meta: Meta<typeof Logo> = {
    title: 'Components/Logo',
    component: Logo,
    argTypes: {
        src: {
            options: logoOptions,
            control: { type: 'select' },
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof Logo>;

export const Primary: Story = {
    name: 'Primary', // name of story
    render: (args: Args) => ({
        components: { Logo },
        setup() {
            return { args };
        },
        template: `<Logo v-bind="args" />`,
    }),
    args: {
        src: 'caitlin-hawley-light',
        width: 155,
        height: 70,
        alt: 'Caitlin Hawley',
    },
};
