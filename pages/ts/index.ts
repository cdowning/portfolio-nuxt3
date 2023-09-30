export default defineComponent({
    name: 'Index',
    setup() {
        // We only need value from the color mode object
        // TODO: Clean this up
        const { value: $colorMode } = ref(useColorMode());

        // const {
        //     $colorMode: { value },
        // } = useNuxtApp();

        // Refs
        const mobileMenu = ref<boolean>(false);
        const icon = ref<string>('menu');

        // Switch to the other theme
        const switchColorTheme = $colorMode.value === 'dark' ? 'light' : 'dark';

        const sections = {
            about: ref(null),
            experience: ref(null),
            contact: ref(null),
        } as any;

        const cards = [
            {
                isImageExternal: false,
                image: 'highlighter',
                header: 'Highlighter Effect',
                description: 'Highlighter effect with pure CSS',
                link: {
                    url: 'https://codepen.io/cdowning/pen/vYprdXz',
                    name: 'View pen',
                },
            },
            {
                isImageExternal: false,
                image: 'skeleton-loading',
                header: 'Skeleton Loading',
                description:
                    'Skeleton loading is a popular content loading feature. This skeleton loading utilizes CSS keyframes.',
                link: {
                    url: 'https://codepen.io/cdowning/pen/dEVWKb',
                    name: 'View pen',
                },
            },
            {
                image: 'loading-spinner',
                header: 'Loading Spinner',
                description: 'Loading spinner using CSS',
                link: {
                    url: 'https://codepen.io/cdowning/pen/oNpyqGK',
                    name: 'View pen',
                },
            },
        ];

        // Computed
        const colorIcon = computed<string>(() => {
            // If no theme is set in settings, defaults to 'light'
            return $colorMode.value === 'dark' ? 'sun' : 'moon';
        });
        const logoSrc = computed<string>(() => {
            return `caitlin-hawley-${$colorMode.value}`;
        });
        const mobileIcon = computed<string>(() => {
            return icon.value === 'menu' ? 'menu' : 'close';
        });

        // Methods
        const onUpdateTheme = () => {
            const color = $colorMode.value === 'dark' ? 'light' : 'dark';
            $colorMode.value = color;
        };
        // Opens the mobile menu
        const onMobileMenu = () => {
            mobileMenu.value = !mobileMenu.value;
            icon.value = icon.value === 'menu' ? 'close' : 'menu';
        };
        // scroll to section
        const scrollTo = (section: string) => {
            const selected = sections[section]?.value;

            const offset = selected.offsetTop;

            window.scroll({
                top: offset,
                left: 0,
                behavior: 'smooth',
            });
        };

        return {
            // Data variables
            mobileMenu,
            icon,
            switchColorTheme,
            cards,
            sections,

            // Computed
            colorIcon,
            logoSrc,
            mobileIcon,

            // Methods
            onUpdateTheme,
            onMobileMenu,
            scrollTo,
        };
    },
});
