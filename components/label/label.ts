const Label = defineComponent({
    name: 'Label',
    inheritAttrs: true,
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

export default Label;
