<template>
    <div :class="['avatar', 'avatar-' + size, 'avatar-' + shape, 'bg-gray-10']">
        <img v-if="src" :src="src" />
        <img
            v-else
            class="placeholder"
            src="~/assets/images/global/female.png"
        />
    </div>
</template>

<script lang="ts" src="./avatar.ts"></script>
<style src="./avatar.scss" lang="scss" scoped></style>
