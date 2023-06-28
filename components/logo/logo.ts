import { filename } from 'pathe/utils';

interface fileNameObject {
    default: string;
}

const Logo = defineComponent({
    name: 'Logo',
    props: {
        to: {
            type: String,
            default: '/',
        },
        src: {
            type: String,
            default: 'caitlin-hawley-light',
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
    setup(props, context) {
        const logos = import.meta.glob('~/assets/images/logo/*.svg', {
            eager: true,
        });

        // Do we really want the logos in the asset folder?
        // Reference for Object.fromEntries
        const images = Object.fromEntries(
            Object.entries(logos).map(([key, value]) => [
                filename(key),
                (value as fileNameObject).default,
            ])
        );

        const srcPath = computed<string>(() => {
            return images[props.src];
        });

        return {
            srcPath,
        };
    },
    // computed: {
    //     srcPath(): string {
    //         return require(`~/assets/images/logo/${this.src}`);
    //     },
    // },
});

export default Logo;
