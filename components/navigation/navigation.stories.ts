import type { Args, Meta, StoryObj } from '@storybook/vue3';

import Navigation from './navigation.vue';

const directionOptions = ['horizontal', 'vertical'];

const template = `<Navigation v-bind="args">
        <a class="mx-3">
            <Icon class="mx-2" icon="female" />
            About
        </a>
        <a class="mx-3">
            <Icon class="mx-2" icon="briefcase" />
            Experience
        </a>
        <a class="mx-3">
            <Icon class="mx-2" icon="envelope" />
            Contact
        </a>
    </Navigation>`;

const meta: Meta<typeof Navigation> = {
    title: 'Components/Navigation',
    component: Navigation,
    argTypes: {
        direction: {
            options: directionOptions,
            control: { type: 'select' },
        },
        default: {
            control: 'html',
            description: 'Slot content',
            table: {
                category: 'Slots',
                type: { summary: 'html' },
                defaultValue: { summary: 'null' },
            },
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Navigation>;

export default meta;

type Story = StoryObj<typeof Navigation>;

export const Primary: Story = {
    name: 'Horizontal', // name of story
    render: (args: Args) => ({
        components: { Navigation },
        setup() {
            return { args };
        },
        template: template,
    }),
    args: {
        direction: 'horizontal',
    },
};

export const Secondary: Story = {
    name: 'Vertical', // name of story
    render: (args: Args) => ({
        components: { Navigation },
        setup() {
            return { args };
        },
        template: template,
    }),
    args: {
        direction: 'vertical',
    },
};
