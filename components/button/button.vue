<template>
    <button
        v-if="!useNuxtLink"
        :class="[
            'btn inline-flex items-center justify-center',
            'btn-' + variant,
            ...buttonClasses,
        ]"
        :disabled="disabled"
    >
        <slot />
    </button>
    <nuxt-link
        v-else
        :class="[
            'btn inline-flex items-center justify-center',
            'btn-' + variant,
            ...buttonClasses,
        ]"
        :disabled="disabled"
    >
        <slot />
    </nuxt-link>
</template>

<script lang="ts" src="./button.ts"></script>
<style src="./button.scss" lang="scss" scoped></style>
