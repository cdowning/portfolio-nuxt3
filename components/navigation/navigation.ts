// Type/direction: Veritcal or horizontal

const Navigation = defineComponent({
    name: 'Navigation',
    props: {
        /** Direction of links */
        direction: {
            type: String,
            default: 'horizontal',
        },
    },
});

export default Navigation;
