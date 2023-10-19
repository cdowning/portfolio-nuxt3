const Input = defineComponent({
    name: 'Input',
    inheritAttrs: true,
    props: {
        modelValue: {
            type: String,
        },
        size: {
            type: String,
            default: 'md',
        },
        type: {
            type: String,
            default: 'text',
        },
        id: {
            type: String,
            default: '',
        },
        isDisabled: {
            type: Boolean,
            default: false,
        },
        placeholder: {
            type: String,
            default: '',
        },
    },
    setup(props) {
        const currentInput = ref<any>(null);
        const focused = ref(false);

        // global classes
        const classes = computed<object[] | string[] | {}>(() => {
            return [
                'input mb-6',
                'input-' + props.size,
                { 'input-focused': !!focused.value },
            ];
        });

        const inputClasses = computed<object[] | string[] | {}>(() => {
            return ['input-field px-4'];
        });

        return {
            // Refs
            currentInput,
            focused,

            // Computed
            classes,
            inputClasses,
        };
    },
});

export default Input;
