<template>
    <div class="progress-container">
        <span v-if="label" class="label block ml-2 mb-1">{{ label }}</span>
        <div class="progress">
            <div :class="[progressBarClasses]" :style="`width: ${percentage}%`">
                <!-- <div :class="[progressBarClasses, `w-[${percentage}%]`]"> -->
                <span v-if="showProgress">{{ percentage }}%</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./progress.ts"></script>
<style lang="scss" src="./progress.scss" scoped></style>
