<template>
    <button
        :class="[
            'btn inline-flex items-center justify-center',
            'btn-' + variant,
            ...buttonClasses,
        ]"
        :disabled="disabled"
    >
        <slot />
    </button>
    <!-- <NuxtLink
        v-else
        :class="[
            'btn inline-flex items-center justify-center',
            ...buttonClasses,
        ]"
        v-bind="$attrs"
        :to="location"
    >
        <slot />
    </NuxtLink> -->
</template>

<script lang="ts" src="./button.ts"></script>
<style src="./button.scss" lang="scss" scoped></style>
