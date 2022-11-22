<template>
  <div class="bg-black text-white w-screen h-screen flex justify-center lg:justify-start">

      <!-- STEP 1 -->

      <div v-if="step1" class="w-screen h-screen z-10 step1 flex flex-col justify-start items-center">
        <div class="h-screen w-[80%] md:w-[85%] lg:w-[90%]">
          <div class="h-screen w-full lg:w-[50%] xl:w-[40%]">



                <div class="h-[25vh] w-full flex flex-col items-start justify-end">
                  <div class="text-slate-600 text-lg">
                    Account Setup: Step 1/3
                  </div>
                  <div class="text-white text-3xl">
                    Let's get to know you
                  </div>
                </div>
                
                <div class="h-[60vh] z-10 flex flex-col text-2xl justify-around pt-20">
                  <div class="w-full items-center flex flex-col">

                      <div class="flex w-full justify-between items-center mb-[4vh]">
                        <span class="flex-shrink-0 mr-6">My name is</span>
                        <input v-model="userInfo.name" type="text"
                              class="text-center text-2xl w-full h-14 flex-shrink outline-[0px] bg-transparent border-b-[rgba(255,255,255,0.12)] text-slate-600 border-b-2 px-0 placeholder-[rgba(255,255,255,0.08)]"
                              placeholder="Cat McKitty" />
                      </div>

                      <div class="flex w-full justify-between items-center mb-[4vh]">
                        <span class="flex-shrink-0 mr-6">I work at</span>
                        <input v-model="userInfo.company" type="text"
                              class="text-center work2 text-2xl h-14 w-full outline-[0px] bg-transparent border-b-[rgba(255,255,255,0.12)] text-slate-600 border-b-2 px-0 placeholder-[rgba(255,255,255,0.08)]"
                              placeholder="The Milk Bowl Inc." />
                      </div> 

                      <div class="flex w-full justify-between items-center">
                        <span class="flex-shrink-0 mr-6">in the</span>
                        <input v-model="userInfo.team" type="text"
                              class="text-center w-full text-2xl h-14 outline-[0px] bg-transparent border-b-[rgba(255,255,255,0.12)] text-slate-600 border-b-2 px-0  placeholder-[rgba(255,255,255,0.08)]"
                              placeholder="Meow" />
                        <span class="w-20 ml-4 flex flex-shrink-0 justify-end">team.</span>
                      </div>
                  </div>
                  <div class="w-full items-center flex justify-end pr-2">
                      <button class="" @click="goToStep2">
                        <svg class="-rotate-90 w-10 h-14" viewBox="0 0 92 159" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M40.7216 0L43.7377 140.969C43.7377 140.969 37.2022 108.732 2.81487e-05 108.732C5.42783e-05 112.557 -4.19512e-05 114.742 4.39703e-05 118.627C46.2514 118.627 44.7431 159 44.7431 159H46.2514C46.2514 159 46.2514 118.567 92 118.567C92 114.742 92 112.557 92 108.732C55.3006 108.732 47.7595 140.969 47.7595 140.969L50.2735 0H40.7216Z"
                            fill="white" />
                        </svg>
                      </button>
                  </div>
                </div>


            </div>
          </div>
      </div>
    

    <!-- Step 2 -->

     <div v-if="step2" class="w-screen h-screen z-10 step1 flex flex-col justify-start items-center">
        <div class="h-screen w-[80%] md:w-[85%] lg:w-[90%]">
          <div class="h-screen w-full lg:w-[50%] xl:w-[40%]">



                <div class="h-[25vh] w-full flex flex-col items-start justify-end">
                  <div class="text-slate-600 text-lg">
                    Account Setup: Step 2/3
                  </div>
                  <div class="text-white text-3xl">
                    Let's create your first project
                  </div>
                </div>
                
                <div class="h-[60vh] z-10 flex flex-col text-2xl justify-around pt-20">

                  <div class="w-full items-center flex flex-col justify-start">
                      <div class="flex w-full justify-between items-center">
                        <span class="flex-shrink-0 mr-6">Project Name</span>
                        <input v-model="projectInfo.name" type="text"
                              class="text-center text-2xl w-full h-14 flex-shrink outline-[0px] bg-transparent border-b-[rgba(255,255,255,0.12)] border-b-2 px-0 text-white placeholder-[rgba(255,255,255,0.08)]"
                              placeholder="My first project" />
                      </div>
                  </div>

                  <div>
                      <div class="flex w-full justify-between items-center md:text-sm text-[2.2vw]  text-slate-600">
                            <div class="border-slate-900 border rounded-lg h-16 w-[30%] flex justify-center items-center"><span>Correlations</span></div>
                            <div class="border-slate-900 border rounded-lg h-16 w-[30%] flex justify-center items-center"><span>Predictions</span></div>
                            <div class="border-slate-900 border rounded-lg h-16 w-[30%] flex justify-center items-center"><span>Classify & Cluster</span></div>
                      </div>
                      <div class="flex w-full justify-between items-center mt-4 md:text-sm text-[2.2vw]  text-slate-600">
                            <div class="border-slate-900 border rounded-lg h-16 w-[30%] flex justify-center items-center"><span>Drivers & Causes</span></div>
                            <div class="border-slate-900 border rounded-lg h-16 w-[30%] flex justify-center items-center"><span>Recommendations</span></div>
                            <div class="border-slate-900 border rounded-lg h-16 w-[30%] flex justify-center items-center"><span>Personlization</span></div>
                      </div>
                      <div class="flex w-full justify-between items-center mt-4 md:text-sm text-[2.2vw]  text-slate-600">
                            <div class="border-slate-900 border rounded-lg h-16 w-[30%] flex justify-center items-center"><span>Data Connections</span></div>
                            <div class="border-slate-900 border rounded-lg h-16 w-[30%] flex justify-center items-center"><span>Look-a-likes</span></div>
                            <div class="border-slate-900 border rounded-lg h-16 w-[30%] flex justify-center items-center"><span>Optimizations</span></div>
                      </div>
                  </div>

                  <div class="w-full flex justify-between pr-2">

                      <button class="inline-block" @click="goToStep1">
                        <svg class="rotate-90 w-10 h-14" viewBox="0 0 92 159" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M40.7216 0L43.7377 140.969C43.7377 140.969 37.2022 108.732 2.81487e-05 108.732C5.42783e-05 112.557 -4.19512e-05 114.742 4.39703e-05 118.627C46.2514 118.627 44.7431 159 44.7431 159H46.2514C46.2514 159 46.2514 118.567 92 118.567C92 114.742 92 112.557 92 108.732C55.3006 108.732 47.7595 140.969 47.7595 140.969L50.2735 0H40.7216Z"
                            fill="white" />
                        </svg>
                      </button>

                      <button class="inline-block" @click="goToStep3">
                        <svg class="-rotate-90 w-10 h-14" viewBox="0 0 92 159" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M40.7216 0L43.7377 140.969C43.7377 140.969 37.2022 108.732 2.81487e-05 108.732C5.42783e-05 112.557 -4.19512e-05 114.742 4.39703e-05 118.627C46.2514 118.627 44.7431 159 44.7431 159H46.2514C46.2514 159 46.2514 118.567 92 118.567C92 114.742 92 112.557 92 108.732C55.3006 108.732 47.7595 140.969 47.7595 140.969L50.2735 0H40.7216Z"
                            fill="white" />
                        </svg>
                      </button>

                  </div>
                </div>


            </div>
          </div>
      </div>


    <!-- Step 3 -->

    <div v-if="step3" class="w-screen h-screen z-10 step1 flex flex-col justify-start items-center">
        <div class="h-screen w-[80%] md:w-[85%] lg:w-[90%]">
          <div class="h-screen w-full lg:w-[50%] xl:w-[40%]">



                <div class="h-[25vh] w-full flex flex-col items-start justify-end">
                  <div class="text-slate-600 text-lg">
                    Account Setup: Step 3/3
                  </div>
                  <div class="text-white text-3xl">
                    Choose a template
                  </div>
                </div>
                
                <div class="h-[60vh] z-10 flex flex-col text-2xl justify-around pt-20">

                  <div>
                      <div class="flex w-full justify-between items-center md:text-sm text-[2.2vw]  text-slate-600">
                            <div class="border-slate-900 border rounded-lg h-16 w-[30%] flex justify-center items-center"><span>Correlations</span></div>
                            <div class="border-slate-900 border rounded-lg h-16 w-[30%] flex justify-center items-center"><span>Predictions</span></div>
                            <div class="border-slate-900 border rounded-lg h-16 w-[30%] flex justify-center items-center"><span>Classify & Cluster</span></div>
                      </div>
                      <div class="flex w-full justify-between items-center mt-4 md:text-sm text-[2.2vw]  text-slate-600">
                            <div class="border-slate-900 border rounded-lg h-16 w-[30%] flex justify-center items-center"><span>Drivers & Causes</span></div>
                            <div class="border-slate-900 border rounded-lg h-16 w-[30%] flex justify-center items-center"><span>Recommendations</span></div>
                            <div class="border-slate-900 border rounded-lg h-16 w-[30%] flex justify-center items-center"><span>Personlization</span></div>
                      </div>
                      <div class="flex w-full justify-between items-center mt-4 md:text-sm text-[2.2vw]  text-slate-600">
                            <div class="border-slate-900 border rounded-lg h-16 w-[30%] flex justify-center items-center"><span>Data Connections</span></div>
                            <div class="border-slate-900 border rounded-lg h-16 w-[30%] flex justify-center items-center"><span>Look-a-likes</span></div>
                            <div class="border-slate-900 border rounded-lg h-16 w-[30%] flex justify-center items-center"><span>Optimizations</span></div>
                      </div>
                  </div>

                  <div class="w-full flex justify-between pr-2">

                      <button class="inline-block" @click="goToStep2">
                        <svg class="rotate-90 w-10 h-14" viewBox="0 0 92 159" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M40.7216 0L43.7377 140.969C43.7377 140.969 37.2022 108.732 2.81487e-05 108.732C5.42783e-05 112.557 -4.19512e-05 114.742 4.39703e-05 118.627C46.2514 118.627 44.7431 159 44.7431 159H46.2514C46.2514 159 46.2514 118.567 92 118.567C92 114.742 92 112.557 92 108.732C55.3006 108.732 47.7595 140.969 47.7595 140.969L50.2735 0H40.7216Z"
                            fill="white" />
                        </svg>
                      </button>

                  </div>
                </div>


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


