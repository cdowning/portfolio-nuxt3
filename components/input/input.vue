<template>
    <div :class="classes">
        <input
            ref="currentInput"
            :value="modelValue"
            :type="type"
            :id="id"
            :name="id"
            :class="inputClasses"
            :disabled="isDisabled"
            :placeholder="placeholder"
            @input="onUpdateValue($event)"
            @focusin="focused = !focused"
            @focusout="focused = !focused"
        />
        <slot v-bind="{ icon, onIconClick }" icon-class="cursor-pointer"></slot>
    </div>
</template>

<script lang="ts" src="./input.ts"></script>
<style src="./input.scss" lang="scss" scoped></style>
