<script setup lang="ts">
import { useState } from "#app";

const user = false // useState('user')
const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme
}

console.log('------ APP ------')
const firebaseUser = useFirebaseUser();


const credentials = ref()
const signInForm = ref()
const signUpForm = ref()
const userMenu = ref()
const email = ref('')
const password = ref('')
const userInitials = ref()

function convertUserInitials() {
  const emailadress = firebaseUser.email
  const converted = emailadress.substring(0, 1)
  return converted

}
function toggleSignIn() {
  signInForm.value = !signInForm.value;
  console.log(signInForm.value);
};

function toggleSignUp() {
  signUpForm.value = !signUpForm.value;
  console.log(signUpForm.value);
};

function toggleUserMenu() {
  userMenu.value = !userMenu.value;
  console.log(userMenu.value);
};

const signUp = async () => {
  credentials.value = await createUser(email.value, password.value)
  toggleSignUp()
  console.log('SignUp : Credentials:', credentials)
  console.log(`SignUp: passed ${email.value},${password.value}`)
  const router = useRouter()
  console.log(`credentials.value is = ${credentials.value}`)
  if (credentials.value) {
    await router.push({ path: "/setup" });
  } 
}

const signIn = async () => {
  credentials.value = await signInUser(email.value, password.value)
  toggleSignIn()
  console.log('SignIn : Credentials:', credentials)
  console.log(`SignIn: passed ${email.value},${password.value}  `)
  const router = useRouter()
  console.log(`credentials.value is = ${credentials.value}`)
  if (credentials.value) {
    await router.push({ path: "/setup" });
  } 
}

const signOut = async () => {
  credentials.value = await signOutUser()
  const router = useRouter()
  if (!credentials.value) {
    await router.push({ path: "/" });
  } 
}


onMounted(async () => {
  // Register

  // const email = 'dberlin@bannerflow.com'
  // const password = '12345678'
  // const credentials = await createUser(email, password)
  // console.log('Credentials:', credentials)

  // Sign In



  // Sign Out



});

</script>
    
