<template>
    <div :class="eventClasses">
        <div class="details box md:ml-12">
            <slot />
        </div>
    </div>
</template>

<script lang="ts" src="./timeline-event.ts"></script>
<style src="./timeline-event.scss" lang="scss" scoped></style>
