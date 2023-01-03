<template>
  <div class="dark:bg-black">
    <slot />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth']
})
</script>
<style>


/* 
Added IOSHeight tailwind plugin from: https://github.com/RVxLab/tailwind-plugin-ios-full-height
Instructions:

classes
min-h-screen-ios
h-screen-ios

Or add by .some-element { @apply h-screen-ios min-h-screen-ios; }

*/
</style>
