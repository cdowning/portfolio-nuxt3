const TimelineEvent = defineComponent({
    name: 'TimelineEvent',
    props: {
        alignment: {
            type: String,
            default: 'center',
        },
    },
    setup(props) {
        const eventClasses = computed(() => {
            return [
                'event relative',
                // Move this into a computed property with switch case
                { 'text-center': props.alignment === 'center' },
                { 'text-right': props.alignment === 'right' },
            ];
        });

        return { eventClasses };
    },
});

export default TimelineEvent;
