<template>
    <div class="logo">
        <nuxt-link :to="to">
            <img
                :src="srcPath"
                :width="width"
                :height="height"
                :alt="alt"
                v-bind="$attrs"
            />
        </nuxt-link>
    </div>
</template>

<script lang="ts" src="./logo.ts"></script>
<style src="./logo.scss" lang="scss" scoped></style>
