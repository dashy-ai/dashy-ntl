<script setup lang="ts">
import { useState } from "#app";

const user = false // useState('user')
const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme
}

console.log('------ APP ------')
const firebaseUser = useFirebaseUser();

const uidState = useUid();

// refs
const credentials = ref()
const signInForm = ref()
const signUpForm = ref()
const userMenu = ref()
const email = ref('')
const password = ref('')
const randomUserImage = ref()
// const userInitials = ref()

const userDoc = reactive({
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

const userIdFromCookie = useCookie('userCookie');
const uidstring = userIdFromCookie.value

// TODO - Lifting upp getReloaduser for non-flicker navigation hydration
const getReloadUser = async () => {
    const { result } = await getFirestoreDoc("users", uidstring)
    console.log(`navbar.vue --> ALL PAGEVIEWS --> getFirestoreDoc("users", uidstring) --> uidstring : ${uidstring}`)
    console.log(`navbar.vue --> ALL PAGEVIEWS --> getFirestoreDoc("users", uidstring) --> result : ${result}`)
    console.log(`navbar.vue --> ALL PAGEVIEWS --> getFirestoreDoc("users", uidstring) --> randomUserImage.value before : ${randomUserImage.value}`)
    const fs_user = result
    randomUserImage.value = fs_user.photoURL
    console.log(`navbar.vue --> getReloadUser Triggered ... if (uidstring) ... --> sets randomUserImage.value to ${randomUserImage.value}`)
    return
  }

  if (uidstring) {
    getReloadUser() 
  }

// const { $auth } = useNuxtApp()
// const userId = $auth?.currentUser?.uid

function toggleSignIn() {
  signInForm.value = !signInForm.value;
  console.log(`navbar.vue --> signInform is : ${signInForm.value}`)
};

function toggleSignUp() {
  signUpForm.value = !signUpForm.value;
  console.log(`navbar.vue --> signUpform is : ${signUpForm.value}`)
};

function toggleUserMenu() {
  userMenu.value = !userMenu.value;
  console.log(`navbar.vue --> userMenu is : ${userMenu.value}`)
};

const signUp = async () => {
  credentials.value = await createUser(email.value, password.value)
  // toggleSignUp()
  signInForm.value = false
  signUpForm.value = false
  console.log(`navbar.vue --> signUpform is : ${signInForm.value}`)
  console.log(`navbar.vue --> signUpform is : ${signUpForm.value}`)

  const randomAvatar = randomizeUserImage(catAvatars)
  randomUserImage.value = randomAvatar

  const firebaseUserDoc = {
    "user_id" : credentials.value.user.uid,
    "email" : credentials.value.user.email,
    "emailVerified" : credentials.value.user.emailVerified,
    "isAnonymous" : credentials.value.user.isAnonymous,
    "createdAt" : credentials.value.user.metadata.createdAt,
    "lastLoginAt" : credentials.value.user.metadata.lastLoginAt,
    "photoURL" : randomAvatar,
    "name" : "",
    "company" : "",
    "team" : "",
    "displayName" : credentials.value.user.displayName,
    "phoneNumber" : credentials.value.user.phoneNumber,
    "providerId" : credentials.value.user.providerId,
    "tenantId" : credentials.value.user.auth.tenantId,
  };

    userDoc.user_id = credentials.value.user.uid
    userDoc.email = credentials.value.user.email
    userDoc.emailVerified = credentials.value.user.emailVerified
    userDoc.isAnonymous = credentials.value.user.isAnonymous
    userDoc.createdAt = credentials.value.user.metadata.createdAt
    userDoc.lastLoginAt = credentials.value.user.metadata.lastLoginAt
    userDoc.photoURL = randomAvatar
    userDoc.name = ""
    userDoc.company = ""
    userDoc.team = ""
    userDoc.displayName = credentials.value.user.displayName
    userDoc.phoneNumber = credentials.value.user.phoneNumber
    userDoc.providerId = credentials.value.user.providerId
    userDoc.tenantId = credentials.value.user.auth.tenantId


  const { result } = addFirestoreUser('users', firebaseUserDoc);
  console.log(`navbar.vue --> SIGNUP --> userDoc is : ${JSON.stringify(userDoc, null, 4)}`)
  // console.log(`navbar.vue --> SIGNUP --> addFirestoreUser('users', firebaseUserDoc) result is:  ${JSON.stringify(result, null, 4)}`)


 
  const router = useRouter()
  const newUser = true
  if (credentials.value) {
    await router.push({ path: "/setup" });
  } 
}

const mobileSignUp = async () => {
  credentials.value = await createUser(email.value, password.value)
  toggleSignIn()
    // TODO this creates user In Firestore without name, Then create user in firestore from setup will fire also once until name is added in setup step2. 
  addFirestoreUser(credentials.value.user);
  const router = useRouter()
  const newUser = true
  if (credentials.value) {
    await router.push({ path: "/setup" });
  } 
}

const signIn = async () => {

  credentials.value = await signInUser(email.value, password.value)
  toggleSignIn()
  const router = useRouter()
  const newUser = false
  const { result } = await getFirestoreDoc("users", credentials.value.user.uid)
  const fs_user = result
  const fs_userPhotoUrl = fs_user.photoURL
  randomUserImage.value = (fs_user.photoURL !== undefined) ? fs_user.photoURL : randomAvatar 
  if (credentials.value) {
    await router.push({ path: "/setup" });
  } 
}

const signOut = async () => {
  credentials.value = await signOutUser()
  toggleUserMenu()
  const router = useRouter()
  if (!credentials.value) {
    await router.push({ path: "/" });
  } 
}

const catAvatars = {
  cat01: '/img/users/cat-01.png',
  cat02: '/img/users/cat-02.png',
  cat03 : '/img/users/cat-03.png',
  cat04 : '/img/users/cat-04.png',
  cat05 : '/img/users/cat-05.png',
  cat06 : '/img/users/cat-06.png',
  cat07 : '/img/users/cat-07.png',
  cat08 : '/img/users/cat-08.png',
  cat09 : '/img/users/cat-09.png',
  cat10 : '/img/users/cat-10.png',
  cat11 : '/img/users/cat-11.png',
  cat12 : '/img/users/cat-12.png',
  cat13 : '/img/users/cat-13.png',
  cat14 : '/img/users/cat-14.png',
  cat15 : '/img/users/cat-15.png',
  cat16 : '/img/users/cat-16.png',
}

const randomizeUserImage = function (obj) {
    var keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};


const randomAvatar = randomizeUserImage(catAvatars)



onMounted(async () => {


  const getUser = async () => {

    const { result } = await getFirestoreDoc("users", userId)
    const fs_user = result
    if (fs_user == undefined) {
      const fs_user = getReloadUser()

    }

    
    
    randomUserImage.value = (fs_user.photoURL == undefined) ? randomAvatar : fs_user.photoURL
    const randomCat = randomAvatar

    console.log(`navbar.vue --> getUser Triggered ... if (firebaseUser == !null) ... --> sets randomUserImage.value to ${randomUserImage.value}`)

    const photoDoc = {
          user_id: fs_user.user_id,
          photoURL: randomUserImage.value
     }

    if (fs_user.photoURL == undefined) {
        const result = await updateFirestoreDocument("users", photoDoc);
    }
    
  } 


  if (firebaseUser == !null) {
    getUser()
  }
 

});

</script>
    
<template>
  <!-- <div class="dark:transparent z-10 absolute top-0 w-screen"> -->
  <div class="z-20 absolute w-screen"> <!-- TODO: remved class nav-cont, since it's missing -->
    <div class="bg-transparent w-screen">
      <div class="flex justify-between items-center pt-3 pl-7 pr-9">
        <div class="logo-container z-10 w-52">
          <nuxt-link v-if="!firebaseUser" to="/" tag="div">
            <img v-if="$colorMode.value == 'dark'" class="w-[170px]" src="/img/dashy-white.png" />
            <img v-if="$colorMode.value == 'light'" class="w-[170px]" src="/img/dashy-black.png" />
          </nuxt-link>
          <nuxt-link v-if="firebaseUser" to="/" tag="div">
            <img v-if="$colorMode.value == 'dark'" class="hidden md:inline-block w-[140px]" src="/img/dashy-white.png" />
            <img v-if="$colorMode.value == 'light'" class="hidden md:inline-block w-[140px]" src="/img/dashy-black.png" />
            <img v-if="$colorMode.value == 'dark'" class="object-cover w-24 h-24 translate-y-[2px] md:hidden" src="/img/dashy-white-logo.png" />
            <img v-if="$colorMode.value == 'light'" class="object-cover w-24 h-24 translate-y-[2px] md:hidden" src="/img/dashy-black-logo.png" />
          </nuxt-link>
        </div>

        <!-- Signin buttins : Larger screens -->

        <div class="flex flex-1 items-center justify-end pt-2">

          <button v-if="!firebaseUser" @click="toggleSignIn()"
            class="md:hidden">
            <svg width="30" height="41" viewBox="0 0 39 41" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fill="#222" d="M20.9453 0.331116C22.4578 0.331116 23.8272 1.17112 24.5835 2.41112C24.9514 3.01112 25.1967 3.75112 25.1353 4.53112C25.0945 5.13112 25.2784 5.73112 25.6054 6.29112C26.6478 7.99112 28.9575 8.63112 30.7561 7.67112C32.7796 6.51112 35.3345 7.21112 36.4995 9.19112L37.8689 11.5511C39.0544 13.5311 38.4003 16.0711 36.3564 17.2111C34.6191 18.2311 34.0059 20.4911 35.0483 22.2111C35.3754 22.7511 35.7433 23.2111 36.3156 23.4911C37.0309 23.8711 37.5828 24.4711 37.9711 25.0711C38.7274 26.3111 38.6661 27.8311 37.9302 29.1711L36.4995 31.5711C35.7433 32.8511 34.333 33.6511 32.8818 33.6511C32.1664 33.6511 31.3693 33.4511 30.7152 33.0511C30.1838 32.7111 29.5706 32.5911 28.9166 32.5911C26.8931 32.5911 25.1967 34.2511 25.1353 36.2311C25.1353 38.5311 23.2549 40.3311 20.9044 40.3311H18.1247C15.7538 40.3311 13.8734 38.5311 13.8734 36.2311C13.8325 34.2511 12.136 32.5911 10.1126 32.5911C9.43808 32.5911 8.8249 32.7111 8.31392 33.0511C7.65987 33.4511 6.8423 33.6511 6.14737 33.6511C4.67575 33.6511 3.26545 32.8511 2.50921 31.5711L1.0989 29.1711C0.342655 27.8711 0.301777 26.3111 1.05803 25.0711C1.38505 24.4711 1.99823 23.8711 2.69316 23.4911C3.26545 23.2111 3.63336 22.7511 3.98082 22.2111C5.00278 20.4911 4.38961 18.2311 2.65228 17.2111C0.628803 16.0711 -0.0252492 13.5311 1.13978 11.5511L2.50921 9.19112C3.69468 7.21112 6.22913 6.51112 8.27304 7.67112C10.0513 8.63112 12.3609 7.99112 13.4033 6.29112C13.7303 5.73112 13.9142 5.13112 13.8734 4.53112C13.8325 3.75112 14.0573 3.01112 14.4457 2.41112C15.2019 1.17112 16.5713 0.371116 18.0634 0.331116H20.9453ZM19.535 14.6911C16.3261 14.6911 13.7303 17.2111 13.7303 20.3511C13.7303 23.4911 16.3261 25.9911 19.535 25.9911C22.744 25.9911 25.2784 23.4911 25.2784 20.3511C25.2784 17.2111 22.744 14.6911 19.535 14.6911Z" />
            </svg>
            <!-- <img src="/img/menu.svg" class="w-[75px] opacity-50" /> -->
          </button>

          <button v-if="!firebaseUser" @click="toggleSignIn()"
            class="hidden h-14 ml-6 whitespace-nowrap md:inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm font-small text-gray-300 hover:text-gray-500 dark:bg-neutral-900 bg-black hover:bg-grey-500">
            Sign in
          </button>

          <button v-if="!firebaseUser" @click="toggleSignUp()"
            class="hidden h-14 ml-6 whitespace-nowrap md:inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm font-small text-gray-300 hover:text-gray-500 dark:bg-neutral-900 bg-black hover:bg-grey-500">
            Sign up
          </button>

          <button v-if="firebaseUser" @click="toggleUserMenu()" class="z-30">
            <img :src="randomUserImage"
            class="z-30 rounded-full w-[42px] h-[42px] md:w-[46px] md:h-[46px] " 
            />
          </button>
          <!-- @click="toggleUserMenu() -->
          <button v-if="firebaseUser" @click="toggleUserMenu()"
            class="pr-4 hidden">
            <svg width="30" height="41" viewBox="0 0 39 41" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fill="#222" d="M20.9453 0.331116C22.4578 0.331116 23.8272 1.17112 24.5835 2.41112C24.9514 3.01112 25.1967 3.75112 25.1353 4.53112C25.0945 5.13112 25.2784 5.73112 25.6054 6.29112C26.6478 7.99112 28.9575 8.63112 30.7561 7.67112C32.7796 6.51112 35.3345 7.21112 36.4995 9.19112L37.8689 11.5511C39.0544 13.5311 38.4003 16.0711 36.3564 17.2111C34.6191 18.2311 34.0059 20.4911 35.0483 22.2111C35.3754 22.7511 35.7433 23.2111 36.3156 23.4911C37.0309 23.8711 37.5828 24.4711 37.9711 25.0711C38.7274 26.3111 38.6661 27.8311 37.9302 29.1711L36.4995 31.5711C35.7433 32.8511 34.333 33.6511 32.8818 33.6511C32.1664 33.6511 31.3693 33.4511 30.7152 33.0511C30.1838 32.7111 29.5706 32.5911 28.9166 32.5911C26.8931 32.5911 25.1967 34.2511 25.1353 36.2311C25.1353 38.5311 23.2549 40.3311 20.9044 40.3311H18.1247C15.7538 40.3311 13.8734 38.5311 13.8734 36.2311C13.8325 34.2511 12.136 32.5911 10.1126 32.5911C9.43808 32.5911 8.8249 32.7111 8.31392 33.0511C7.65987 33.4511 6.8423 33.6511 6.14737 33.6511C4.67575 33.6511 3.26545 32.8511 2.50921 31.5711L1.0989 29.1711C0.342655 27.8711 0.301777 26.3111 1.05803 25.0711C1.38505 24.4711 1.99823 23.8711 2.69316 23.4911C3.26545 23.2111 3.63336 22.7511 3.98082 22.2111C5.00278 20.4911 4.38961 18.2311 2.65228 17.2111C0.628803 16.0711 -0.0252492 13.5311 1.13978 11.5511L2.50921 9.19112C3.69468 7.21112 6.22913 6.51112 8.27304 7.67112C10.0513 8.63112 12.3609 7.99112 13.4033 6.29112C13.7303 5.73112 13.9142 5.13112 13.8734 4.53112C13.8325 3.75112 14.0573 3.01112 14.4457 2.41112C15.2019 1.17112 16.5713 0.371116 18.0634 0.331116H20.9453ZM19.535 14.6911C16.3261 14.6911 13.7303 17.2111 13.7303 20.3511C13.7303 23.4911 16.3261 25.9911 19.535 25.9911C22.744 25.9911 25.2784 23.4911 25.2784 20.3511C25.2784 17.2111 22.744 14.6911 19.535 14.6911Z" />
            </svg>
            <!-- <img src="/img/menu.svg" class="w-[75px] opacity-50" /> -->
          </button>

        </div>


        <button v-if="!firebaseUser" class="hidden md:block ml-6" @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')">
          <svg v-if="$colorMode.value == 'light'" xmlns="http://www.w3.org/2000/svg"
            class="light-icon h-7 w-7 mt-2 text-gray-50" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" 
            class="dark-icon h-7 w-7 mt-2" viewBox="0 0 20 20">
            <path fill-rule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clip-rule="evenodd" />
          </svg>
        </button>
      </div>

      <div v-if="signInForm" class="absolute top-0 left-0 w-screen h-screen backdrop-blur-xl">
        <div class="flex justify-end w-screen h-32 bg-transparent items-center pr-10 pb-2 md:pr-14 md:pb-3">
          <button class="pr-2 md:pr-0 md:mt-2" @click="toggleSignIn()">
            <svg class="rotate-90 w-10 h-14 md:w-[40px] md:h-[80px]" viewBox="0 0 92 159" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M40.7216 0L43.7377 140.969C43.7377 140.969 37.2022 108.732 2.81487e-05 108.732C5.42783e-05 112.557 -4.19512e-05 114.742 4.39703e-05 118.627C46.2514 118.627 44.7431 159 44.7431 159H46.2514C46.2514 159 46.2514 118.567 92 118.567C92 114.742 92 112.557 92 108.732C55.3006 108.732 47.7595 140.969 47.7595 140.969L50.2735 0H40.7216Z"
                fill="white" />
            </svg>
          </button>
        </div>
        <div class="bg-transparent h-full w-screen flex flex-col">
          <div class="md:pt-32 h-full md:h-3/5 w-full flex justify-center items-center pb-48 md:pb-0">
            <div class="h-[45vh] md:h-full w-full md:w-[70vw] lg:w-[60vw] xl:w-[50vw] px-11 flex justify-end bg-transparent flex-col text-[8vw] md:text-5xl lg:text-6xl text-white">

              <input v-model="email" type="email"
                class="outline-[0px] bg-transparent h-20 md:h-36 border-b-white border-b-2 px-0 placeholder-white"
                placeholder="Email">
              <input v-model="password" type="password"
                class="outline-[0px] mt-7 md:mt-8 h-20 md:h-36 border-b-white border-b-2 bg-transparent px-0 placeholder-white"
                placeholder="Password">

              <div class="mt-16 w-full flex items-center text-2xl justify-center md:justify-start">

                <button @click="signIn"
                  class="md:w-48 md:text-4xl whitespace-nowrap inline-flex items-center justify-center md:px-4 pt-4 px-3 md:pt-6 pb-5 md:pb-7 border-2 border-white rounded-full shadow-sm font-small text-white hover:text-gray-500 dark:bg-transparent bg-transparent hover:bg-grey-500">
                  Sign In
                </button>
                <button v-if="!firebaseUser" @click="signUp"
                  class="ml-8 md:hidden whitespace-nowrap inline-flex items-center justify-center px-3 md:px-4 pt-4 md:pt-6 pb-5 md:pb-7 rounded-full shadow-sm font-small text-[rgba(255,255,255,0.8)] hover:text-gray-500 backdrop-blur bg-[rgba(255,255,255,0.06)] hover:bg-grey-500">
                    Sign up
                </button>

              </div>
              
            </div>
          </div>
        </div>
      </div>

      <div v-if="signUpForm" class="absolute top-0 left-0 w-screen h-screen backdrop-blur-xl">
        <div class="flex justify-end w-screen h-32 bg-transparent items-cente pr-14 pb-3">
          <button class="mt-2" @click="toggleSignUp()">
            <svg class="rotate-90" width="40" height="80" viewBox="0 0 92 159" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M40.7216 0L43.7377 140.969C43.7377 140.969 37.2022 108.732 2.81487e-05 108.732C5.42783e-05 112.557 -4.19512e-05 114.742 4.39703e-05 118.627C46.2514 118.627 44.7431 159 44.7431 159H46.2514C46.2514 159 46.2514 118.567 92 118.567C92 114.742 92 112.557 92 108.732C55.3006 108.732 47.7595 140.969 47.7595 140.969L50.2735 0H40.7216Z"
                fill="white" />
            </svg>
          </button>
        </div>
        <div class="bg-transparent h-full w-screen flex flex-col">
          <div class="pt-32 w-full h-3/5 flex items-start justify-center">
            <div class="h-full w-[70vw] lg:w-[60vw] xl:w-[50vw] px-11 flex justify-end bg-transparent flex-col text-5xl lg:text-6xl">
              <input v-model="email" type="email"
                class="outline-[0px] bg-transparent h-36 border-b-white border-b-2 text-white placeholder-white"
                placeholder="Email">
              <input v-model="password" type="password"
                class="outline-[0px] mt-8 h-36 border-b-white border-b-2 bg-transparent text-white placeholder-white"
                placeholder="Password">
              <button @click="signUp"
                class="mt-16 w-48 mt-ml-8 text-4xl whitespace-nowrap inline-flex items-center justify-center px-4 pt-6 pb-7 border-2 border-white rounded-full shadow-sm font-small text-white hover:text-gray-500 dark:bg-transparent bg-transparent hover:bg-grey-500">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>

      <div v-if="userMenu"
        class="pt-20 z-20 absolute top-0 left-0 w-screen h-screen backdrop-blur-xl">
        <div class="w-screen h-screen flex justify-end">
          <div class="px-10 pt-10 grid grid-rows-4 gap-4 h-screen w-screen">
            <div class="bg-transparent border-b-2 border-white flex justify-end">
               <button v-if="firebaseUser" @click="signOut"
               class="z-20 test2 h-14 ml-8 whitespace-nowrap md:inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm font-small text-gray-300 hover:text-gray-500 dark:bg-neutral-900 bg-black hover:bg-grey-500">
               Sign Out
              </button>
            </div>
            <div class="bg-transparent border-b-2 border-white flex justify-end">test</div>
            <div class="bg-transparent border-b-2 border-white flex justify-end"></div>
          </div>
        </div>
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