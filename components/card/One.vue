<template>
  <div class="myimg dark:text-gray-600 text-black flex flex-col justify-between rounded-sm w-[80vw] md:w-[70vw] lg:w-[50vw] xl:w-[30vw] mr-[30px] md:mr-[4vw]" data-color="#000">
        
        <div class=" text-gray-400 relative z-0 h-[32vh] w-[80vw] md:w-[70vw] lg:w-[50vw] xl:w-[30vw] dark:border-gray-900 dark:border">
          <img class="absolute object-cover rounded-t-sm h-full w-[100%] shadow-xl"
          :src="imgPath" />
          <div class="absolute px-[11px] bg-gradient-to-t from-black opacity-50 rounded-sm inset-0 flex justify-start items-end z-10">
                <span class="z-20 absolute pl-1 pb-2 truncate text-[2.7vh] md:text-[4vh] font-['Inktrap-light']">
                  {{ title }}
                </span>
          </div>
        </div>

        <div class="flex text-gray-600 justify-between h-[7vh] overflow-hidden pt-[2vh]">
          <div class="pl-3 flex flex-row">
            <div class="mr-4 h-[3.5vh] w-[3.5vh] flex justify-center items-center pb-1">
              <!-- <img src="https://logo.clearbit.com/segment.com?size=90"> -->
              <img class="grayscale-[100%] mix-blend-multiply h-[3.5vh] w-[3.5vh]" :src="logoPath" />
            </div>
            <div class="flex flex-col items-start text-[1.7vh] leading-[2vh] md:text-[2vh] md:leading-[2.4vh]">
              <span class="-translate-y-[0.3vh]">{{ username }}</span>
              <span class="-translate-y-[0.3vh]">{{ company }}</span>
            </div>
          </div>
          <div class="flex flex-row flex-wrap justify-end">
            <div class="mr-4 mb-9 rounded-md border border-gray-500 dark:border-gray-900 dark:border flex items-center justify-center px-2 h-[4vh] text-[1.6vh]" v-for="tag in tags"> {{ tag }} </div>
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