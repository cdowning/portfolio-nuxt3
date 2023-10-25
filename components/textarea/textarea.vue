<template>
    <div>
        <textarea
            ref="currentTextarea"
            :id="id"
            :name="id"
            :value="modelValue"
            :disabled="disabled"
            @focusin="focused = !focused"
            @focusout="focused = !focused"
        ></textarea>
    </div>
</template>

<script lang="ts" src="./textarea.ts"></script>
<style src="./textarea.scss" lang="scss" scoped></style>
