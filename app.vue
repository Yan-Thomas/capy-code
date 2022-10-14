<script setup lang="ts">
useHead({
  title: "CapyCode",
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
:root {
  /* Typographic Scale */
  --step--2: clamp(0.91rem, calc(0.89rem + 0.1vw), 0.96rem);
  --step--1: clamp(1.09rem, calc(1.05rem + 0.21vw), 1.2rem);
  --step-0: clamp(1.31rem, calc(1.24rem + 0.37vw), 1.5rem);
  --step-1: clamp(1.58rem, calc(1.46rem + 0.59vw), 1.88rem);
  --step-2: clamp(1.89rem, calc(1.71rem + 0.89vw), 2.34rem);
  --step-3: clamp(2.27rem, calc(2.01rem + 1.29vw), 2.93rem);
  --step-4: clamp(2.72rem, calc(2.36rem + 1.83vw), 3.66rem);
  --step-5: clamp(3.27rem, calc(2.75rem + 2.56vw), 4.58rem);

  /* Spacing Scale */
  --space-3xs: clamp(0.31rem, calc(0.29rem + 0.12vw), 0.38rem);
  --space-2xs: clamp(0.69rem, calc(0.66rem + 0.12vw), 0.75rem);
  --space-xs: clamp(1rem, calc(0.95rem + 0.24vw), 1.13rem);
  --space-s: clamp(1.31rem, calc(1.24rem + 0.37vw), 1.5rem);
  --space-m: clamp(2rem, calc(1.9rem + 0.49vw), 2.25rem);
  --space-l: clamp(2.63rem, calc(2.48rem + 0.73vw), 3rem);
  --space-xl: clamp(3.94rem, calc(3.72rem + 1.1vw), 4.5rem);
  --space-2xl: clamp(5.25rem, calc(4.96rem + 1.46vw), 6rem);
  --space-3xl: clamp(7.88rem, calc(7.44rem + 2.2vw), 9rem);

  /* Pairs */
  --space-3xs-2xs: clamp(0.31rem, calc(0.14rem + 0.85vw), 0.75rem);
  --space-2xs-xs: clamp(0.69rem, calc(0.52rem + 0.85vw), 1.13rem);
  --space-xs-s: clamp(1rem, calc(0.8rem + 0.98vw), 1.5rem);
  --space-s-m: clamp(1.31rem, calc(0.95rem + 1.83vw), 2.25rem);
  --space-m-l: clamp(2rem, calc(1.61rem + 1.95vw), 3rem);
  --space-l-xl: clamp(2.63rem, calc(1.89rem + 3.66vw), 4.5rem);
  --space-xl-2xl: clamp(3.94rem, calc(3.13rem + 4.02vw), 6rem);
  --space-2xl-3xl: clamp(5.25rem, calc(3.79rem + 7.32vw), 9rem);

  /* Custom Pairs */
  --space-s-l: clamp(1.31rem, calc(0.65rem + 3.29vw), 3rem);

  /* Colors */

  /* Gray */
  --gray-0: #f8f9fa;
  --gray-1: #f1f3f5;
  --gray-2: #e9ecef;
  --gray-3: #dee2e6;
  --gray-4: #ced4da;
  --gray-5: #adb5bd;
  --gray-6: #868e96;
  --gray-7: #495057;
  --gray-8: #343a40;
  --gray-9: #212529;

  /* Red */
  --red-0: #fff5f5;
  --red-1: #ffe3e3;
  --red-2: #ffc9c9;
  --red-3: #ffa8a8;
  --red-4: #ff8787;
  --red-5: #ff6b6b;
  --red-6: #fa5252;
  --red-7: #f03e3e;
  --red-8: #e03131;
  --red-9: #c92a2a;

  /* Pink */
  --pink-0: #fff0f6;
  --pink-1: #ffdeeb;
  --pink-2: #fcc2d7;
  --pink-3: #faa2c1;
  --pink-4: #f783ac;
  --pink-5: #f06595;
  --pink-6: #e64980;
  --pink-7: #d6336c;
  --pink-8: #c2255c;
  --pink-9: #a61e4d;

  /* Grape */
  --grape-0: #f8f0fc;
  --grape-1: #f3d9fa;
  --grape-2: #eebefa;
  --grape-3: #e599f7;
  --grape-4: #da77f2;
  --grape-5: #cc5de8;
  --grape-6: #be4bdb;
  --grape-7: #ae3ec9;
  --grape-8: #9c36b5;
  --grape-9: #862e9c;

  /* Violet */
  --violet-0: #f3f0ff;
  --violet-1: #e5dbff;
  --violet-2: #d0bfff;
  --violet-3: #b197fc;
  --violet-4: #9775fa;
  --violet-5: #845ef7;
  --violet-6: #7950f2;
  --violet-7: #7048e8;
  --violet-8: #6741d9;
  --violet-9: #5f3dc4;

  /* Indigo */
  --indigo-0: #edf2ff;
  --indigo-1: #dbe4ff;
  --indigo-2: #bac8ff;
  --indigo-3: #91a7ff;
  --indigo-4: #748ffc;
  --indigo-5: #5c7cfa;
  --indigo-6: #4c6ef5;
  --indigo-7: #4263eb;
  --indigo-8: #3b5bdb;
  --indigo-9: #364fc7;

  /* Blue */
  --blue-0: #e7f5ff;
  --blue-1: #d0ebff;
  --blue-2: #a5d8ff;
  --blue-3: #74c0fc;
  --blue-4: #4dabf7;
  --blue-5: #339af0;
  --blue-6: #228be6;
  --blue-7: #1c7ed6;
  --blue-8: #1971c2;
  --blue-9: #1864ab;

  /* Cyan */
  --cyan-0: #e3fafc;
  --cyan-1: #c5f6fa;
  --cyan-2: #99e9f2;
  --cyan-3: #66d9e8;
  --cyan-4: #3bc9db;
  --cyan-5: #22b8cf;
  --cyan-6: #15aabf;
  --cyan-7: #1098ad;
  --cyan-8: #0c8599;
  --cyan-9: #0b7285;

  /* Teal */
  --teal-0: #e6fcf5;
  --teal-1: #c3fae8;
  --teal-2: #96f2d7;
  --teal-3: #63e6be;
  --teal-4: #38d9a9;
  --teal-5: #20c997;
  --teal-6: #12b886;
  --teal-7: #0ca678;
  --teal-8: #099268;
  --teal-9: #087f5b;

  /* Green */
  --green-0: #ebfbee;
  --green-1: #d3f9d8;
  --green-2: #b2f2bb;
  --green-3: #8ce99a;
  --green-4: #69db7c;
  --green-5: #51cf66;
  --green-6: #40c057;
  --green-7: #37b24d;
  --green-8: #2f9e44;
  --green-9: #2b8a3e;

  /* Lime */
  --lime-0: #f4fce3;
  --lime-1: #e9fac8;
  --lime-2: #d8f5a2;
  --lime-3: #c0eb75;
  --lime-4: #a9e34b;
  --lime-5: #94d82d;
  --lime-6: #82c91e;
  --lime-7: #74b816;
  --lime-8: #66a80f;
  --lime-9: #5c940d;

  /* Yellow */
  --yellow-0: #fff9db;
  --yellow-1: #fff3bf;
  --yellow-2: #ffec99;
  --yellow-3: #ffe066;
  --yellow-4: #ffd43b;
  --yellow-5: #fcc419;
  --yellow-6: #fab005;
  --yellow-7: #f59f00;
  --yellow-8: #f08c00;
  --yellow-9: #e67700;

  /* Orange */
  --orange-0: #fff4e6;
  --orange-1: #ffe8cc;
  --orange-2: #ffd8a8;
  --orange-3: #ffc078;
  --orange-4: #ffa94d;
  --orange-5: #ff922b;
  --orange-6: #fd7e14;
  --orange-7: #f76707;
  --orange-8: #e8590c;
  --orange-9: #d9480f;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html:focus-within {
  scroll-behavior: smooth;
}

html,
body {
  height: 100%;
}

body {
  font-family: "Ubuntu", sans-serif;
  /* In case this causes issue, change for line-height: 1.5 */
  line-height: calc(1em + 0.5rem);
  -webkit-font-smoothing: antialiased;
}

div#__nuxt {
  height: 100%;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6,
li {
  overflow-wrap: break-word;
  color: var(--gray-7);
}

h1 a,
h2 a,
h3 a,
h4 a,
h5 a,
h6 a {
  text-decoration: none;
  color: inherit;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: bold;
  line-height: 1.5;
}

h1 {
  font-size: var(--step-2);
}

h2 {
  font-size: var(--step-1);
}

h3 {
  font-size: var(--step-0);
}

h4 {
  font-size: var(--step--1);
}

h5 {
  font-size: var(--step--2);
}

h6 {
  font-size: var(--step--2);
}

p {
  --flow-space: var(--space-s);
}

h2,
h3,
h4,
h5,
h6 {
  --flow-space: var(--space-m);
}

pre {
  background-color: var(--gray-1);
  padding: var(--space-2xs);
}

@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Utilities */
.flow-block > * + * {
  margin-top: var(--flow-space, 1em);
}

.flow-inline > * + * {
  margin-left: var(--flow-space, 1em);
}

.sr-only {
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;
}

/* CSS Authoring Guidelines

Media Queries - rem

Margins - rem/em - Use em for heading font-size based margin scaling:

h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.5rem;
}
h1, h2, h3 {
  margin-top: 2em;
  margin-bottom: 0.5em;
}

Widths/Heights - Prefer to use max-(height/width) and min-(height/width), rem units

*/
</style>
