// Button.stories.ts

// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Args, Meta, StoryObj } from '@storybook/vue3';

import Avatar from './avatar.vue';

const svgIcons = import.meta.glob('~/assets/icons/svg/*.svg', {
    eager: true,
}) as any;

// console.log(svgIcons);

const sizes = ['sm', 'md', 'lg', 'xl'];
const shapes = ['circle', 'square'];
const photos = [
    '',
    '/assets/icons/svg/briefcase.svg',
    'https://randomuser.me/api/portraits/women/79.jpg',
    // 'https://images.unsplash.com/fDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2788&q=80', // fail test
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2788&q=80',
];
// const photos = {
//     none: '',
//     '/assets/icons/svg/briefcase.svg': svgIcons['/assets/icons/svg/briefcase.svg'].default
// }

const meta: Meta<typeof Avatar> = {
    title: 'Components/Avatar',
    component: Avatar,
    argTypes: {
        size: {
            options: sizes,
            control: { type: 'select' },
        },
        shape: {
            options: shapes,
            control: { type: 'select' },
        },
        src: {
            options: photos,
            control: { type: 'select' },
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
    name: 'Primary', // name of story
    render: (args: Args) => ({
        components: { Avatar },
        setup() {
            return { args };
        },
        template: `<Avatar v-bind="args" />`,
    }),
    args: {
        shape: 'circle',
        size: 'md',
        src: photos[3],
        usePadding: false,
    },
};
export const Secondary: Story = {
    name: 'Secondary', // name of story
    render: (args: Args) => ({
        components: { Avatar },
        setup() {
            return { args };
        },
        template: `<Avatar v-bind="args" />`,
    }),
    args: {
        ...Primary.args,
        src: photos[1],
        usePadding: true,
    },
};
