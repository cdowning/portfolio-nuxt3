<template>
    <div
        :class="[
            'radio',
            isStacked ? 'flex' : 'inline-flex',
            { checked: isChecked },
        ]"
    >
        <input
            type="radio"
            :id="id"
            :name="name"
            :value="modelValue"
            :checked="isChecked"
            @change="updateValue"
        />
        <div class="radio-input"></div>

        <label :for="id" class="radio-label">{{ text }}</label>
    </div>
</template>

<script lang="ts" src="./radio.ts"></script>
<style src="./radio.scss" lang="scss" scoped></style>
