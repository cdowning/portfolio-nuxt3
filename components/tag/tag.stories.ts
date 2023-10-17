// Button.stories.ts

// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Args, Meta, StoryObj } from '@storybook/vue3';

import Tag from './tag.vue';

const meta: Meta<typeof Tag> = {
    title: 'Components/Tag',
    component: Tag,
    argTypes: {
        remove: {
            // disable: true,
            action: 'clicked',
        },
        variant: {
            options: ['primary', 'secondary', 'tertiary'],
            control: { type: 'select' },
        },
        size: {
            options: ['sm', 'md'],
            control: { type: 'select' },
        },
        default: {
            control: 'text',
            description: 'Slot content',
            table: {
                category: 'Slots',
                type: { summary: 'text' },
                defaultValue: { summary: 'null' },
            },
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof Tag>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
// https://storybook.js.org/docs/vue/writing-stories/args#args-composition - argTypes
// Multiple component groups. Example: button groups

// TODO: Slots: https://storybook.js.org/docs/vue/writing-stories/args#args-can-modify-any-aspect-of-your-component
export const Primary: Story = {
    name: 'Single Tag',
    render: (args: Args) => ({
        components: { Tag },
        setup() {
            return { args };
        },
        template: `<Tag v-bind="args">
            {{ args.default }}
        </Tag>`,
    }),
    args: {
        default: 'JavaScript',
        variant: 'primary',
        size: 'sm',
        isDismissible: false,
    },
};

export const Secondary: Story = {
    name: 'Group of Tags',
    render: (args: Args) => ({
        components: { Tag },
        setup() {
            const tags = ref([
                {
                    text: 'tag 1',
                    show: true,
                    isDismissible: true,
                    variant: 'primary',
                },
                {
                    text: 'tag 2',
                    show: true,
                    isDismissible: true,
                    variant: 'secondary',
                },
                {
                    text: 'tag 3',
                    show: true,
                    isDismissible: true,
                    variant: 'primary',
                },
            ]);

            const visibileTags = computed(() => {
                return tags.value.filter((tag) => tag.show);
            });

            return {
                tags,
                visibileTags,
                args,
            };
        },
        template: `
            <Tag v-for="(tag, index) in visibileTags"
                :key="index"
                :is-dismissible="tag.isDismissible"
                :variant="tag.variant"
                @remove="tag.show = !tag.show"
            >
                {{ tag.text }}
            </Tag>`,
    }),
    args: {
        default: 'Hello there',
        variant: 'primary',
        size: 'sm',
        isDismissible: false,
    },
};
