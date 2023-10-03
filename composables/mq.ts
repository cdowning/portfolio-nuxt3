// mq.ts - this composable is to target the breakpoints for conditional logic.
import tailwindConfig from '#tailwind-config';
import { useBreakpoints } from '@vueuse/core';
import { reactive } from 'vue';

const screens = { ...tailwindConfig.theme.screens };

const tailwindBreakpoints = {
    sm: Number(screens.sm.replace('px', '')),
    md: Number(screens.md.replace('px', '')),
    lg: Number(screens.lg.replace('px', '')),
    xl: Number(screens.xl.replace('px', '')),
};

const breakpoints = useBreakpoints(tailwindBreakpoints);

const mq = reactive({
    sm: breakpoints.smaller('sm'),
    md: breakpoints.between('sm', 'md'),
    lg: breakpoints.between('md', 'lg'),
    xl: breakpoints.greater('lg'),
});

export default mq;
