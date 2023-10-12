export default defineComponent({
    name: 'ProgressBar',
    props: {
        // should this be a slot for more flexiblity?
        label: {
            type: String,
            default: '',
        },
        isLabelOutside: {
            type: Boolean,
            default: true,
        },
        value: {
            type: Number,
            default: 0,
        },
        max: {
            type: Number,
            default: 100,
        },
        showProgress: {
            type: Boolean,
            default: false,
        },
        variant: {
            type: String,
            default: '',
        },
    },
    setup(props, context) {
        const percentage = computed<number>(() => {
            const calculation = (props.value / props.max) * 100;
            // If value is greater than 100%, than it should be 100
            return calculation > 100 ? 100 : Math.ceil(calculation);
        });

        const progressBarClasses = computed(() => {
            const width = `w-[${percentage.value}%]`; // This isn't working because it is a tailwind dynamic class. It needs to be static on the .vue page to work.

            const classes = [
                'flex justify-end items-center',
                'progress-bar pr-2',
                // width,
                props.variant ? 'progress-' + props.variant : '',
            ];
            return classes;
        });

        return {
            percentage,
            progressBarClasses,
        };
    },
});
