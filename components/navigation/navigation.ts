// Type/direction: Veritcal or horizontal

const Navigation = defineComponent({
    name: 'Navigation',
    props: {
        direction: {
            type: String,
            default: 'horizontal',
        },
    },
});

export default Navigation;
