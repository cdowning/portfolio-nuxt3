/** Tab is used inside of the tabs component */

export const props = {
    url: {
        type: String,
        default: '',
    },
    selected: {
        type: Boolean,
        default: false,
    },
    // Show this tab
    isActive: {
        type: Boolean,
        default: true,
    },
};

const Tab = defineComponent({
    name: 'Tab',
    inheritAttrs: true,
    props: props,
    setup(props) {
        const isHorizontal = inject('isHorizontal');

        // Set the tab container classes in a computed property to keep it cleaner
        const classes = computed<object[] | string[] | {}>(() => {
            return [
                'tab',
                { 'tab-selected': props.selected },
                { 'tab-vertical': !isHorizontal },
            ];
        });

        return {
            classes,
            isHorizontal,
        };
    },
});

export default Tab;
