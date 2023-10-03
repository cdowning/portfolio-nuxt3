<template>
    <!-- root element -->
    <div class="w-full flex flex-col">
        <!-- Created a background element for blur and potential parallax -->
        <div class="background flex-none"></div>
        <!-- First Section -->
        <section class="cover flex flex-col">
            <header class="flex items-center container mx-auto py-6 w-5/6">
                <Logo class="grow" :src="logoSrc" />
                <!-- Mobile menu icon -->
                <Icon
                    icon="menu"
                    color="white"
                    class="menu-icon cursor-pointer z-10 md:hidden"
                    @click="onMobileMenu"
                />
                <!-- Desktop/tablet nav -->
                <Navigation
                    class="flex-grow w-full pr-3 md:flex justify-center items-center hidden"
                >
                    <a class="mx-3" @click="scrollTo('about')">
                        <Icon class="mx-2" icon="female" />
                        About
                    </a>
                    <a class="mx-3" @click="scrollTo('experience')">
                        <Icon class="mx-2" icon="briefcase" />
                        Experience
                    </a>
                    <a class="mx-3" @click="scrollTo('contact')">
                        <Icon class="mx-2" icon="envelope" />
                        Contact
                    </a>
                </Navigation>

                <div class="color-mode hidden md:block">
                    <Icon
                        class="theme-icon cursor-pointer"
                        :icon="colorIcon"
                        :width="24"
                        :height="24"
                        @click="onUpdateTheme"
                    />
                </div>

                <!-- Mobile menu -->
                <!-- TODO: Use <menu> instead of ul - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu -->
                <transition name="fade">
                    <Navigation
                        v-if="mobileMenu"
                        direction="vertical"
                        class="menu mobile-menu flex flex-col items-center px-3 py-24 bg-primary md:hidden"
                    >
                        <Icon
                            icon="close"
                            class="close-icon cursor-pointer z-10 md:hidden"
                            @click="onMobileMenu"
                        />
                        <a class="my-3">
                            <Icon class="mx-2" icon="female" />
                            About
                        </a>
                        <a class="my-3">
                            <Icon class="mx-2" icon="briefcase" />
                            Experience
                        </a>
                        <a class="my-3">
                            <Icon class="mx-2" icon="envelope" />
                            Contact
                        </a>
                        <div
                            class="color-mode flex cursor-pointer py-3"
                            @click="onUpdateTheme"
                        >
                            <Icon
                                class="theme-icon cursor-pointer pr-2"
                                :icon="colorIcon"
                                :width="24"
                                :height="24"
                            />
                            Switch to {{ switchColorTheme }} theme
                        </div>
                    </Navigation>
                </transition>
            </header>
            <div class="intro container mx-auto py-6 w-5/6">
                <div class="text">
                    <h1 class="text-md md:text-lg">Hi, I'm Caitlin.</h1>
                    <h2 class="text-xl md:text-2xl">
                        Frontend Web Developer with a
                        <span class="highlight">passion</span> for design.
                    </h2>
                </div>
            </div>
        </section>
        <!-- <div class="angle angle-v-down-transparent"></div> -->
        <section id="about" class="about bg-primary">
            <div :ref="sections.about" class="container mx-auto py-8 w-5/6">
                <h4 class="text-base">About me</h4>
                <h3 class="text-lg">Who am I?</h3>
                <p>
                    I have 10+ years of developer experience. I strive to have
                    clean & reusable code while following best practices.
                </p>
                <p>
                    I really appreciate a good design that will leave the user
                    with a great experience. I care a lot about the user's
                    experience - there is nothing more frustrating than an
                    application or website that is confusing.
                </p>
                <p>
                    I have my BFA in Interactive Media & Web Design from The Art
                    Institute of Tennessee &mdash; Nashville. I am currrently
                    employed at Quore in Franklin, TN.
                </p>
                <Button>
                    Resume
                    <Icon icon="pdf" class="pl-1" />
                </Button>
            </div>
            <div
                :ref="sections.experience"
                id="skills"
                class="container mx-auto py-8 w-5/6"
            >
                <h4 class="text-base">Skills</h4>
                <h3 class="text-lg">What can I do?</h3>
                <p>
                    My expertise is using Nuxt.js, Typescript & Sass. When
                    building out components, I utilize
                    <span class="highlight">Storybook</span> to build out my
                    component library. I have worked with many CSS Frameworks,
                    but <span class="highlight tailwind">Tailwind</span> is the
                    one I love the most.
                </p>
                <Button class="mb-2">
                    View Design System
                    <Icon icon="storybook" class="pl-1" />
                </Button>

                <h3 class="text-lg">Skill Roadmap</h3>
                <p>
                    I have worked with
                    <span class="highlight vue">Vue.js</span> for so long, I
                    would love to dabble in React.
                </p>
                <div
                    class="flex flex-wrap justify-center md:gap-y-4 md:gap-x-6"
                >
                    <a
                        href="https://sass-lang.com/"
                        target="_blank"
                        title="Sass"
                    >
                        <Icon icon="sass" size="xl" class="sass" />
                    </a>
                    <a
                        href="https://storybook.js.org/"
                        target="_blank"
                        title="Storybook"
                    >
                        <Icon icon="storybook" size="xl" class="storybook" />
                    </a>
                    <a
                        href="https://html.com/html5/"
                        target="_blank"
                        title="HTML"
                    >
                        <Icon icon="html5" size="xl" class="html" />
                    </a>
                    <a href="https://www.css3.com/" target="_blank" title="CSS">
                        <Icon icon="css3" size="xl" class="css" />
                    </a>
                    <a
                        href="https://tailwindcss.com/"
                        target="_blank"
                        title="Tailwind"
                    >
                        <Icon icon="tailwind" size="xl" class="tailwind" />
                    </a>
                    <a href="https://nuxt.com/" target="_blank" title="Nuxt">
                        <Icon icon="nuxt" size="xl" class="nuxt" />
                    </a>
                    <a
                        href="https://jquery.com/"
                        target="_blank"
                        title="JQuery"
                    >
                        <Icon icon="jquery" size="xl" class="jquery" />
                    </a>
                    <a
                        href="https://www.atlassian.com/software/jira"
                        target="_blank"
                        title="Jira"
                    >
                        <Icon icon="jira" size="xl" class="jira" />
                    </a>
                    <a
                        href="https://www.javascript.com/"
                        target="_blank"
                        title="Javascript"
                    >
                        <Icon icon="javascript" size="xl" class="javascript" />
                    </a>
                    <a href="https://jestjs.io/" target="_blank" title="Jest">
                        <Icon icon="jest" size="xl" class="jest" />
                    </a>
                    <a href="https://git-scm.com/" target="_blank" title="Git">
                        <Icon icon="git" size="xl" class="git" />
                    </a>
                    <a
                        href="https://getbootstrap.com/"
                        target="_blank"
                        title="Bootstrap"
                    >
                        <Icon icon="bootstrap" size="xl" class="bootstrap" />
                    </a>
                    <a
                        href="https://www.figma.com/"
                        target="_blank"
                        title="Figma"
                    >
                        <Icon icon="figma" size="xl" class="figma" />
                    </a>
                    <a
                        href="https://www.typescriptlang.org/"
                        target="_blank"
                        title="Typescript"
                    >
                        <Icon icon="typescript" size="xl" class="typescript" />
                    </a>
                    <a
                        href="https://code.visualstudio.com/"
                        target="_blank"
                        title="VS Code"
                    >
                        <Icon icon="vscode" size="xl" class="vscode" />
                    </a>
                    <a
                        href="https://vuetifyjs.com/en/"
                        target="_blank"
                        title="Vuetify"
                    >
                        <Icon icon="vuetify" size="xl" class="vuetify" />
                    </a>
                    <a href="https://vuejs.org/" target="_blank" title="Vue">
                        <Icon icon="vue" size="xl" class="vue" />
                    </a>
                    <a
                        href="https://wordpress.com/"
                        target="_blank"
                        title="Wordpress"
                    >
                        <Icon icon="wordpress" size="xl" class="wordpress" />
                    </a>
                </div>
            </div>
        </section>
        <div class="angle angle-v-down"></div>
        <section class="about bg-secondary">
            <div class="container mx-auto py-8 w-5/6">
                <h4 class="text-base">Experiments</h4>
                <h3 class="text-lg">Code Playground</h3>
                <p>Check out my open source playground.</p>

                <CardGroup :items="cards" orientation="portrait"></CardGroup>

                <div class="block float-right">
                    <Button
                        type="link"
                        location="https://codepen.io/cdowning"
                        target="_blank"
                        class="right"
                    >
                        View More
                    </Button>
                </div>
            </div>
        </section>
        <div class="angle angle-slant-down"></div>
        <section :ref="sections.contact" id="contact" class="about bg-primary">
            <div class="container mx-auto py-8 w-5/6">
                <h4 class="text-base">Contact</h4>
                <h3 class="text-lg">Let's chat</h3>
                <p>
                    If you would like to get in touch with me, feel free to
                    shoot me an email or text.
                </p>
                <Button>
                    Resume
                    <Icon icon="pdf" class="pl-1" />
                </Button>
            </div>
        </section>
        <footer class="flex bg-cream-50 text-cream-10">
            <div class="flex items-center container mx-auto py-8 w-5/6">
                <div class="social-icons grow">
                    <Icon icon="github" size="lg" color="cream-10" />
                    <Icon icon="linkedin-circle" size="lg" color="cream-10" />
                    <Icon icon="codepen" size="lg" color="cream-10" />
                    <Icon icon="twitter" size="lg" color="cream-10" />
                </div>

                <span>
                    &#169; {{ date.local().toFormat('y') }} Caitlin Hawley
                </span>
            </div>
        </footer>
    </div>
</template>

<script lang="ts" src="./ts/index.ts"></script>
<!--<style lang="scss" src="./scss/prototype.scss" scoped></style>-->
