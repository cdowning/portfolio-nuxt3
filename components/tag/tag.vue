<template>
    <div
        :class="[
            'tag inline-flex items-center py-2 pl-3',
            'tag-' + variant,
            isDismissible ? 'pr-2' : 'pr-3',
            { hovered: hover },
        ]"
        @mouseover="hover = true"
        @mouseleave="hover = false"
    >
        <!-- Meant for text -->
        <span class="tag-text"><slot /></span>

        <div
            v-if="isDismissible"
            :class="[
                'close flex cursor-pointer',
                hover ? 'visible' : 'invisible',
            ]"
            @click="$emit('remove')"
        >
            <Icon icon="close" size="xs" />
        </div>
    </div>
</template>

<script lang="ts" src="./tag.ts"></script>
<style src="./tag.scss" lang="scss" scoped></style>
