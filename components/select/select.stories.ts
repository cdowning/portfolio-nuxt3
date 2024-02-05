import type { Args, Meta, StoryObj } from '@storybook/vue3';

import Select from './select.vue';

// Various option use cases
const options = [
    { label: 'Vue.js', id: 1 },
    { label: 'React', id: 2 },
    { label: 'CSS', id: 3 },
    { label: 'HTML', id: 4 },
    { label: 'Java', id: 5 },
    { label: 'Python', id: 6 },
    { label: 'Node', id: 7 },
    { label: 'Angular', id: 8 },
    { label: 'SASS', id: 9 },
    { label: 'Typescript', id: 10 },
    { label: 'MDX', id: 11 },
];

const iconOptions = [
    { label: 'Vue.js', id: 1, icon: 'vue' },
    { label: 'JavaScript', id: 2, icon: 'javascript' },
    { label: 'CSS', id: 3, icon: 'css3' },
    { label: 'HTML', id: 4, icon: 'html5' },
    { label: 'Nuxt', id: 6, icon: 'nuxt' },
    { label: 'Storybook', id: 7, icon: 'storybook' },
    { label: 'Tailwind', id: 8, icon: 'tailwind' },
    { label: 'SASS', id: 9, icon: 'sass' },
    { label: 'Typescript', id: 10, icon: 'typescript' },
    { label: 'Git', id: 11, icon: 'git' },
];

const emailOptions = [
    { label: 'caitlin.hawley@quore.com', id: 1 },
    { label: 'joel.nye@quore.com', id: 2 },
    { label: 'alan.travis@quore.com', id: 3 },
    { label: 'kelly.smith@quore.com', id: 4 },
    { label: 'drew.smith@quore.com', id: 5 },
    { label: 'zach.janicello@quore.com', id: 6 },
    { label: 'greg.wiley@quore.com', id: 7 },
    { label: 'helena.laymon@quore.com', id: 8 },
    { label: 'amanda.belmonte@quore.com', id: 9 },
    { label: 'jacob.gonzalez@quore.com', id: 10 },
];

// Select all structure
const allOption = [
    {
        all: 'All',
        emails: emailOptions,
    },
];

const disabledOption = [
    ...options,
    { label: 'JavaScript', id: 12, isDisabled: true },
];

const meta: Meta<typeof Select> = {
    title: 'Components/Select',
    component: Select,
    argTypes: {
        modelValue: {
            control: { type: 'object' },
        },
        options: {
            control: { type: 'object' },
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
    name: 'Simple Dropdown',
    render: (args: Args) => ({
        components: { Select },
        setup() {
            return {
                args,
            };
        },
        template: `<div class="h-[25rem]">
        <Select v-bind="args" />
        </div>`,
    }),
    args: {
        modelValue: [options[0]],
        options: options,
        placeholder: 'Enter Language',
        disabled: false,
        multiple: false,
        searchable: false,
        trackBy: 'id',
        label: 'label',
    },
} satisfies Story;

// Multiple Select with search
export const MultipleSelect: Story = {
    render: (args: Args) => ({
        components: { Select },
        setup() {
            return {
                args,
            };
        },
        template: `<div class="h-[25rem]">
        <Select v-bind="args" />
        </div>`,
    }),
    args: {
        ...Primary.args,
        multiple: true,
        searchable: true,
    },
} satisfies Story;

export const WithIcons: Story = {
    render: (args: Args) => ({
        components: { Select },
        setup() {
            return {
                args,
            };
        },
        template: `<div class="h-[25rem]">
            <Select v-bind="args" />
        </div>`,
    }),
    args: {
        ...Primary.args,
        modelValue: [iconOptions[0]],
        options: iconOptions,
        multiple: true,
        searchable: true,
    },
} satisfies Story;
