import SvgSprite from '@/assets/sprite/gen/icon-sprite.svg';

export const TEXT_CLASS_PREFIX = 'text-';

export default defineComponent({
    name: 'Icon',
    props: {
        icon: {
            type: String,
            default: '',
            required: true,
        },
        width: {
            type: Number,
            default: 20,
            required: false,
        },
        height: {
            type: Number,
            default: 20,
            required: false,
        },
        size: {
            type: String, // sm, md, lg.
            default: 'md',
        },
        // Could use tailwind color classes
        color: {
            type: String,
            default: '',
        },
        hoverColor: {
            type: String,
            default: '',
        },
    },
    setup(props, context) {
        const hoverState = ref(false);

        const iconPath = computed<string>(() => {
            return `${SvgSprite}#i-${props.icon}`;
        });

        // We might need this
        const iconColor = computed<string>(() => {
            const color = !hoverState.value && !props.hoverColor ? props.color : props.hoverColor;
            return `${color}`;
        });

        const setHover = (value: boolean) => {
            hoverState.value = value;
        };

        return {
            hoverState,
            iconPath,
            iconColor,
            setHover,
        };
    },
});

// export default Icon;
