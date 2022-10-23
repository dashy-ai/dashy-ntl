<template>
  <div class="bg-black text-white w-full h-full flex pb-16">

    <!-- STEP 1 -->

    <div v-if="step1" class="z-10 step1 w-full">

      <!-- left -->
      <div class="mt-56 ml-24 absolute text-slate-600 text-lg">
        Account Setup: Step 1/3
      </div>
      <div class="mt-64 ml-24 absolute text-white0 text-3xl">
        Let's get to know you!
      </div>

      <button class="z-10 absolute top-[202px] left-[680px] w-44 pr-7 flex justify-end" @click="goToStep2">
          <svg class="-rotate-90" width="92" height="111" viewBox="0 0 92 159" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M40.7216 0L43.7377 140.969C43.7377 140.969 37.2022 108.732 2.81487e-05 108.732C5.42783e-05 112.557 -4.19512e-05 114.742 4.39703e-05 118.627C46.2514 118.627 44.7431 159 44.7431 159H46.2514C46.2514 159 46.2514 118.567 92 118.567C92 114.742 92 112.557 92 108.732C55.3006 108.732 47.7595 140.969 47.7595 140.969L50.2735 0H40.7216Z"
              fill="white" />
          </svg>
      </button>
      
      <div class="h-full w-full z-10 flex">
        <div class="mt-32 ml-24 w-4/5 text-6xl flex items-center">
          <div class="h-72 w-full text-white flex flex-col">
            <div>
              <span class="mr-8">My name is</span>
              <input v-model="name" type="text"
                    class="text-center w-96 mr-8 outline-[0px] bg-transparent h-24 border-b-white border-b-2 px-0 text-white placeholder-white"
                    placeholder="" />
            </div>
            <div>
            <span class="work1 mr-8">and I work at</span>
            
            <input v-model="company" type="text"
                    class="text-center work2 w-96 outline-[0px] bg-transparent h-24 border-b-white border-b-2 px-0 text-white placeholder-white"
                    placeholder="" />
            </div> 
            <div>
              <span class="team1 mr-8">in the</span>
              <input v-model="team" type="text"
                    class="text-center team2 w-96 outline-[0px] bg-transparent h-24 border-b-white border-b-2 px-0 text-white placeholder-white"
                    placeholder="" />
              <span class="team1 mx-8">team.</span>
            </div>
          </div>
        </div>

        <div class="w-1/5 flex mt-56 justify-end z-10">
        </div>

      </div>
    </div>
    <div v-if="step1" class="absolute h-full w-full bg-blue-400">
      <div class="w-[930px] h-full bg-black"></div>
    </div>
    

    <!-- Step 2 -->

    <div v-if="step2" class="z-10 step1 w-full">

      <div class="mt-56 ml-24 absolute text-slate-600 text-lg">
        Account Setup: Step 2/3
      </div>
      <div class="mt-64 ml-24 absolute text-white0 text-3xl">
        Let's create your first project!
      </div>

      <button class="z-10 absolute top-[202px] left-[680px] w-44 pr-7 flex justify-end" @click="goToStep3">
        <svg class="-rotate-90" width="92" height="111" viewBox="0 0 92 159" fill="none"
            xmlns="http://www.w3.org/2000/svg">
          <path
              d="M40.7216 0L43.7377 140.969C43.7377 140.969 37.2022 108.732 2.81487e-05 108.732C5.42783e-05 112.557 -4.19512e-05 114.742 4.39703e-05 118.627C46.2514 118.627 44.7431 159 44.7431 159H46.2514C46.2514 159 46.2514 118.567 92 118.567C92 114.742 92 112.557 92 108.732C55.3006 108.732 47.7595 140.969 47.7595 140.969L50.2735 0H40.7216Z"
              fill="white" />
        </svg>
      </button>

      <div class="h-full w-full z-10 flex">
        <div class="mt-32 ml-24 w-4/5 text-6xl flex items-center">
          <div class="h-72 w-full text-white flex flex-col">
            <div>
              <span class="mr-8">Project Name</span>
              <input v-model="name" type="text"
                    class="text-center w-[365px] mr-8 outline-[0px] bg-transparent h-24 border-b-white border-b-2 px-0 text-white placeholder-white"
                    placeholder="" />
            </div>
          </div>
        </div>

        <div class="w-1/5 flex mt-56 justify-end z-10">
        </div>
      </div>
    </div>


    <!-- Step 3 -->

    <div v-if="step3" class="z-10 step1 w-full">

      <div class="mt-56 ml-24 absolute text-slate-600 text-lg">
        Account Setup: Step 3/3
      </div>
      <div class="mt-64 ml-24 absolute text-white0 text-3xl">
        Now, let's set up your project!
      </div>

      <button class="z-10 absolute top-[202px] left-[680px] w-44 pr-7 flex justify-end" @click="goToStep1">
        <svg class="-rotate-90" width="92" height="111" viewBox="0 0 92 159" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
              d="M40.7216 0L43.7377 140.969C43.7377 140.969 37.2022 108.732 2.81487e-05 108.732C5.42783e-05 112.557 -4.19512e-05 114.742 4.39703e-05 118.627C46.2514 118.627 44.7431 159 44.7431 159H46.2514C46.2514 159 46.2514 118.567 92 118.567C92 114.742 92 112.557 92 108.732C55.3006 108.732 47.7595 140.969 47.7595 140.969L50.2735 0H40.7216Z"
              fill="white" />
        </svg>
      </button>

      <div class="h-full w-full z-10 flex">
        <div class="mt-32 ml-24 w-4/5 text-6xl flex items-center">
          <div class="h-72 w-full text-white flex flex-col">
            <div>
              <span class="mr-8">Project Name</span>
              <input v-model="name" type="text"
                    class="text-center w-96 mr-8 outline-[0px] bg-transparent h-24 border-b-white border-b-2 px-0 text-white placeholder-white"
                    placeholder="" />
            </div>
          </div>
        </div>

        <div class="w-1/5 flex mt-56 justify-end z-10">
        </div>
      </div>
    </div>

    <!-- BACKGROUND IMAGE -->

      <div class="bgright z-0">
        <img src="/img/bg-right.svg" />
      </div>

  </div>
</template>


<script setup>

const name = ref('')
const company = ref('')
const team = ref('')
const step1 = ref(true)
const step2 = ref()
const step3 = ref()

const goToStep2 = () => {
  step1.value = false
  step2.value = true
  step3.value = false
}

const goToStep3 = () => {
  step1.value = false
  step2.value = false
  step3.value = true
}

const goToStep1 = () => {
  step1.value = true
  step2.value = false
  step3.value = false
}


</script>


<style>
  .bgright {
    position: absolute;
    bottom: 0;
    right: 0;
  }
</style>