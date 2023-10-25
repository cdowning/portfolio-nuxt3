const Textarea = defineComponent({
    name: 'Textarea',
    inheritAttrs: true,
    props: {
        id: {
            type: String,
            default: '',
        },
        modelValue: {
            type: String,
            default: '',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    setup(props) {
        const currentTextarea = ref<any>(null);
        const focused = ref(false);

        const textareaClasses = computed<object[] | string[] | {}>(() => {
            return ['w-full pl-2'];
        });

        return {
            currentTextarea,
            focused,

            textareaClasses,
        };
    },
});

export default Textarea;
