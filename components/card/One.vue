<template>
  <div class="myimg text-gray-500 h-[40vh] flex flex-col justify-between rounded-lg mr-[40px] w-[70%]" data-color="#000">
        <div class="flex flex-col">
          <span class="truncate text-[2.7vh]">
            {{ title }}
          </span>
          <!-- <span class="h-[6vh] text-[1.8vh] line-clamp-2 [white-space:break-spaces]">Do veniam deserunt anim irure minim veniam officia velit proident cupidatat nulla.</span> -->
          <span class="text-[1.8vh] truncate">{{ description }}<!-- Do veniam deserunt anim irure minim veniam officia velit proident cupidatat nulla. --></span>
        </div>
        
        <div class="relative z-0">
          <img class="object-cover rounded-xl h-[25vh] w-[100%] shadow-xl"
          :src="imgPath" />
          <div class="bg-gradient-to-t from-black opacity-50 border border-gray-800 rounded-xl absolute inset-0 flex justify-center items-center z-1">
          </div>
        </div>

        <div class="flex justify-between h-[4.6vh] overflow-hidden">
          <div class="flex flex-row">
            <div class="h-[4vh] w-[4vh] mr-4">
              <!-- <img src="https://logo.clearbit.com/segment.com?size=90"> -->
              <img :src="logoPath" />
            </div>
            <div class="flex flex-col items-start text-[1.6vh]">
              <span class="-translate-y-[0.3vh]">{{ username }}</span>
              <span class="-translate-y-[0.3vh]">{{ company }}</span>
            </div>
          </div>
          <div class="flex flex-row flex-wrap justify-end w-[40vw]">
            <div class="mr-2 mb-1 border border-gray-900 rounded-lg flex items-center justify-center px-1 h-[2vh] text-[1vh]" v-for="tag in tags"> {{ tag }} </div>
          </div>
        </div>
        
        
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
  imgPath: string
  logoPath: string
  username: string
  company: string
  tags?: array
}>()

</script>

<style scoped>
  .myimg {
  transition: 0.3s;
}
</style>