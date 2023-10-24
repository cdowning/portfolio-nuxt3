<template>
    <div ref="currentInput" :class="classes">
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

        <Icon v-if="icon" :icon="icon" @click="onIconClick" />
    </div>
</template>

<script lang="ts" src="./input.ts"></script>
<style src="./input.scss" lang="scss" scoped></style>
