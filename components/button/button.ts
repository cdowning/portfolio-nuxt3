/** Buttons are used for any CTA */
const Button = defineComponent({
    name: 'Button',
    inheritAttrs: true,
    props: {
        /** Determines the color of the button */
        variant: {
            type: String,
            default: 'primary',
        },
        /** Size of the button */
        size: {
            type: String,
            default: 'md',
        },
        /** Sets the button to width 100% */
        isFullWidth: {
            type: Boolean,
            default: false,
        },
        /** Adds disabled attribute */
        disabled: {
            type: Boolean,
            default: false,
        },
        /** Outline is buttons with no background color */
        outlined: {
            type: Boolean,
            default: false,
        },
        /** Adds border radius */
        isRounded: {
            type: Boolean,
            default: true,
        },
        useLink: {
            type: Boolean,
            default: false,
        },
    },
    setup(props, context) {
        const buttonClasses = computed(() => {
            return [
                'btn-' + props.size,
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
