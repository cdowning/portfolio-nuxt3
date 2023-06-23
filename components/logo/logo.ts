const Logo = defineComponent({
    name: 'Logo',
    props: {
        to: {
            type: String,
            default: '/',
        },
        src: {
            type: String,
            default: 'caitlin-hawley-light.svg',
        },
        width: {
            type: Number,
            default: 155,
        },
        height: {
            type: Number,
            default: 70,
        },
        alt: {
            type: String,
            default: '',
        },
    },
    computed: {
        srcPath(): string {
            return require(`~/assets/images/logo/${this.src}`);
        },
    },
});

export default Logo;
