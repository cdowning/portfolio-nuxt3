/** Tab are used inside of the tab component, but they don't have to be */
import { props as tabsProps } from '~/components/tabs/tabs.vue';
console.log(tabsProps);

export const props = {
    url: {
        type: String,
        default: '',
    },
    selected: {
        type: Boolean,
        default: false,
    },
    ...tabsProps.direction,
};

const Tab = defineComponent({
    name: 'Tab',
    inheritAttrs: true,
    props: props,
    setup(props, context) {
        console.log(context.attrs);

        // Set the tab container classes in a computed property to keep it cleaner
        const classes = computed<object[] | string[] | {}>(() => {
            return [
                'tab',
                { 'tab-selected': props.selected },
                { 'tab-vertical': context.attrs.direction === 'vertical' },
            ];
        });

        return {
            classes,
        };
    },
});

export default Tab;
