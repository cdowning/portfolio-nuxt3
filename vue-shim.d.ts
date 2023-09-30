// declare module '*.vue' {
//     import Vue, { VNode } from 'vue';
//     export default Vue;
// }
// declare module '*.svg' {
//     // DON'T DECLARE THIS INSIDE GLOBAL MODULE
//     type Svg = VNode;

//     const content: Svg;
//     export default content;
// }

// declare module '*.scss' {
//     const content: { [className: string]: string };
//     export = content;
// }

declare module '*.vue';
