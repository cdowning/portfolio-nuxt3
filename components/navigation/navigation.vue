<template>
    <menu :class="['flex', direction === 'horizontal' ? '' : 'flex-col']">
        <slot />
    </menu>
</template>

<script lang="ts" src="./navigation.ts"></script>
<style lang="scss" src="./navigation.scss" scoped></style>
