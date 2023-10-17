<template>
    <div
        :class="['tab', { 'tab-selected': selected }, { 'tab-hover': hover }]"
        @mouseover="hover = true"
        @mouseleave="hover = false"
    >
        <!-- Text - should I have a slot for a badge count? -->
        <div class="tab-text"><slot /></div>
        <div class="tab-underline"></div>
    </div>
</template>

<script lang="ts" src="./tab.ts"></script>
<style src="./tab.scss" lang="scss" scoped></style>
