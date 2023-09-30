// Button.stories.ts

// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';

import Button from './button.vue';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
// Multiple component groups. Example: button groups
export const Primary: Story = {
    name: 'Primary Button', // name of story
    render: (args: any) => ({
        components: { Button },
        setup() {
            return { args };
        },
        template: `<Button v-bind="args">
            {{args.text}}
        </Button>`,
    }),
    args: {
        variant: 'primary',
        size: 'lg',
        isRounded: true,
        text: 'Hello there!',
    },
};
export const Secondary: Story = {
    name: 'Secondary Button', // name of story
    render: (args: any) => ({
        components: { Button },
        setup() {
            return { args };
        },
        template: '<Button v-bind="args">Hello</Button>',
        // template: '<Button variant="primary">Hello</Button>',
    }),
    args: {
        ...Primary.args,
        isRounded: false,
    },
};
