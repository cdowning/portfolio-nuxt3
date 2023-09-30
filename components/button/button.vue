<template>
    <button
        :class="[
            'btn inline-flex items-center justify-center',
            'brn-' + variant,
            ...buttonClasses,
        ]"
        :disabled="disabled"
    >
        <slot />
    </button>
</template>

<script lang="ts" src="./button.ts"></script>
<style src="./button.scss" lang="scss" scoped></style>
