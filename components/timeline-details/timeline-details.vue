<template>
    <!-- Maybe use something other than h4 & h3? -->
    <h4 class="text-subtle">
        <slot name="title" />
    </h4>
    <h3 class="text-md">
        <slot name="header">Header here</slot>
    </h3>
    <h4 class="text-subtle">
        <slot name="date" />
    </h4>
    <slot />
</template>

<script lang="ts" src="./timeline-details.ts"></script>
