export default defineComponent({
    props: {
        shape: {
            type: String,
            default: 'circle',
        },
        size: {
            type: String,
            default: 'md',
        },
        // If no photo, random emoji generator?
        // Or if no image, show a placeholder user photo
        src: {
            type: String,
            default: '',
        },
    },
    setup(props, context) {
        const imageSource = computed<string>(() => {
            const src = props.src
                ? props.src
                : '~/assets/images/global/female.png';
            // return !!context.slots.image || !!data.value?.image;
            return src;
        });

        return {
            imageSource,
        };
    },
});
