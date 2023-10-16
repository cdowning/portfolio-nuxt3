/** Radio button details here */
const Radio = defineComponent({
    name: 'Radio',
    props: {
        // v-model
        modelValue: {
            type: String,
        },
        id: {
            type: String,
            default: '',
        },
        name: {
            type: String,
            default: '',
        },
        selectedValue: {
            type: String,
            default: '',
        },
        text: {
            type: String,
            default: '',
        },
        isStacked: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['update:model-value'],
    setup(props, context) {
        const isChecked = computed<boolean>(() => {
            return props.modelValue === props.selectedValue;
        });

        const updateValue = (event: { target: HTMLInputElement }) => {
            context.emit('update:model-value', event.target.value);
        };

        return {
            isChecked,
            updateValue,
        };
    },
});

export default Radio;
