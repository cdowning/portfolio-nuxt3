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
            console.log(iconAlignment.value);
            return [
                'input flex items-center mb-6 px-2',
                'input-' + props.size,
                { 'input-focused': !!focused.value },
                { 'flex-row-reverse': iconAlignment.value === 'left' },
            ];
        });

        const inputClasses = computed<object[] | string[] | {}>(() => {
            return ['input-field px-4'];
        });

        const hasIcon = computed(function () {
            return !!slots.icon;
        });

        const iconAlignment = computed(() => {
            // If they don't have an icon, do not go any further
            if (!hasIcon.value) {
                return;
            }

            console.log(props.iconPosition);

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
