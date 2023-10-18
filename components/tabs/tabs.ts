/** Tabs are used as the container for the tab component */

export const props = {
    /** Determines the color of the button */
    // Horizontal or vertical
    isHorizontal: {
        type: Boolean,
        default: true,
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
};

// Passing props to nested components: https://vuejs.org/guide/components/provide-inject.html#prop-drilling
// https://vuejs.org/api/composition-api-dependency-injection.html#inject
// Provide & inject: https://zerotomastery.io/blog/tab-component-design-with-vue/
// https://learnvue.co/articles/vue-reusable-tabs-component
const Tabs = defineComponent({
    name: 'Tabs',
    props: props,
    setup(props) {
        const selectedIndex = ref(0);

        // Need special styles for vertical tabs - provide value to tab.ts
        provide('isHorizontal', props.isHorizontal);

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
                { 'flex-col': !props.isHorizontal },
            ];
        });

        return {
            // refs
            selectedIndex,

            // computed
            alignmentClass,
            classes,
        };
    },
});

export default Tabs;
