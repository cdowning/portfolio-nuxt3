<template>
    <div :class="['card flex border-card-primary border-solid', cardClasses]">
        <!-- Show placeholder if no image? -->
        <div
            v-if="showImagePlaceholder"
            :class="[
                'card-image-container',
                { 'rounded-t-lg': !!isRounded && orientation !== 'landscape' },
                { 'rounded-l-lg': !!isRounded && orientation === 'landscape' },
            ]"
        >
            <figure v-if="hasImageSlot" class="card-image">
                <slot name="image" v-bind="{ source, image }">
                    <img :src="imagePath" />
                </slot>
            </figure>
            <figure v-else class="card-image card-image-placeholder">
                <slot name="image" v-bind="{ source, image }">
                    <img
                        :src="imagePlaceholderPath"
                        :class="[
                            orientation === 'landscape' ? 'w-8/12' : 'w-6/12',
                        ]"
                    />
                </slot>
            </figure>
        </div>

        <div class="card-content">
            <div class="card-details">
                <slot name="header" v-bind="{ header }">
                    <h3 class="text-lg truncate" style="min-width: 0">
                        {{ header }}
                    </h3>
                </slot>
                <slot name="content" v-bind="{ description }">
                    <p>{{ description }}</p>
                </slot>
            </div>
            <div v-if="hasFooterSlot" class="card-footer">
                <slot name="footer" v-bind="{ link }">
                    <Button
                        v-if="link"
                        variant="primary"
                        size="sm"
                        outlined
                        is-full-width
                        @click="redirectTo(link.url)"
                    >
                        {{ link.name }}
                    </Button>
                    <!-- <a
                v-if="link"
                class="inline-block"
                :href="link.url"
                :title="link.name"
            >
                {{ link.name }}
            </a> -->
                </slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { filename } from 'pathe/utils';

import codeTagImage from '~/assets/images/global/code-tag.svg';

export const CARD_CLASS_PREFIX = 'card-';
export const BORDER_CLASS_PREFIX = 'border-';

export default defineComponent({
    name: 'Card',
    props: {
        item: {
            type: Object,
            default: () => {},
        },
        orientation: {
            type: String,
            default: 'portrait', // portrait, square, landscape
        },
        isRounded: {
            type: Boolean,
            default: false,
        },
        showBorder: {
            type: Boolean,
            default: false,
        },
        // Boolean for imagePlaceholder
        // Ability to customize placeholder - but have default
        imagePlaceholder: {
            type: String,
            default: '',
        },
        showImagePlaceholder: {
            type: Boolean,
            default: true,
        },
    },
    setup(props, context) {
        const data = ref(props.item);
        const useData = !!data.value;

        // https://stackblitz.com/edit/github-pq8nym-aoavsh?file=app.vue
        const codePenImages = import.meta.glob(
            '~/assets/images/codepen/*.png',
            {
                eager: true,
            }
        );

        const hasImageSlot = computed<boolean>(() => {
            return !!context.slots.image || !!data.value?.image;
        });
        const hasFooterSlot = computed<boolean>(() => {
            return !!context.slots.footer || !!data.value?.link;
        });

        const imagePlaceholderPath = computed<string>(() => {
            const path = props.imagePlaceholder || codeTagImage;
            return path;
        });

        // Images in codepen directory
        const images = Object.fromEntries(
            Object.entries(codePenImages).map(([key, value]) => [
                filename(key),
                (value as any).default,
            ])
        );

        // Is this an external image or local?
        const imagePath = computed<string>(() => {
            const path = data.value?.isImageExternal
                ? data.value?.image
                : images[data.value?.image];
            return path;
        });

        const cardClasses = computed<object>(() => {
            return [
                'card-' + props.orientation,
                {
                    'flex-col':
                        props.orientation === 'portrait' ||
                        props.orientation === 'square',
                },
                { 'rounded-lg': !!props.isRounded },
                {
                    [props.orientation === 'landscape'
                        ? 'border-r-8'
                        : 'border-b-8']: !!props.showBorder,
                },
                // props.orientation === 'landscape' ? 'border-r-8' : 'border-b-8',
                // { [CARD_CLASS_PREFIX + props.shape]: !!props.shape },
            ];
        });

        const redirectTo = (path: string) => {
            window.open(path, '_blank');
        };

        return {
            useData,
            hasImageSlot,
            hasFooterSlot,

            header: data.value?.header,
            description: data.value?.description,
            image: data.value?.image,
            externalImage: !!data.value?.isImageExternal,
            source: data.value?.source,
            link: data.value?.link,
            imagePath,

            // Computed
            cardClasses,
            imagePlaceholderPath,

            // Methods
            redirectTo,
        };
    },
});
</script>
<style src="./card.scss" lang="scss" scoped></style>
