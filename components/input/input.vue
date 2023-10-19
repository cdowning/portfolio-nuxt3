<template>
    <div ref="currentInput" :class="classes">
        <slot name="label" />
        <input
            :type="type"
            :id="id"
            :name="id"
            :class="inputClasses"
            :disabled="isDisabled"
            :placeholder="placeholder"
            @focusin="focused = !focused"
            @focusout="focused = !focused"
        />
    </div>
</template>

<script lang="ts" src="./input.ts"></script>
<style src="./input.scss" lang="scss" scoped></style>
