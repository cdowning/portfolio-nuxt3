<template>
    <label class="label flex items-center w-full" :for="labelFor">
        <span class="label-text flex-grow"><slot /></span>

        <span v-if="isOptional" class="label-optional text-sm">(Optional)</span>
    </label>
</template>

<script lang="ts" src="./label.ts"></script>
<style src="./label.scss" lang="scss" scoped></style>
