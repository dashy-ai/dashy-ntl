<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">

useHead({
  title: 'dashy.ai',
  meta: [
    { name: 'description', content: 'Data Visualizations made easy.' }
  ],
  bodyAttrs: {
    class: 'mybody 100vhfix'
  },
})

</script>

<style>
.mybody {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  /* min-height: 100vh;
  min-height: -webkit-fill-available; */
}

.dark {
  background-color: black;
}

.light {
  background-color: #cbcbcb;
}

/* html {
  height: -webkit-fill-available;
} */
</style>