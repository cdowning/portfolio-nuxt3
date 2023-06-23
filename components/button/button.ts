const Button = defineComponent({
    name: 'Button',
    // inheritAttrs: true,
    props: {
        type: {
            type: String,
            default: '',
        },
        // TODO: Use tailwind bg-color class
        // primary, secondary, link
        variant: {
            type: String,
            default: 'primary',
        },
        size: {
            type: String,
            default: 'md',
        },
        isFullWidth: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        outlined: {
            type: Boolean,
            default: false,
        },
        isRounded: {
            type: Boolean,
            default: true,
        },
    },
    setup(props, context) {
        const buttonClasses = computed(function () {
            return [
                'btn-' + props.size,
                { ['btn-' + props.variant]: props.variant },
                { 'has-icon': !!context.slots.icon },
                { 'w-full': !!props.isFullWidth },
                { 'btn-outlined': !!props.outlined },
                { 'rounded-lg': !!props.isRounded },
            ];
        });

        return {
            buttonClasses,
        };
    },
});

export default Button;
