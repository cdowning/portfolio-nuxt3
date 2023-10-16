// https://nuxt.com/docs/guide/directory-structure/plugins#vue-directives
// https://vuejs.org/guide/reusability/custom-directives.html#function-shorthand
export default defineNuxtPlugin((nuxtApp) => {
    // v-visible
    nuxtApp.vueApp.directive('visible', (el, binding) => {
        const value = binding.value ? 'visible' : 'hidden';
        el.style.visibility = value;
    });

    nuxtApp.vueApp.directive('focus', {
        mounted(el) {
            el.focus();
        },
        getSSRProps(binding, vnode) {
            // you can provide SSR-specific props here
            return {};
        },
    });
});
