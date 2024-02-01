// export const DIALOG_CLASS_PREFIX = 'modal-';

export default defineComponent({
    name: 'Modal',
    props: {
        modelValue: {
            type: Boolean,
            default: false,
        },
        headerText: {
            type: String,
            default: '',
        },
        size: {
            type: String,
            default: 'md',
        },
        isDismissible: {
            type: Boolean,
            default: true,
        },
    },
    emits: ['update:modelValue'],
    setup(props, { emit, slots }) {
        const currentModal = ref(null);

        const hasHeader = computed<boolean>(() => {
            return !!slots.header;
        });

        const onCloseDialog = () => {
            if (props.isDismissible) {
                emit('update:modelValue', false);
            }
        };

        return {
            currentModal,

            hasHeader,

            // Methods
            onCloseDialog,
        };
    },
});
