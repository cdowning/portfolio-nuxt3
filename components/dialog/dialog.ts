export const DIALOG_CLASS_PREFIX = 'dialog-';

export default defineComponent({
    name: 'Dialog',
    props: {
        size: {
            type: String,
            default: 'md',
        },
        data: {
            type: Object,
            default: () => {},
        },
        isDismissible: {
            type: Boolean,
            default: true,
        },
    },
    emits: ['close'],
    setup(props, context) {
        const content = ref(props.data);

        const onCloseDialog = () => {
            if (props.isDismissible) {
                context.emit('close');
            }
        };

        return {
            onCloseDialog,
            // slot content - if passed through the content prop, otherwise use the name slot
            header: content.value?.header,
            details: content.value?.details,
        };
    },
});
