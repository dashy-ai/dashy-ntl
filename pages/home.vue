<template>

<!-- bg-[#111]-->
<!-- bg-[url('/img/hero-pattern.svg')] -->
<!-- bg-gradient-to-br from-[#222] to-[#111] -->
<!-- bg-[url('https://source.unsplash.com/random/?hd+wallpapers,dark')] bg-cover bg-center -->
<div class="text-white relative">

  <!-- menu -->
  <div class="fixed top-10 right-20 h-[36px] flex justify-end items-center z-30">
    
    <button v-if="firebaseUser" @click="toggleUserMenu()" class="bg-[#252525] border-4 border-[#000] z-5 rounded-full w-[47px] h-[47px] translate-x-3 flex justify-center items-center">
        <div class="absolute w-[2px] h-[12px] bg-[#666]"></div>
        <div class="absolute w-[2px] h-[12px] bg-[#666] rotate-90"></div>
    </button>
    
    <button v-if="firebaseUser" @click="toggleUserMenu()" class="z-1 rounded-full">
        <img :src="avatar"
        class="rounded-full w-[47px] h-[47px] border-4 border-[#000]" 
        />
    </button>
    <!-- bg-[linear-gradient(to top, #c471f5 0%, #fa71cd 100%)] -->
    
  </div>

  <!-- userMenu -->

  <div v-if="userMenu"
    class="pt-20 z-20 absolute top-0 left-0 w-screen h-screen backdrop-blur-xl"
    >
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

  <!-- Time and Greeting Section -->

  <div class="h-[90vh] text-gray-100 pb-32 pt-40 flex flex-col justify-between items-center text-2xl font-['Trap-Medium']">
    
   <div class="flex flex-col items-center"> 
     <div class="font-['Poppins'] font-thin tracking-wide h-[80px] flex flex-row justify-center items-center text-[85px]">
        <div class="h-[80px] flex items-center">{{timeHrs}}</div>
        <div class="text-[65px] px-2 pb-1">:</div>
        <div class="h-[80px] flex items-center">{{timeMin}}</div>
      </div>
      <div class="text-[16px] pb-2 font-['Poppins'] font-extralight tracking-wide">{{dateDay}}, {{dateMonth}} {{dateDayNum}}</div>
      <p class="pt-4 text-[25px]">
        <span class="font-['Poppins'] font-thin">{{ greeting }}</span><span>{{ name }}</span>
      </p>
    </div>


    <!-- Widgets -->
    <div class="w-screen h-[310px] px-20 flex justify-center mt-[70px] text-[22px] text-[#cacaca]">
        <!-- squircle shape clip-path -->
          <svg width="0" height="0">
            <defs>
              <clipPath id="squircle" clipPathUnits="objectBoundingBox">
                <path d="M .5,0 C .1,0 0,.1 0,.5 0,.9 .1,1 .5,1 .9,1 1,.9 1,.5 1,.1 .9,0 .5,0 Z"/>
              </clipPath>
            </defs>
          </svg>
        <!-- end squircle -->

      <!-- widget 1 -->
      <div class="w-[350px] text-[rgba(0,0,0,0.88)] pt-5 flex items-end rounded-xl font-['Poppins'] font-light tracking-wide mr-16">

        <div class="w-[350px] pr-5 text-[12px] font-['Poppins'] text-[#b2b2b2] tracking-wide"> 

          <div class="w-full pb-6 text-[25px] font-['Inktrap-regular'] text-[#79797940] flex items-start">
                <span>Inbox</span>
          </div>

          <div class="flex items-center">
            <img :src="randomUserImage"
                class="rounded-full  w-[30px] h-[30px] transform translate-y-[4px]" 
            />
            <span class="ml-2 py-1 px-5 truncate bg-[#111] rounded-t-full rounded-br-full">Can I get a graph for CVR for last 6 months?</span>
          </div>

          <div class="flex items-center pt-6">
            <img :src="randomUserImage2"
                class="rounded-full  w-[30px] h-[30px] transform translate-y-[4px]" 
            />
            <span class="ml-2 py-1 px-5 truncate bg-[#111] rounded-t-full rounded-br-full">There's something wrong in the data, I calculated this and it's not correct</span>
          </div>

          <div class="flex items-center pt-6">
            <img :src="randomUserImage3"
                class="rounded-full  w-[30px] h-[30px] transform translate-y-[4px]" 
            />
            <span class="ml-2 py-1 px-5 truncate bg-[#111] rounded-t-full rounded-br-full">Can you please change the graph to show how many drop out also?</span>
          </div>

        </div>
      </div>

      <!-- widget 2 -->
      <div class="h-full w-[320px] flex flex-wrap-reverse text-[#b9b9b9] text-[16px] gap-2">

        <!-- Item 1 -->
        <div class="bg-[#040b3c] h-[150px] w-[150px] squircle flex justify-between">

            <div class="h-[150px] w-[150px] pt-6 pl-6 pb-6 pr-6 flex flex-col justify-between"> 
              
              <div class="flex justify-between items-start">

                <div class="h-[78px] flex items-end max-w-[80px] text-[#fa71cccb] text-[16px]">
                  <span class="leading-[19px] pr-2">Quarterly stats screen</span>
                </div>
               

                <div class="w-7 flex justify-end">
                  <svg class="w-7 h-7 transform -rotate-90 -translate-y-[2px]" xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
                    <circle cx="16" cy="16" r="15.9155"
                            class="progress-bar__background_sales" />
                    <circle :style="circle1_progress" cx="16" cy="16" r="15.9155"
                            class="progress-bar__progress_sales" />
                  </svg>
                </div>

              </div>

              <div class="w-full text-[11px] tracking-widest text-[#2c3e78] flex items-start">
                <span class="h-[17px] transform -translate-y-[5px]">SALES</span>
              </div>

            </div>
        </div>

        <!-- Item 2 -->
        <div class="bg-[#043c367b] h-[150px] w-[150px] squircle flex justify-between">

            <div class="h-[150px] w-[150px] pt-6 pl-6 pb-6 pr-6 flex flex-col justify-between"> 
              
              <div class="flex justify-between items-start">
                <div class="h-[78px] flex items-end max-w-[80px] text-[#b76c0af9] text-[16px]">
                  <span class="leading-[19px] pr-">Brand metrics vs competition</span>
                </div>
                <div class="w-7 flex justify-end">
                  <svg class="w-7 h-7 transform -rotate-90 -translate-y-[2px]" xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
                    <circle cx="16" cy="16" r="15.9155"
                            class="progress-bar__background_marketing" />
                    <circle :style="circle2_progress" cx="16" cy="16" r="15.9155"
                            class="progress-bar__progress_marketing" />
                  </svg>
                </div>
              </div>

              <div class="w-full text-[11px] tracking-widest text-[#0c675eaa] flex items-start">
                <span class="h-[17px] transform -translate-y-[5px]">MARKETING</span>
              </div>

            </div>
        </div>

        <!-- Item 3 -->
        <div class="bg-[#040b3c] h-[150px] w-[150px] squircle flex justify-between">

            <div class="h-[150px] w-[150px] pt-6 pl-6 pb-6 pr-6 flex flex-col justify-between"> 
              
              <div class="flex justify-between items-start">

                <div class="h-[78px] flex items-end max-w-[80px] text-[#fa71cccb] text-[16px]">
                  <span class="leading-[19px] pr-2">Sales funnel weekly</span>
                </div>
                <div class="w-7 flex justify-end">
                  <svg class="w-7 h-7 transform -rotate-90 -translate-y-[2px]" xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
                    <circle cx="16" cy="16" r="15.9155"
                            class="progress-bar__background_sales" />
                    <circle :style="circle3_progress" cx="16" cy="16" r="15.9155"
                            class="progress-bar__progress_sales" />
                  </svg>
                </div>

              </div>

              <div class="w-full text-[11px] tracking-widest text-[#2c3e78] flex items-start">
                <span class="h-[17px] transform -translate-y-[5px]">SALES</span>
              </div>

            </div>
        </div>

      </div>

      <!-- widget 3 -->
      <div class="squircle w-[310px] bg-[#19011e] text-[#d488ce] text-[20px] pt-[40px] pb-[40px] pl-[40px] ml-[65px] flex flex-col justify-between">
        <div class="text-[17px] text-[#863f80]">#brand_taskforce</div>
        <div class="text-[30px] tracking-normal leading-[40px] pr-5">Market analysis 2023</div>
        <div class="flex w-full">
          <img :src="avatar"
                class="border-4 border-[#19011e] rounded-full w-[50px] h-[50px]" 
          />
          <img :src="randomUserImage4"
                class="border-4 border-[#19011e] rounded-full  w-[50px] h-[50px] transform -translate-x-3" 
          />
          <img :src="randomUserImage5"
                class="border-4 border-[#19011e] rounded-full  w-[50px] h-[50px] transform -translate-x-6" 
          />
        </div>
      </div>

    </div>

  </div>


  <!-- Board section -->

  <div class="backdrop-blur-md bg-[#0f0f0f] rounded-t-[80px] ">
    <!-- 1st board section -->

      <!-- Headline -->

    <div class="rounded-t-[80px] text-5xl font-['Trap-Medium'] h-[200px] flex justify-start items-center pl-20">
      Marketing
    </div>

      <!-- Masonry -->

    <masonry-wall class="px-20 pb-10" :items="marketingitems" :ssr-columns="1" :column-width="masonrysettings.width" :gap="masonrysettings.gap">
        <template #default="{ item, index }">
          <div 
            class="text-white bg-[rgba(0,0,0,0.29)] rounded-xl p-10" 
            :style="{ height: `${item.height}px` }">
              <h1>{{ item.title }}</h1>
              <span>{{ item.description }}</span>
          </div>
        </template>
    </masonry-wall>

    <!-- rounded-t-[80px] -->
    <div class="text-5xl font-['Trap-Medium'] h-[200px] flex justify-start items-center pl-20">
      Sales
    </div>

    <masonry-wall v-if="salesitems.length > 1" class="px-20 pb-10 bg-[rgba(0,0,0,0.27)]" :items="salesitems" :ssr-columns="3" :column-width="500" :gap="16">
        <template #default="{ item, index }">
        <div class="text-white bg-gray-900 rounded-xl p-10" :style="{ height: `${item.height}px` }">
          <h1>{{ item.title }}</h1>
          <span>{{ item.description }}</span>
        </div>
      </template>
    </masonry-wall>

    <div v-else class="w-full px-20 pb-10">
      <button class="dashed text-gray-900 text-5xl font-['Trap-Medium'] bg-transparent rounded-xl p-10 h-[250px] lg:w-[30%] flex justify-center items-center">
        Add
      </button>
    </div>

  </div>
  
</div>
</template>
<script setup>

definePageMeta({
  middleware: ['auth'],
  layout: "projects-view",
})

const firebaseUser = useFirebaseUser();

const masonrysettings = {
  width: '500',
  gap: '16' 
}
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const name = ref('')
const avatar = ref()
const userMenu = ref()
const greeting = ref()
const timeHrs = ref()
const timeMin = ref()
const dateMonth = ref()
const dateDay = ref()
const dateDayNum = ref()
const dateYear = ref()
const randomUserImage = ref()
const randomUserImage2 = ref()
const randomUserImage3 = ref()
const randomUserImage4 = ref()
const randomUserImage5 = ref()
const percentageComplete1 = ref()
const percentageComplete2 = ref()
const percentageComplete3 = ref()
const circle1_progress = reactive({
  strokeDashoffset: ''
})
const circle2_progress = reactive({
  strokeDashoffset: ''
})
const circle3_progress = reactive({
  strokeDashoffset: ''
})

function toggleUserMenu() {
  userMenu.value = !userMenu.value;
  console.log(`home.vue --> userMenu is : ${userMenu.value}`)
};

const signOut = async () => {
  const credentials = await signOutUser()
  toggleUserMenu()
  const router = useRouter()
  if (!credentials) {
    await router.push({ path: "/" });
  } 
}

// Time of day for user greeting
let d = new Date()
let hours = d.getHours()
let minutes = (d.getMinutes()<10?'0':'') + d.getMinutes()
let month = months[d.getMonth()]
let daynum = d.getDate()
let day = days[d.getDay()];
let year = d.getFullYear().toString().substr(-2)

timeHrs.value = hours
timeMin.value = minutes
dateMonth.value = month
dateDayNum.value = daynum
dateDay.value = day
dateYear.value = year

if (hours > 6 && hours < 12) {
  console.log('Good morning')
  greeting.value = 'Good morning '
} else if (hours >= 12 && hours < 18) {
  console.log('Good afternoon ')
  greeting.value = 'Good afternoon '
} else if (hours >= 18 && hours < 23) {
  console.log('Good evening ')
  greeting.value = 'Good evening '
} else {
  greeting.value = 'Good night '
}


const marketingitems = [
  {
    title: '1',
    description: 'This is an item.',
    height: '230',
  },
  {
    title: '2',
    description: 'This is an item.',
    height: '250',
  },
  {
    title: '3',
    description: 'This is an item.',
    height: '300',
  },
  {
    title: '4',
    description: 'This is an item.',
    height: '210',
  },
  {
    title: '5',
    description: 'This is an item.',
    height: '280',
  }
]

const salesitems = [
  {
    title: '6',
    description: 'This is an item.',
    height: '230',
  }
]

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
const randomAvatar2 = randomizeUserImage(catAvatars)
const randomAvatar3 = randomizeUserImage(catAvatars)
const randomAvatar4 = randomizeUserImage(catAvatars)
const randomAvatar5 = randomizeUserImage(catAvatars)

randomUserImage.value = randomAvatar
randomUserImage2.value = randomAvatar2
randomUserImage3.value = randomAvatar3
randomUserImage4.value = randomAvatar4
randomUserImage5.value = randomAvatar5

onMounted(async () => {

  const cookieUid = useCookie('userCookie');
  const uid = cookieUid.value.toString()
  console.log(`---> home.vue -- uid: ${uid}`)

  const userDataCall = await getFirestoreDoc("users", uid)
  const userData = userDataCall.result
  console.log(`---> home.vue -- userData: ${JSON.stringify(userData, null, 4)}`)
  console.log(`---> home.vue -- userData.name: ${JSON.stringify(userData.name, null, 4)}`)
  console.log(`---> home.vue -- userData.photoURL: ${JSON.stringify(userData.photoURL, null, 4)}`)

  name.value = userData.name
  avatar.value = userData.photoURL


  percentageComplete1.value = Math.random()
  let circle1_value = 100 - (percentageComplete1.value * 100);
  circle1_progress.strokeDashoffset = circle1_value

  percentageComplete2.value = Math.random()
  let circle2_value = 100 - (percentageComplete2.value * 100);
  circle2_progress.strokeDashoffset = circle2_value

  percentageComplete3.value = Math.random()
  let circle3_value = 100 - (percentageComplete2.value * 100);
  circle3_progress.strokeDashoffset = circle3_value

})

</script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@100;200;300;400&family=Barlow:wght@100&family=Manrope:wght@200;400;700&family=Martian+Mono:wght@100;400&family=Poppins:wght@100;200;400&display=swap');
/* 
font-family: 'Archivo', sans-serif;
font-family: 'Barlow', sans-serif;
font-family: 'Manrope', sans-serif;
font-family: 'Martian Mono', monospace;
font-family: 'Poppins', sans-serif;
*/



.squircle {
  clip-path: url(#squircle);
}

.dashed {
background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='25' ry='25' stroke='rgb(17,24,39)' stroke-width='18' stroke-dasharray='35%2c24' stroke-dashoffset='17' stroke-linecap='butt'/%3e%3c/svg%3e");
border-radius: 25px;
}

svg {
}

.progress-bar__background {
  fill: none;
  stroke: #171717;
  stroke-width: 3;
}

.progress-bar__progress {
  fill: none;
  stroke: #fff;
  stroke-dasharray: 100 100;
  stroke-dashoffset: 100;
  stroke-linecap: round;
  stroke-width: 2;
  transition: stroke-dashoffset 0.4s ease-in-out;
}

.progress-bar__background_sales {
  fill: none;
  stroke: #1B2442;
  stroke-width: 3;
}

.progress-bar__progress_sales {
  fill: none;
  stroke: #fa71cd;
  stroke-dasharray: 100 100;
  stroke-dashoffset: 100;
  stroke-linecap: round;
  stroke-width: 2;
  transition: stroke-dashoffset 0.4s ease-in-out;
}

.progress-bar__background_marketing {
  fill: none;
  stroke: #1B2442;
  stroke-width: 3;
}

.progress-bar__progress_marketing {
  fill: none;
  stroke: #b76c0af9;
  stroke-dasharray: 100 100;
  stroke-dashoffset: 100;
  stroke-linecap: round;
  stroke-width: 2;
  transition: stroke-dashoffset 0.4s ease-in-out;
}


  
</style>