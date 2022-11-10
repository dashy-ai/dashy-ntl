<template>
  <div class="bg-black text-white w-screen h-screen flex justify-center">

    <!-- STEP 1 -->

    <div v-if="step1" class="sm:h-80 w-[80%] h-screen z-10 step1 flex flex-col justify-start">

      <!-- left -->

      <div class="h-[30vh] w-full flex flex-col items-start justify-end">
        <div class="md:mt-56 md:ml-24 md:absolute text-slate-600 text-lg">
          Account Setup: Step 1/3
        </div>
        <div class="md:mt-64 md:ml-24 md:absolute text-white0 text-3xl">
          Let's get to know you!
        </div>
      </div>

      <button class="z-10 relative h-[10vh] pr-1 w-full top-[40vh] md:top-[202px] md:left-[680px] md:w-44 flex justify-end" @click="goToStep2">
          <svg class="-rotate-90 w-10 h-14 md:w-20 md:h-28" viewBox="0 0 92 159" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M40.7216 0L43.7377 140.969C43.7377 140.969 37.2022 108.732 2.81487e-05 108.732C5.42783e-05 112.557 -4.19512e-05 114.742 4.39703e-05 118.627C46.2514 118.627 44.7431 159 44.7431 159H46.2514C46.2514 159 46.2514 118.567 92 118.567C92 114.742 92 112.557 92 108.732C55.3006 108.732 47.7595 140.969 47.7595 140.969L50.2735 0H40.7216Z"
              fill="white" />
          </svg>
      </button>
      
      <div class="h-[60vh] md:h-full z-10 flex justify-center">
        <div class="text-1xl md:mt-32 md:ml-24 md:text-6xl items-center flex flex-col justify-start">

            <div class="flex w-full justify-between items-center mb-[3vh]">
              <span class="w-4/12">My name is</span>
              <input v-model="userInfo.name" type="text"
                    class="text-center text-2xl h-11 w-8/12 md:w-96 outline-[0px] bg-transparent md:h-24 border-b-[rgba(255,255,255,0.12)] border-b-2 px-0 text-white placeholder-[rgba(255,255,255,0.08)]"
                    placeholder="Cat McKitty" />
            </div>

            <div class="flex w-full justify-between items-center mb-[3vh]">
              <span class="work1 w-4/12">I work at</span>
            
              <input v-model="userInfo.company" type="text"
                    class="text-center work2 text-2xl h-11 w-8/12 md:w-96 outline-[0px] bg-transparent md:h-24 border-b-[rgba(255,255,255,0.12)] border-b-2 px-0 text-white placeholder-[rgba(255,255,255,0.08)]"
                    placeholder="The Milk Bowl Inc." />
            </div> 

            <div class="flex w-full justify-between items-center">
              <span class="team1 w-12">in the</span>
              <input v-model="userInfo.team" type="text"
                    class="text-center w-7/12 text-2xl h-11 team2 md:w-96 outline-[0px] bg-transparent md:h-24 border-b-[rgba(255,255,255,0.12)] border-b-2 px-0 text-white placeholder-[rgba(255,255,255,0.08)]"
                    placeholder="Meow" />
              <span class="team1 w-min">team.</span>
            </div>


        </div>

      </div>

    </div>
    

    <!-- Step 2 -->

    <div v-if="step2" class="z-10 step1 w-full">

      <div class="mt-56 ml-24 md:absolute text-slate-600 text-lg">
        Account Setup: Step 2/3
      </div>
      <div class="mt-64 ml-24 md:absolute text-white0 text-3xl">
        Let's create your first project!
      </div>

      <button class="z-10 md:absolute top-[202px] left-[680px] w-44 pr-7 flex justify-end" @click="goToStep3">
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
              <input v-model="projectInfo.name" type="text"
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

      <div class="mt-56 ml-24 md:absolute text-slate-600 text-lg">
        Account Setup: Step 3/3
      </div>
      <div class="mt-64 ml-24 md:absolute text-white0 text-3xl">
        Now, let's set up your project!
      </div>

      <button class="z-10 md:absolute top-[202px] left-[680px] w-44 pr-7 flex justify-end" @click="goToStep1">
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
              <input type="text"
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
        <!-- {{ userInfo.name }} , {{ userInfo.company }} , {{ userInfo.team }}
        <p> {{ userInfo }}</p>
        {{ projectInfo.name }}
        <p> {{ projectInfo }}</p> -->
      </div>

  </div>
</template>


<script setup>

// const name = ref('')
// const company = ref('')
// const team = ref('')

const step1 = ref(true)
const step2 = ref()
const step3 = ref()

const userInfo = reactive({
    user_id: "",
    name: "",
    company: "",
    team: "",
    email: "",
    displayName: "",
    emailVerified: "",
    isAnonymous: "",
    createdAt: "",
    lastLoginAt: "",
    phoneNumber: "",
    photoURL: "",
    providerId: "",
    tenantId: "",
  });

const projectInfo = ref({
  name: "",
  company: userInfo.company,
  team: userInfo.team,
});

 

const submitStep1 = async (uInfo) => {
  const result = await addFirestoreUser("users", uInfo);
  console.log(`submitStep1: result is :${JSON.stringify(result, null, 4)}`)
  // document.getElementById("form").reset();
  console.log(`submitStep1: uInfo is :${JSON.stringify(uInfo, null, 4)}`)
  // const response = await getFirestoreData("users");
  // console.log(`response is :${JSON.stringify(response, null, 4)}`)
};

const goToStep2 = () => {
  console.log(`goToStep2 clicked :submitStep1() fired`)
  submitStep1(userInfo)
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

onMounted(async () => {
  const firebaseUser = await useFirebaseUser();
  const uid = firebaseUser.value.uid
  const email = firebaseUser.value.email
  const displayName = firebaseUser.value.displayName
  const emailVerified = firebaseUser.value.emailVerified
  const isAnonymous = firebaseUser.value.isAnonymous
  const createdAt = firebaseUser.value.metadata.createdAt
  const lastLoginAt = firebaseUser.value.metadata.lastLoginAt
  const phoneNumber = firebaseUser.value.phoneNumber
  const photoURL = firebaseUser.value.photoURL
  const providerId = firebaseUser.value.providerId
  const tenantId = firebaseUser.value.tenantId



  console.log(`setup.vue - uid = ${uid}`)
  console.log(`setup.vue - email = ${email}`)
  console.log(`setup.vue - displayName = ${displayName}`)
  console.log(`setup.vue - emailVerified = ${emailVerified}`)
  console.log(`setup.vue - isAnonymous = ${isAnonymous}`)
  console.log(`setup.vue - createdAt = ${createdAt}`)
  console.log(`setup.vue - phoneNumber = ${phoneNumber}`)
  console.log(`setup.vue - photoURL = ${photoURL}`)
  console.log(`setup.vue - providerId = ${providerId}`)
  console.log(`setup.vue - tenantId = ${tenantId}`)


  userInfo.user_id = uid
  userInfo.email = email
  userInfo.displayName = displayName
  userInfo.emailVerified = emailVerified
  userInfo.isAnonymous = isAnonymous
  userInfo.createdAt = createdAt
  userInfo.lastLoginAt = lastLoginAt
  userInfo.phoneNumber = phoneNumber
  userInfo.photoURL = photoURL
  userInfo.providerId = providerId
  userInfo.tenantId = tenantId


  console.log(firebaseUser.value)

})

</script>


<style>
  .bgright {
    position: absolute;
    bottom: 0;
    right: 0;
  }
</style>