<template>
  <div>
    test1 : {{ thistest }}, test2 : {{ thattest }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  thistest: string
  thattest: string
}>()

</script>
