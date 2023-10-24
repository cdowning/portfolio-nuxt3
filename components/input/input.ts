export const SHOW_PASSWORD_ICON = 'eye';
export const HIDE_PASSWORD_ICON = 'eye-off';

enum PasswordIcon {
    Show = 'eye',
    Hide = 'eye-off',
}

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
        // I had this as a slot, but due to functionality for showPassword, it would be nice to have it component basis and not sprinkled throughout various pages
        icon: {
            type: String,
            default: '',
        },
        // TODO: figure out how I can pass this through the slot
        iconPosition: {
            type: String,
            default: 'right',
        },
    },
    emits: ['update-type', 'click-icon'],
    setup(props, context) {
        // Refs
        const currentInput = ref<any>(null);
        const focused = ref(false);

        const icon = ref(props.icon);

        // global classes
        const classes = computed<object[] | string[] | {}>(() => {
            return [
                'input flex items-center mb-6 px-2',
                'input-' + props.size,
                { 'input-focused': !!focused.value },
                {
                    'flex-row-reverse':
                        hasIcon.value && props.iconPosition === 'left',
                },
                { disabled: !!props.isDisabled },
            ];
        });

        const inputClasses = computed<object[] | string[] | {}>(() => {
            return ['input-field pl-2'];
        });

        // Slot computed properties
        const hasIcon = computed<boolean>(() => {
            return !!context.slots.default;
        });

        // Methods

        // Click Event for any icon functionality
        const onIconClick = () => {
            // Is the input type="password"
            const isPassword = props.type === 'password';

            const showPassword =
                props.type === 'text' && icon.value === HIDE_PASSWORD_ICON;

            if (isPassword || showPassword) {
                togglePasswordVisibility();
            }
        };

        // Show password value / Hide password value
        const togglePasswordVisibility = () => {
            const type = props.type === 'text' ? 'password' : 'text';

            icon.value =
                type === 'text' ? PasswordIcon.Hide : PasswordIcon.Show;

            context.emit('update-type', type);
        };

        return {
            // Refs
            currentInput,
            focused,
            icon, // reactive icon ref from props.icon

            // Computed
            classes,
            inputClasses,
            hasIcon,

            // Methods
            onIconClick,
            togglePasswordVisibility,
        };
    },
});

export default Input;
