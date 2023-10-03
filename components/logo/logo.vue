<template>
    <div class="logo">
        <img
            class="logo"
            :src="srcPath"
            :width="width"
            :height="height"
            :alt="alt"
            v-bind="$attrs"
        />
    </div>
</template>

<script lang="ts" src="./logo.ts"></script>
<style src="./logo.scss" lang="scss" scoped></style>
