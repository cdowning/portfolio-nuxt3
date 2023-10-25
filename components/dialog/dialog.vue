<template>
    <transition name="fade">
        <div
            ref="currentDialog"
            class="dialog-container flex flex-col justify-center"
        >
            <div :class="['dialog rounded', 'dialog-' + size]">
                <slot name="header" v-bind="{ header }">
                    <h3 class="text-lg text-center">
                        {{ header }}
                    </h3>
                </slot>

                <slot name="content" v-bind="{ details }">
                    <p>{{ details }}</p>
                </slot>
                <!-- content in this case is the prop content data -->
                <!-- <slot name="content" v-bind="{ content }">
                <p>{{ content.details }}</p>
            </slot> -->
            </div>

            <div class="overlay" @click="onCloseDialog"></div>
            <Icon
                v-if="isDismissible"
                icon="close"
                size="md"
                class="close cursor-pointer"
                @click="$emit('close')"
            />
        </div>
    </transition>
</template>

<script lang="ts" src="./dialog.ts"></script>
<style src="./dialog.scss" lang="scss" scoped></style>