<template>
  <!-- <div class="dark:transparent z-10 absolute top-0 w-screen"> -->
  <div class="bg-transparent z-20 absolute w-screen" :class="firebaseUser ? 'nav-cont' : 'nav-cont'"> <!-- TODO: 'h-full' : 'nav-cont' -->
    <div class="bg-transparent w-screen px-20">
      <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
        <div class="logo-container z-10">
          <nuxt-link to="/" tag="div">
            <img v-if="$colorMode.value == 'dark'" class="logo" src="/img/dashy-white.png" />
            <img v-if="$colorMode.value == 'light'" class="logo" src="/img/dashy-black.png" />
          </nuxt-link>
        </div>

        <div class="md:flex items-center justify-end md:flex-1 lg:w-0">

          <button v-if="!firebaseUser" @click="toggleSignIn()"
            class="h-14 hover:bg-neutral-500 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full font-medium text-gray-700 hover:text-gray-500 hover:bg-opacity-10">
            Sign in
          </button>

          <button v-if="!firebaseUser" @click="toggleSignUp()"
            class="h-14 ml-6 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm font-small text-gray-300 hover:text-gray-500 dark:bg-neutral-900 bg-black hover:bg-grey-500">
            Sign up
          </button>
 
          <button v-if="firebaseUser" @click="signOut"
              class="z-20 test2 h-14 ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm font-small text-gray-300 hover:text-gray-500 dark:bg-neutral-900 bg-black hover:bg-grey-500">
              Sign Out
          </button>
          <button v-if="firebaseUser"
            class="z-10 h-14 ml-6 whitespace-nowrap inline-flex items-center justify-end px-4 py-2 border border-transparent rounded-full shadow-sm font-small text-gray-300 hover:text-gray-500 dark:bg-neutral-900 bg-black hover:bg-grey-500">
             {{ firebaseUser.email }} 
          </button>
          <!-- @click="toggleUserMenu() -->

          
        </div>
        <button v-if="!firebaseUser" class="hidden md:block" @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')">
          <svg v-if="$colorMode.value == 'light'" xmlns="http://www.w3.org/2000/svg"
            class="light-icon h-7 w-7 text-gray-50" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" 
            class="dark-icon h-7 w-7" viewBox="0 0 20 20">
            <path fill-rule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clip-rule="evenodd" />
          </svg>
        </button>
      </div>

      <div v-if="signInForm" class="absolute top-0 left-0 w-screen h-screen backdrop-blur-xl">
        <div class="flex justify-end w-screen h-32 bg-transparent items-center pr-10">
          <button class="pr-20 mt-2" @click="toggleSignIn()">
            <svg class="rotate-90" width="92" height="111" viewBox="0 0 92 159" fill="none"
              xmlns="http://www.w3.org/2000/svg">c
              <path
                d="M40.7216 0L43.7377 140.969C43.7377 140.969 37.2022 108.732 2.81487e-05 108.732C5.42783e-05 112.557 -4.19512e-05 114.742 4.39703e-05 118.627C46.2514 118.627 44.7431 159 44.7431 159H46.2514C46.2514 159 46.2514 118.567 92 118.567C92 114.742 92 112.557 92 108.732C55.3006 108.732 47.7595 140.969 47.7595 140.969L50.2735 0H40.7216Z"
                fill="white" />
            </svg>
          </button>
        </div>
        <div class="bg-transparent h-full w-screen flex flex-col">
          <div class="pt-32 w-full h-3/5 flex justify-center">
            <div class="h-full w-2/4 flex justify-end bg-transparent flex-col">
              <input v-model="email" type="email"
                class="outline-[0px] bg-transparent h-36 border-b-white border-b-2 text-7xl px-0 text-white placeholder-white"
                placeholder="Email">
              <input v-model="password" type="password"
                class="outline-[0px] mt-8 h-36 border-b-white border-b-2 bg-transparent px-0 text-7xl text-white placeholder-white"
                placeholder="Password">
              <button @click="signIn"
                class="mt-14 w-48 mt-ml-8 text-4xl whitespace-nowrap inline-flex items-center justify-center px-4 pt-6 pb-7 border-2 border-white rounded-full shadow-sm font-small text-white hover:text-gray-500 dark:bg-transparent bg-transparent hover:bg-grey-500">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>

      <div v-if="signUpForm" class="absolute top-0 left-0 w-screen h-screen backdrop-blur-xl">
        <div class="flex justify-end w-screen h-32 bg-transparent items-center pr-10">
          <button class="pr-20 mt-2" @click="toggleSignUp()">
            <svg class="rotate-90" width="92" height="111" viewBox="0 0 92 159" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M40.7216 0L43.7377 140.969C43.7377 140.969 37.2022 108.732 2.81487e-05 108.732C5.42783e-05 112.557 -4.19512e-05 114.742 4.39703e-05 118.627C46.2514 118.627 44.7431 159 44.7431 159H46.2514C46.2514 159 46.2514 118.567 92 118.567C92 114.742 92 112.557 92 108.732C55.3006 108.732 47.7595 140.969 47.7595 140.969L50.2735 0H40.7216Z"
                fill="white" />
            </svg>
          </button>
        </div>
        <div class="bg-transparent h-full w-screen flex flex-col">
          <div class="pt-32 w-full h-3/5 flex items-start justify-center">
            <div class="h-full w-2/4 flex justify-end bg-transparent flex-col">
              <input v-model="email" type="email"
                class="outline-[0px] bg-transparent h-36 border-b-white border-b-2 text-7xl px-0 text-white placeholder-white"
                placeholder="Email">
              <input v-model="password" type="password"
                class="outline-[0px] mt-8 h-36 border-b-white border-b-2 bg-transparent px-0 text-7xl text-white placeholder-white"
                placeholder="Password">
              <button @click="signUp"
                class="mt-14 w-48 mt-ml-8 text-4xl whitespace-nowrap inline-flex items-center justify-center px-4 pt-6 pb-7 border-2 border-white rounded-full shadow-sm font-small text-white hover:text-gray-500 dark:bg-transparent bg-transparent hover:bg-grey-500">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>

      <div v-if="userMenu"
        class="pt-20 z-0 absolute top-0 left-0 w-screen h-screen backdrop-blur-xl">
        <div class="w-screen h-screen flex justify-end">
          <div class="p-20 grid grid-cols-3 grid-rows-4 gap-4 h-screen w-screen">

            <div class="bg-transparent border-b-2 border-white ">test</div>
            <div class="bg-white">test</div>
            <div class="bg-white">test</div>

            <div class="bg-white">test</div>
            <div class="bg-white">test</div>
            <div class="bg-white">test</div>

            <div class="bg-white">test</div>
            <div class="bg-white">test</div>
            <div class="bg-white">test</div>
          </div>
        </div>
          User Menu
      </div>

    </div>
  </div>
</template>

    <style>
.background {
  background-color: #000;
}

.logo {
  width: 150px;
}

.dark-icon {
  fill: #232323;
}

.light-icon {
  fill: #131313;
}
input[type="email"]:-webkit-autofill{
  background-color: transparent !important;
}
input[type="password"]:-webkit-autofill{
  background-color: transparent !important;
}

/* .buttonmenu {
  width: 148px;
  transition: width 0.3s cubic-bezier(0.5, 1, 0.89, 1);
}

.buttonmenu:hover {
  width: 200px;
} */

.test {
  opacity: 0;
}
.buttonmenu:hover .test {
  opacity: 1;
  transition: opacity 0.2s cubic-bezier(0.5, 1, 0.89, 1) 0.3s;
}


</style>