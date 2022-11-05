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
    class: 'mybody'
  },
})

</script>

<style>
.mybody {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}

.dark {
  background-color: black;
}

.light {
  background-color: #cbcbcb;
}
</style>