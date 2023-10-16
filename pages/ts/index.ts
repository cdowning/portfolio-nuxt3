export default defineComponent({
    setup() {
        const router = useRouter();

        // We only need value from the color mode object
        const $colorMode = useColorMode();

        const date = useDate();

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
            const icon = $colorMode.value === 'dark' ? 'sun' : 'moon';
            return icon;
        });
        const logoSrc = computed<string>(() => {
            return `caitlin-hawley-${$colorMode.value}`;
        });
        const mobileIcon = computed<string>(() => {
            return icon.value === 'menu' ? 'menu' : 'close';
        });

        // Methods
        const onUpdateTheme = (isMobile: boolean) => {
            const color = $colorMode.value === 'dark' ? 'light' : 'dark';
            $colorMode.value = color;

            if (isMobile) {
                toggleMobileMenu();
            }
        };
        // Opens the mobile menu
        const toggleMobileMenu = () => {
            mobileMenu.value = !mobileMenu.value;
            icon.value = icon.value === 'menu' ? 'close' : 'menu';
        };
        // scroll to section
        const scrollTo = (section: string, isMobile?: boolean) => {
            if (isMobile) {
                toggleMobileMenu();
            }

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
            date,

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
            toggleMobileMenu,
            scrollTo,
        };
    },
});
