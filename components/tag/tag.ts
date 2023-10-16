/** Tags are a way of categorizing information */
const Tag = defineComponent({
    name: 'Tag',
    props: {
        size: {
            type: String,
            default: 'sm',
        },
        /** Determines the color of the tag */
        // secondary primary tertiary
        variant: {
            type: String,
            default: 'primary',
        },
        isDismissible: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['remove'],
    setup(props, context) {
        const hover = ref<boolean>(false);

        return { hover };
    },
});

export default Tag;
