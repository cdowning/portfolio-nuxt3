<template>
    <span
        v-if="icon"
        :class="[
            'icon',
            'icon-' + icon,
            { [`text-${color}`]: color },
            { [`icon-${size}`]: size },
        ]"
        @mouseover="setHover(true)"
        @mouseleave="setHover(false)"
    >
        <svg :class="['svg-icon']" :width="width" :height="height">
            <use
                v-bind="{
                    href: iconPath,
                }"
            />
        </svg>
    </span>
</template>

<script lang="ts" src="./icon.ts"></script>
<style src="./icon.scss" lang="scss" scoped></style>
