// Generated from https://svgsprit.es/
/** Currently using https://svgsprit.es/ to generate the svg sprite */

import SvgSprite from '@/assets/sprite/gen/sprite.svg';

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
            return `${SvgSprite}#${props.icon}`;
        });

        // We might need this
        const iconColor = computed<string>(() => {
            if (!hoverState.value && !props.hoverColor) {
                return `${props.color}`;
            } else {
                return `${props.hoverColor}`;
            }
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
