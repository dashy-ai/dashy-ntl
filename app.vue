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
  htmlAttrs: {
      class: 'myhead dark'
    }
})

</script>

<style>
.mybody {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: scroll;
  height: 100vh;
  height: -webkit-fill-available;
}

.myhead {
  height: -webkit-fill-available;
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

textarea,
input.text,
input[type="text"],
input[type="email"],
input[type="password"],
input[type="button"],
input[type="submit"],
.input-checkbox {
-webkit-appearance: none;
border-radius: 0;
}

</style>