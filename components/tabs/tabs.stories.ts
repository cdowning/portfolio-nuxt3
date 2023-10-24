// Radio.stories.ts

import type { Args, ArgTypes, Meta, StoryObj } from '@storybook/vue3';

import Tabs from './tabs.vue';
import Tab from '../tab/tab.vue';

const alignment = ['left', 'center', 'right'];

// Hide argTypes for certain stories: https://storybook.js.org/docs/vue/essentials/controls#conditional-controls
// Control types: https://storybook.js.org/docs/react/essentials/controls#annotation
const meta: Meta<typeof Tabs> = {
    title: 'Components/Tabs',
    component: Tabs,
    argTypes: {
        alignment: {
            options: alignment,
            control: { type: 'select' },
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof Tabs>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
// https://storybook.js.org/docs/vue/writing-stories/args#args-composition - argTypes
// Multiple component groups. Example: button groups

// TODO: Slots: https://storybook.js.org/docs/vue/writing-stories/args#args-can-modify-any-aspect-of-your-component
export const Primary: Story = {
    name: 'Primary Tabs', // name of story
    render: (args: Args) => ({
        components: { Tabs, Tab },
        setup() {
            const tabs = ref([
                {
                    text: 'Tab 1 Title',
                    url: '#tab1',
                    value: 'tab1',
                    description:
                        'Tabs - direction, alignment, arrow for overflow scroll, v-model for selected tab',
                },
                {
                    text: 'Tab 2 Title',
                    url: '#tab2',
                    selected: true,
                    value: 'tab2',
                    description:
                        'Input - size, type, disabled, icon, input classes, value',
                },
                {
                    text: 'Tab 3',
                    url: '#tab3',
                    isActive: false,
                    value: 'tab3',
                },
                {
                    text: 'Tab 4',
                    url: '#tab4',
                    value: 'tab4',
                    description: 'Fantasy football sucks',
                },
            ]);

            return { tabs, args };
        },
        template: `<Tabs v-bind="args">
                    <Tab
                        v-for="(tab, index) in tabs"
                        :key="index"
                        :selected="tab.selected"
                        :is-active="tab.isActive"
                        v-model="tab.value"
                    >
                        {{ tab.text }}
                    </Tab>
                </Tabs>`,
    }),
    args: {
        isFullWidth: true,
    },
};
