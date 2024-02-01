import type { Args, Meta, StoryObj } from '@storybook/vue3';

import Modal from './modal.vue';

const meta: Meta<typeof Modal> = {
    title: 'Components/Modal',
    component: Modal,
    argTypes: {
        modelValue: {
            control: 'boolean',
        },
    },
    parameters: {
        docs: {
            story: {
                inline: false,
                iframeHeight: 408,
            },
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
    name: 'Standard Modal',
    render: (args: Args) => ({
        components: { Modal },
        setup() {
            return { args };
        },
        template: `<span @click="args.modelValue = !args.modelValue" class="cursor-pointer">Open Modal</span>
            <Modal v-model="args.modelValue" v-bind="args">
                <template #body="{ contentClass }">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </template>
            </Modal>`,
    }),
    args: {
        modelValue: false,
        isDismissible: true,
        size: 'md',
    },
} satisfies Story;
