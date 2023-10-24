export default defineComponent({
    name: 'Label',
    props: {
        labelFor: {
            type: String,
            default: '',
        },
        isOptional: {
            type: Boolean,
            default: false,
        },
    },
    setup(props) {},
});

// export default CLabel;
