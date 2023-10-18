<template>
    <div v-show="isActive" :class="classes">
        <!-- Text - should I have a slot for a badge count? -->
        <div class="tab-text"><slot /></div>
        <div class="tab-underline"></div>
    </div>
</template>

<script lang="ts" src="./tab.ts"></script>
<style src="./tab.scss" lang="scss" scoped></style>
