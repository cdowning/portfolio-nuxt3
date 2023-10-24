definePageMeta({
    // layout: 'resume',
    colorMode: 'light', // force lightmode for resume
});

export default defineComponent({
    setup() {
        const tabs = ref([
            {
                text: 'Tab 1 Title',
                url: '#tab1',
                value: 'tab1',
                description:
                    'Tabs - direction, alignment, arrow for overflow scroll, v-model for selected tab',
            },
            {
                text: 'Tab 2 Title',
                url: '#tab2',
                selected: true,
                value: 'tab2',
                description:
                    'Input - size, type, disabled, icon, input classes, value',
            },
            {
                text: 'Tab 3',
                url: '#tab3',
                isActive: false,
                value: 'tab3',
            },
            {
                text: 'Tab 4',
                url: '#tab4',
                value: 'tab4',
                description: 'Fantasy football sucks',
            },
        ]);

        const downloadResume = () => {
            // window.location.href = '/caitlin-hawley-resume.pdf';
            window.open('/caitlin-hawley-resume.pdf', '_blank');
        };

        const inputType = ref('password');

        return {
            downloadResume,
            tabs,

            inputType,
        };
    },
});
