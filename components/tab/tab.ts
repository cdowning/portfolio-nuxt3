/** Tab are used inside of the tab component, but they don't have to be */
// TODO: Would love to animate tab underline

export const props = {
    url: {
        type: String,
        default: '',
    },
    selected: {
        type: String,
        default: '',
    },
};

const Tab = defineComponent({
    name: 'Tab',
    props: props,
    setup(props, context) {
        const hover = ref(false);

        return { hover };
    },
});

export default Tab;
