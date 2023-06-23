<template>
    <button
        v-if="!type"
        :class="[
            'btn inline-flex items-center justify-center',
            ...buttonClasses,
        ]"
        :disabled="disabled"
        v-on="$listeners"
    >
        <slot />
    </button>
    <NuxtLink
        v-else
        :class="[
            'btn inline-flex items-center justify-center',
            ...buttonClasses,
        ]"
        v-bind="$attrs"
        :to="$attrs.location"
    >
        <slot />
    </NuxtLink>
</template>

<script lang="ts" src="./button.ts"></script>
<style src="./button.scss" lang="scss" scoped></style>
