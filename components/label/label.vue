<template>
    <label class="label flex items-center" :for="labelFor">
        <span class="label-text flex-grow"><slot /></span>

        <span v-if="isRequired" class="label-required text-sm">* Required</span>
    </label>
</template>

<script lang="ts" src="./label.ts"></script>
<style src="./label.scss" lang="scss" scoped></style>
