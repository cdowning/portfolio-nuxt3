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

            <div class="resume-content px-8 py-2">
                <h3
                    class="font-worksans w-full py-8 px-8 text-lg md:text-center"
                >
                    “Frontend developer with a passion for user experience.”
                </h3>

                <!-- Main details in resume -->
                <div class="flex flex-col flex-col-reverse md:flex-row">
                    <!-- Left column -->
                    <div class="w-full md:max-w-[65%] md:mr-4">
                        <!-- Experience section -->
                        <section class="flex flex-col relative mb-6 timeline">
                            <!-- Experience Header -->

                            <h4
                                class="mb-4 flex flex-col items-center bg-cream-0 z-10 md:flex-row"
                            >
                                <Icon
                                    class="relative mx-2"
                                    icon="briefcase"
                                    size="lg"
                                />
                                <span class="text-lg">EXPERIENCE</span>
                            </h4>

                            <timeline-event>
                                <timeline-details>
                                    <template v-slot:title>Quore</template>
                                    <template v-slot:header
                                        >Frontend Developer</template
                                    >
                                    <template v-slot:date
                                        >October 2016 - Present</template
                                    >
                                    <ul class="text-left list-disc pl-4 mt-5">
                                        <li>
                                            Create and manage our global Vue.js
                                            components using Storybook
                                        </li>
                                        <li>
                                            Working on the new product with
                                            <a
                                                href="https://nuxt.com/"
                                                target="_blank"
                                            >
                                                Nuxt.js
                                            </a>
                                            as the framework
                                        </li>
                                        <li>
                                            Fix any existing styling or
                                            functionality bugs in the existing
                                            product (<a
                                                href="app.quore.com"
                                                target="_blank"
                                            >
                                                app.quore.com</a
                                            >)
                                        </li>
                                        <li>
                                            Implement additional features to the
                                            current product
                                        </li>
                                    </ul>
                                </timeline-details>
                            </timeline-event>

                            <timeline-event>
                                <timeline-details>
                                    <template v-slot:title>NIC, Inc</template>
                                    <template v-slot:header>
                                        Senior User Interface Designer
                                    </template>
                                    <template v-slot:date>
                                        May 2016 - October 2016
                                    </template>
                                    <ul class="text-left list-disc pl-4 mt-5">
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
                                </timeline-details>
                                <hr class="my-6 border-cream-40" />
                                <timeline-details>
                                    <template v-slot:header>
                                        User Interface Designer
                                    </template>
                                    <template v-slot:date>
                                        May 2011 - May 2016
                                    </template>

                                    <ul class="text-left list-disc pl-4 mt-5">
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
                                </timeline-details>
                            </timeline-event>

                            <timeline-event>
                                <timeline-details>
                                    <template v-slot:title>
                                        ARS Interactive
                                    </template>
                                    <template v-slot:header>
                                        Frontend Developer
                                    </template>
                                    <template v-slot:date>
                                        March 2010 - May 2011
                                    </template>
                                    <ul class="text-left list-disc pl-4 mt-5">
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
                                </timeline-details>
                            </timeline-event>
                        </section>

                        <!-- Education section -->
                        <section class="flex flex-col relative mb-6 timeline">
                            <!-- Experience Header -->
                            <h4
                                class="mb-4 flex flex-col items-center bg-cream-0 z-10 md:flex-row"
                            >
                                <Icon
                                    class="relative mx-2"
                                    icon="graduation-cap"
                                    size="lg"
                                />
                                <span class="text-lg">EDUCATION</span>
                            </h4>

                            <timeline-event>
                                <timeline-details>
                                    <template v-slot:title>
                                        The Art Institute of Tennessee -
                                        Nashville
                                    </template>
                                    <template v-slot:header>
                                        BFA, Interactive Media & Web Design
                                    </template>
                                    <template v-slot:date> 2007-2009 </template>
                                </timeline-details>
                            </timeline-event>
                        </section>
                    </div>
                    <!-- Right column -->
                    <div class="w-full md:max-w-[35%] md:ml-4">
                        <section class="flex flex-col relative mb-6">
                            <!-- SKILLS Header -->
                            <h4
                                class="mb-4 flex flex-col items-center md:flex-row"
                            >
                                <!-- TODO: ADD GEAR ICON -->
                                <Icon
                                    class="relative bg-cream-0 mx-2"
                                    icon="gear"
                                    size="lg"
                                />
                                <span class="text-lg">SKILLS</span>
                            </h4>
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
                            <h4
                                class="mb-4 flex flex-col items-center md:flex-row"
                            >
                                <!-- TODO: ADD GEAR ICON -->
                                <Icon
                                    class="relative bg-cream-0 mx-2"
                                    icon="briefcase"
                                    size="lg"
                                />
                                <span class="text-lg">TOOLS</span>
                            </h4>

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
                            <h4
                                class="mb-4 flex flex-col items-center md:flex-row"
                            >
                                <Icon
                                    class="relative bg-cream-0 mx-2"
                                    icon="airplane"
                                    size="lg"
                                />
                                <span class="text-lg">CONNECT</span>
                            </h4>
                            <p class="pl-4">
                                If you would like to get in touch with me, feel
                                free to shoot me an
                                <a href="mailto:caitlin.j.hawley@gmail.com">
                                    email </a
                                >.
                            </p>
                            <div class="flex justify-center md:block pl-4">
                                <!-- <a
                                    class="no-underline text-inherit"
                                    href="mailto:caitlin.j.hawley@gmail.com"
                                >
                                    <Icon
                                        class="relative bg-cream-0 mx-2"
                                        icon="envelope"
                                        size="lg"
                                    />
                                    caitlin.j.hawley@gmail.com
                                </a> -->

                                <Button
                                    class="no-underline"
                                    size="sm"
                                    @click="downloadResume"
                                >
                                    Download Resume
                                    <Icon icon="pdf" class="pl-1" />
                                </Button>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </NuxtLayout>
    </div>
</template>

<script lang="ts" src="./ts/resume.ts"></script>
<style lang="scss" src="./scss/resume.scss" scoped></style>
