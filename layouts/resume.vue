<template>
    <!-- https://nuxt.com/docs/guide/directory-structure/layouts#overriding-a-layout-on-a-per-page-basis -->
    <!-- <div class="container mx-auto py-10"> -->
    <div>
        <header>
            <!-- We can set a default cover photo but then override it if the page wants to use another photo -->
            <slot name="header">
                <div
                    class="hero-image flex flex-col justify-end text-cream-0 px-8 pb-5"
                >
                    <h1 class="text-2xl md:text-3xl uppercase">
                        <nuxt-link to="/">Caitlin Hawley</nuxt-link>
                    </h1>
                    <h2 class="text-xl">Frontend Developer</h2>
                </div>
            </slot>
        </header>

        <slot />
    </div>
</template>

<style lang="scss" src="./scss/resume.scss" scoped></style>