definePageMeta({
  middleware: ['auth']
})

const userIdFromCookie = useCookie('userCookie');


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

const projectInfo = reactive({
  name: "",
  company: userInfo.company,
  team: userInfo.team,
});


const submitStep1 = async (uInfo) => {

  const fuserdata = await getFirestoreDoc("users", uInfo.user_id)
  const fUser = fuserdata.result
  const fUserUpToDate = (fUser.name !== "") ? "true" : "false"
  const result = await addFirestoreUser("users", uInfo);

};

const goToStep2 = () => {

  submitStep1(userInfo);
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

  const userIdFromCookie = useCookie('userCookie');
  const uidstring = userIdFromCookie.value.toString()

  const { $auth } = useNuxtApp()
  const userId = $auth?.currentUser?.uid


  const { result } = await getFirestoreDoc("users", uidstring)
  const firebaseUser = result

  const uid = firebaseUser.user_id
  const email = firebaseUser.email
  const displayName = firebaseUser.displayName
  const emailVerified = firebaseUser.emailVerified
  const isAnonymous = firebaseUser.isAnonymous
  const createdAt = firebaseUser.createdAt
  const lastLoginAt = firebaseUser.lastLoginAt
  const phoneNumber = firebaseUser.phoneNumber
  const photoURL = firebaseUser.photoURL
  const providerId = firebaseUser.providerId
  const tenantId = firebaseUser.tenantId
  const name = firebaseUser.name
  const team = firebaseUser.team
  const company = firebaseUser.company

  userInfo.user_id = (userInfo.user_id == "") ? uid : userInfo.user_id 
  userInfo.email = (userInfo.email == "") ? email : userInfo.email
  userInfo.name = (userInfo.name == "") ? name : userInfo.name
  userInfo.company = (userInfo.company == "") ? company : userInfo.company
  userInfo.team = (userInfo.team == "") ? team : userInfo.team
  userInfo.displayName = (userInfo.displayName == "") ? displayName : userInfo.displayName
  userInfo.emailVerified = (userInfo.emailVerified == "") ? emailVerified : userInfo.emailVerified
  userInfo.isAnonymous = (userInfo.isAnonymous == "") ? isAnonymous : userInfo.isAnonymous
  userInfo.createdAt = (userInfo.createdAt == "") ? createdAt : userInfo.createdAt
  userInfo.lastLoginAt = (userInfo.lastLoginAt == "") ? lastLoginAt : userInfo.lastLoginAt
  userInfo.phoneNumber = (userInfo.phoneNumber == "") ? phoneNumber : userInfo.phoneNumber
  userInfo.photoURL = (userInfo.photoURL == "") ? photoURL : userInfo.photoURL
  userInfo.providerId = (userInfo.providerId == "") ? providerId : userInfo.providerId
  userInfo.tenantId = (userInfo.tenantId == "") ? tenantId : userInfo.tenantId

 
})

</script>


<style>
  .bgright {
    position: absolute;
    bottom: 0;
    right: 0;
  }
</style>