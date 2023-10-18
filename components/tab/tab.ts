/** Tab are used inside of the tab component, but they don't have to be */
import { props as tabsProps } from '~/components/tabs/tabs.vue';

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
    // ...tabsProps.direction,
};

const Tab = defineComponent({
    name: 'Tab',
    inheritAttrs: true,
    props: props,
    setup(props, context) {
        const isHorizontal = inject('horizontal');
        const direction = inject('direction');
        console.log(isHorizontal, direction);

        // Set the tab container classes in a computed property to keep it cleaner
        const classes = computed<object[] | string[] | {}>(() => {
            return [
                'tab',
                { 'tab-selected': props.selected },
                { 'tab-vertical': direction === 'vertical' },
            ];
        });

        return {
            classes,
            isHorizontal,
            direction,
        };
    },
});

export default Tab;
