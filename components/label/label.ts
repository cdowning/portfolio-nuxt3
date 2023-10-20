export default defineComponent({
    name: 'Label',
    // isRequired?, slot for icon/tooltip help
    props: {
        text: {
            type: String,
            default: '',
        },
        labelFor: {
            type: String,
            default: '',
        },
        isRequired: {
            type: Boolean,
            default: false,
        },
    },
    setup(props) {},
});

// export default CLabel;
