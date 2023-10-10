import placeholderPhoto from '~/assets/icons/svg/female-pony.svg';

export default defineComponent({
    props: {
        /** Determines the shape of the avatar */
        shape: {
            type: String,
            default: 'circle',
        },
        /** Determines the size of the avatar */
        size: {
            type: String,
            default: 'md',
        },
        /** Determines if the avatar image should have padding. This is primarily used when using icons in the src prop */
        usePadding: {
            type: Boolean,
            default: false,
        },
        /** path to image */
        src: {
            type: String,
            default: '',
        },
    },
    setup(props, context) {
        const valid = ref();

        const imageSource = computed(() => {
            const src = valid.value ? props.src : placeholderPhoto;
            return src;
        });

        const validateImage = (url: string, isValid: Function) => {
            const img = new Image();
            img.src = url;

            if (img.complete) {
                isValid(true);
            } else {
                img.onload = () => {
                    isValid(true);
                };

                img.onerror = () => {
                    isValid(false);
                };
            }
        };

        onMounted(() => {
            validateImage(props.src, (exists: boolean) => {
                valid.value = exists;
            });
        });

        return {
            // Refs
            valid,

            // Computed
            imageSource,

            // Methods
            validateImage,
        };
    },
});
