/** Tabs are used as the container for the tab component */

export const props = {
    /** Determines the color of the button */
    // Horizontal or vertical
    direction: {
        type: String,
        default: 'horizontal',
    },
    // left, center, right
    alignment: {
        type: String,
        default: 'left',
    },
    isFullWidth: {
        type: Boolean,
        default: false,
    },
    // Default, comfortable, compact
    density: {
        type: String,
        default: '',
    },
    horizontal: {
        type: Boolean,
        default: true,
    },
};

// Passing props to nested components: https://vuejs.org/guide/components/provide-inject.html#prop-drilling
const Tabs = defineComponent({
    name: 'Tabs',
    props: props,
    setup(props, context) {
        provide('horizontal', props.horizontal);
        provide('direction', props.direction);

        const activeTabHash = ref('');
        const tabs = ref([]);

        // Should the tabs be aligned to the left, center or right
        const alignmentClass = computed<string>(() => {
            switch (props.alignment) {
                case 'right':
                    return 'justify-end';
                case 'center':
                    return 'justify-center';
                default:
                    return 'justify-start';
            }
        });

        // Set the tab container classes in a computed property to keep it cleaner
        const classes = computed<object[] | string[] | {}>(() => {
            return [
                'tabs mb-4',
                alignmentClass.value,
                props.isFullWidth ? 'flex' : 'inline-flex',
                { 'flex-col': props.direction === 'vertical' },
            ];
        });

        return {
            activeTabHash,
            tabs,

            alignmentClass,
            classes,
        };
    },
});

export default Tabs;
