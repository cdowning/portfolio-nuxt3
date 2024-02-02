import type { Args, Meta, StoryObj } from '@storybook/vue3';

import Select from './select.vue';

// Various option use cases
const options = [
    { label: 'Vue.js', id: 1 },
    { label: 'React', id: 2 },
    { label: 'CSS', id: 3 },
    { label: 'HTML', id: 4 },
    { label: 'Java', id: 5 },
    { label: 'Python', id: 6 },
    { label: 'Node', id: 7 },
    { label: 'Angular', id: 8 },
    { label: 'SASS', id: 9 },
    { label: 'Typescript', id: 10 },
    { label: 'MDX', id: 11 },
];

const iconOptions = [
    { label: 'Vue.js', id: 1, icon: 'vue' },
    { label: 'JavaScript', id: 2, icon: 'javascript' },
    { label: 'CSS', id: 3, icon: 'css3' },
    { label: 'HTML', id: 4, icon: 'html5' },
    { label: 'Nuxt', id: 6, icon: 'nuxt' },
    { label: 'Storybook', id: 7, icon: 'storybook' },
    { label: 'Tailwind', id: 8, icon: 'tailwind' },
    { label: 'SASS', id: 9, icon: 'sass' },
    { label: 'Typescript', id: 10, icon: 'typescript' },
    { label: 'Git', id: 11, icon: 'git' },
];

const emailOptions = [
    { label: 'caitlin.hawley@quore.com', id: 1 },
    { label: 'joel.nye@quore.com', id: 2 },
    { label: 'alan.travis@quore.com', id: 3 },
    { label: 'kelly.smith@quore.com', id: 4 },
    { label: 'drew.smith@quore.com', id: 5 },
    { label: 'zach.janicello@quore.com', id: 6 },
    { label: 'greg.wiley@quore.com', id: 7 },
    { label: 'helena.laymon@quore.com', id: 8 },
    { label: 'amanda.belmonte@quore.com', id: 9 },
    { label: 'jacob.gonzalez@quore.com', id: 10 },
];

// Select all structure
const allOption = [
    {
        all: 'All',
        emails: emailOptions,
    },
];

const disabledOption = [
    ...options,
    { label: 'JavaScript', id: 12, isDisabled: true },
];

const meta: Meta<typeof Select> = {
    title: 'Components/Select',
    component: Select,
    argTypes: {
        modelValue: {
            control: { type: 'object' },
        },
        options: {
            control: { type: 'object' },
        },
    },
    parameters: {
        docs: {
            story: {
                inline: false,
                iframeHeight: 376,
            },
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
    name: 'Simple Dropdown',
    render: (args: Args) => ({
        components: { Select },
        setup() {
            return {
                args,
            };
        },
        template: `<Select v-bind="args" />`,
    }),
    args: {
        modelValue: [options[0]],
        options: options,
        placeholder: 'Enter First Name',
        disabled: false,
        multiple: false,
        searchable: false,
        trackBy: 'id',
        label: 'label',
    },
} satisfies Story;

// Multiple Select with search
export const MultipleSelect: Story = {
    args: {
        ...Primary.args,
        multiple: true,
        searchable: true,
    },
} satisfies Story;

export const WithIcons: Story = {
    args: {
        ...Primary.args,
        modelValue: [iconOptions[0]],
        options: iconOptions,
        multiple: true,
        searchable: true,
    },
} satisfies Story;

// export const DisabledOption: Story = {
//     name: 'With Disabled Option',
//     args: {
//         ...Primary.args,
//         options: disabledOption,
//         multiple: true,
//     },
// } satisfies Story;

// Multiple Select - Tags
// export const MultiSelect: Story = {
//     name: 'With Tag Styling',
//     args: {
//         ...Primary.args,
//         multiple: true,
//         limitShown: 2,
//         showTags: true,
//     },
// } satisfies Story;

// Checkboxes
// export const CheckboxSelect: Story = {
//     name: 'With Checkboxes',
//     args: {
//         ...Primary.args,
//         multiple: true,
//     },
// } satisfies Story;

// // Select All
// export const AllSelect: Story = {
//     name: 'With Select All',
//     args: {
//         ...Primary.args,
//         options: allOption,
//         multiple: true,
//     },
// } satisfies Story;

// // Add Tags Select - Example: if you want to add a value to the list of options
// export const TagSelect = {
//     name: 'Taggable',
//     render: (args: Args) => ({
//         components: { QSelect },
//         setup() {
//             const validateEmail = (email) => {
//                 const mailformat =
//                     /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//                 return email.match(mailformat);
//             };

//             const checkEmail = (tag) => {
//                 const isEmailValid = validateEmail(tag.label);

//                 // Add unhappy path later in else statement.
//                 if (isEmailValid) {
//                     const emailAddress = {
//                         label: tag.label,
//                         added: tag.added, // new value attribute for styling the tag differently
//                     };

//                     // Push it to the list of options
//                     args.options.push(emailAddress);

//                     // Push to the v-model (selected values)
//                     args.modelValue.push(emailAddress);
//                 } else {
//                     // This would be a toast
//                     console.log('email is invalid');
//                 }

//                 return isEmailValid;
//             };

//             return {
//                 // page methods
//                 validateEmail,
//                 checkEmail,

//                 // component
//                 args,
//             };
//         },
//         template: `<q-select v-bind="args" :validation-method="checkEmail" />`,
//     }),
//     args: {
//         modelValue: [emailOptions[0], emailOptions[1]],
//         options: emailOptions,
//         placeholder: 'Enter First Name',
//         disabled: false,
//         trackBy: 'id',
//         label: 'label',
//         hasCheckboxes: true,
//         multiple: true,
//         taggable: true,
//         searchable: true,
//         limitShown: 2,
//         showSelectedCount: true,
//         tagPlaceholder: 'Please press enter to add a new email',
//     },
// } satisfies Story;
