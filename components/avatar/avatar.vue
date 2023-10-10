<template>
    <div :class="['avatar', 'avatar-' + size, 'avatar-' + shape, 'bg-gray-10']">
        <img
            v-if="src"
            :class="['img', { 'p-3': usePadding }]"
            :src="imageSource"
        />
    </div>
</template>

<script lang="ts" src="./avatar.ts"></script>
<style src="./avatar.scss" lang="scss" scoped></style>
