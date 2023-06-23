export const CARD_CLASS_PREFIX = 'card-';
export const BORDER_CLASS_PREFIX = 'border-';

const Card = defineComponent({
    name: 'Card',
    props: {
        item: {
            type: Object,
            default: () => {},
        },
        borderBottom: {
            type: String,
            default: '',
        },
        size: {
            type: String,
            default: 'md',
        },
        orientation: {
            type: String,
            default: 'portrait',
        },
        showBorder: {
            type: Boolean,
            default: false,
        },
    },
    setup(props, context) {
        const cardClasses = computed(function () {
            return [
                CARD_CLASS_PREFIX + props.size,
                CARD_CLASS_PREFIX + props.orientation,
                {
                    [BORDER_CLASS_PREFIX + props.borderBottom]:
                        !!props.borderBottom,
                },
            ];
        });
        const hasImage = computed(function () {
            return !!context.slots.image;
        });

        return {
            cardClasses,
            hasImage,
        };
    },
});

export default Card;
