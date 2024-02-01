<template>
    <transition name="fade">
        <div
            v-if="modelValue"
            ref="currentDialog"
            class="modal-container flex flex-col justify-center"
        >
            <div :class="['modal rounded', 'modal-' + size]">
                <slot
                    v-if="hasHeader || headerText"
                    name="header"
                    v-bind="{ headerText }"
                >
                    <h3 class="text-lg text-center">
                        {{ headerText }}
                    </h3>
                </slot>

                <slot name="body" />
            </div>

            <div class="overlay" @click="onCloseDialog"></div>
            <Icon
                v-if="isDismissible"
                icon="close"
                size="md"
                class="close cursor-pointer"
                @click="$emit('update:modelValue', false)"
            />
        </div>
    </transition>
</template>

<script lang="ts" src="./modal.ts"></script>
<style src="./modal.scss" lang="scss" scoped></style>
