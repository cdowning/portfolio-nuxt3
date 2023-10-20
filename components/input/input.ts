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
        iconPosition: {
            type: String,
            default: 'left',
        },
    },
    setup(props, { slots }) {
        // Refs
        const currentInput = ref<any>(null);
        const focused = ref(false);

        // global classes
        const classes = computed<object[] | string[] | {}>(() => {
            return [
                'input flex items-center mb-6 px-4',
                'input-' + props.size,
                { 'input-focused': !!focused.value },
                { 'flex-row-reverse': iconAlignment.value === 'left' },
                { disabled: !!props.isDisabled },
            ];
        });

        const inputClasses = computed<object[] | string[] | {}>(() => {
            return ['input-field'];
        });

        const hasIcon = computed(() => {
            return !!slots.default?.length;
            // return !!slots.icon;
        });

        const iconAlignment = computed(() => {
            // If they don't have an icon, do not go any further
            if (!hasIcon.value) {
                return;
            }

            return props.iconPosition === 'left' ? 'left' : 'right';
        });

        return {
            // Refs
            currentInput,
            focused,

            // Computed
            classes,
            inputClasses,
            hasIcon,
            iconAlignment,
        };
    },
});

export default Input;
