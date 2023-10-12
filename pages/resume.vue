<template>
    <div>
        <NuxtLayout name="resume">
            <template #header>
                <!-- <div class="hero-image"></div> -->
                <!-- <img
                    class="resume-cover"
                    src="~/assets/images/global/cover-placeholder.jpg"
                /> -->
                <!-- <div class="background flex-none"></div> -->
            </template>

            <div class="resume-content">
                <h3
                    class="font-worksans w-full py-8 px-8 text-lg md:text-center"
                >
                    “Frontend developer with a passion for user experience.”
                </h3>

                <!-- Main details in resume -->
                <div class="flex flex-col flex-col-reverse md:flex-row p-8">
                    <!-- Left column -->
                    <div class="w-full md:max-w-[65%] md:mr-4">
                        <!-- Experience section -->
                        <section class="flex flex-col relative mb-6 timeline">
                            <!-- Experience Header -->

                            <h3
                                class="mb-4 flex flex-col items-center bg-cream-0 z-10 md:flex-row"
                            >
                                <Icon
                                    class="relative mx-2"
                                    icon="briefcase"
                                    size="lg"
                                />
                                <span class="text-lg">EXPERIENCE</span>
                            </h3>
                            <!-- Quore -->
                            <div class="event relative">
                                <div class="details text-center box md:ml-12">
                                    <h4 class="dot">Quore</h4>
                                    <h3 class="text-md">Frontend Developer</h3>
                                    <h4 class="mb-5">October 2016 - Present</h4>
                                    <ul class="text-left list-disc pl-4">
                                        <li>
                                            Create and manage our global Vue.js
                                            components using Storybook
                                        </li>
                                        <li>
                                            Working on the new product with
                                            <a
                                                href="https://nuxt.com/"
                                                target="_blank"
                                                >Nuxt.js</a
                                            >
                                            as the framework
                                        </li>
                                        <li>
                                            Fix any existing styling or
                                            functionality bugs in the existing
                                            product (<a
                                                href="app.quore.com"
                                                target="_blank"
                                                >app.quore.com</a
                                            >)
                                        </li>
                                        <li>
                                            Implement additional features to the
                                            current product
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- NIC -->
                            <div class="event relative">
                                <div class="details text-center box md:ml-12">
                                    <h4 class="dot">NIC, Inc</h4>
                                    <h3 class="text-md">
                                        Senior User Interface Designer
                                    </h3>
                                    <h4 class="mb-5">
                                        May 2016 - October 2016
                                    </h4>

                                    <ul class="text-left list-disc pl-4">
                                        <li>
                                            Responsible for implementing and
                                            maintaining styles and scripts
                                            across all portal applications
                                        </li>
                                        <li>
                                            Communicate risks and any potential
                                            blockers in projects
                                        </li>
                                        <li>
                                            Analyze user interface problems and
                                            creating solutions
                                        </li>
                                    </ul>
                                    <hr class="my-6 border-cream-40" />
                                    <h3 class="text-md">
                                        User Interface Designer
                                    </h3>
                                    <h4 class="mb-5">May 2011 - May 2016</h4>

                                    <ul class="text-left list-disc pl-4">
                                        <li>
                                            Responsible for implementing and
                                            maximizing usability throughout the
                                            TN.gov portal
                                        </li>
                                        <li>
                                            Work with project managers,
                                            technical analysts, developers and
                                            quality assurance throughout a
                                            project
                                        </li>
                                        <li>
                                            Design and present fully interactive
                                            Web and Mobile application
                                            prototypes
                                        </li>
                                        <li>
                                            Responsible for ensuring the
                                            application pages are consistent and
                                            accurate
                                        </li>
                                        <li>
                                            Construct application pages using
                                            current web languages and ensures
                                            that the pages are standards
                                            compliant, and validate to
                                            cross-browser compatibility
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- ARS Interactive -->
                            <div class="event relative">
                                <div class="details text-center box md:ml-12">
                                    <h4 class="dot">ARS Interactive</h4>
                                    <h3 class="text-md">Frontend Developer</h3>
                                    <h4 class="mb-5">March 2010 - May 2011</h4>
                                    <ul class="text-left list-disc pl-4">
                                        <li>
                                            Responsible for loading all
                                            homepages and category ads for The
                                            Great Indoors
                                        </li>
                                        <li>
                                            Translate creative designs into
                                            compliant web interfaces that are
                                            cross browser compatible
                                        </li>
                                        <li>
                                            Implement user interfaces and web
                                            applications that comply with
                                            current web standards
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <!-- Education section -->
                        <section class="flex flex-col relative mb-6 timeline">
                            <!-- Experience Header -->
                            <h3
                                class="mb-4 flex flex-col items-center bg-cream-0 z-10 md:flex-row"
                            >
                                <Icon
                                    class="relative mx-2"
                                    icon="briefcase"
                                    size="lg"
                                />
                                <span class="text-lg">EDUCATION</span>
                            </h3>

                            <!-- Art Institute -->
                            <div class="event relative">
                                <div class="details text-center box md:ml-12">
                                    <h4 class="dot">
                                        The Art Institute of Tennessee -
                                        Nashville
                                    </h4>
                                    <h3 class="text-md">
                                        BFA, Interactive Media & Web Design
                                    </h3>
                                    <h4 class="mb-0">2007-2009</h4>
                                </div>
                            </div>
                        </section>
                    </div>
                    <!-- Right column -->
                    <div class="w-full md:max-w-[35%] md:ml-4">
                        <section class="flex flex-col relative mb-6">
                            <!-- SKILLS Header -->
                            <h3
                                class="mb-4 flex flex-col items-center md:flex-row"
                            >
                                <!-- TODO: ADD GEAR ICON -->
                                <Icon
                                    class="relative bg-cream-0 mx-2"
                                    icon="briefcase"
                                    size="lg"
                                />
                                <span class="text-lg">SKILLS</span>
                            </h3>
                            <Progress
                                class="mb-2"
                                label="JavaScript"
                                :value="80"
                                :show-progress="true"
                            />
                            <Progress
                                class="mb-2"
                                label="CSS"
                                :value="95"
                                :show-progress="true"
                            />
                            <Progress
                                class="mb-2"
                                label="HTML"
                                :value="100"
                                :show-progress="true"
                            />
                            <Progress
                                class="mb-2"
                                label="VUE"
                                :value="90"
                                :show-progress="true"
                            />
                            <Progress
                                class="mb-2"
                                label="Typescript"
                                :value="75"
                                :show-progress="true"
                            />
                            <Progress
                                class="mb-2"
                                label="Jest"
                                :value="40"
                                :show-progress="true"
                            />
                        </section>
                        <!-- TOOLS -->
                        <section class="flex flex-col relative mb-6">
                            <!-- Experience Header -->
                            <h3
                                class="mb-4 flex flex-col items-center md:flex-row"
                            >
                                <!-- TODO: ADD GEAR ICON -->
                                <Icon
                                    class="relative bg-cream-0 mx-2"
                                    icon="briefcase"
                                    size="lg"
                                />
                                <span class="text-lg">TOOLS</span>
                            </h3>

                            <ul class="flex justify-center md:block">
                                <li class="flex items-center mb-2">
                                    <Icon
                                        class="relative bg-cream-0 mx-2"
                                        icon="git"
                                        size="lg"
                                    />
                                    <span class="hidden md:inline-block">
                                        GIT
                                    </span>
                                </li>
                                <li class="flex items-center mb-2">
                                    <Icon
                                        class="relative bg-cream-0 mx-2"
                                        icon="figma"
                                        size="lg"
                                    />
                                    <span class="hidden md:inline-block">
                                        Figma
                                    </span>
                                </li>
                                <li class="flex items-center mb-2">
                                    <Icon
                                        class="relative bg-cream-0 mx-2"
                                        icon="storybook"
                                        size="lg"
                                    />
                                    <span class="hidden md:inline-block">
                                        Storybook
                                    </span>
                                </li>
                                <li class="flex items-center mb-2">
                                    <Icon
                                        class="relative bg-cream-0 mx-2"
                                        icon="tailwind"
                                        size="lg"
                                    />
                                    <span class="hidden md:inline-block">
                                        Tailwind
                                    </span>
                                </li>
                                <li class="flex items-center mb-2">
                                    <Icon
                                        class="relative bg-cream-0 mx-2"
                                        icon="vscode"
                                        size="lg"
                                    />
                                    <span class="hidden md:inline-block">
                                        VS Code
                                    </span>
                                </li>
                            </ul>
                        </section>
                        <!-- CONNECT -->
                        <section class="flex flex-col relative mb-6">
                            <!-- Experience Header -->
                            <h3
                                class="mb-4 flex flex-col items-center md:flex-row"
                            >
                                <!-- TODO: ADD GEAR ICON -->
                                <Icon
                                    class="relative bg-cream-0 mx-2"
                                    icon="briefcase"
                                    size="lg"
                                />
                                <span class="text-lg">CONNECT</span>
                            </h3>
                        </section>
                    </div>
                </div>
            </div>
        </NuxtLayout>
    </div>
</template>

<script lang="ts" src="./ts/resume.ts"></script>
<style lang="scss" src="./scss/resume.scss" scoped></style>
