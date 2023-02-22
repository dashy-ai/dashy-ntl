<template>

  <!-- bg-[#111]-->
  <!-- bg-[url('/img/hero-pattern.svg')] -->
  <!-- bg-gradient-to-br from-[#222] to-[#111] -->
  <!-- bg-[url('https://source.unsplash.com/random/?hd+wallpapers,dark')] bg-cover bg-center -->
  <div class="text-white relative font-['CoreSans-Light']">

    <!-- menu -->

    <transition name="switch" mode="out-in">
      <div v-if="menuScrollHideTargetIsVisible" class="fixed w-full px-20 top-10 h-[58px] flex justify-between items-center z-20">
        
        <div class="bg-[#121212] h-[58px] text-[#b5b5b5] flex w-[180px] justify-between rounded-full items-center px-[17px]">
          
          <div class="text-[20px] transform translate-y-[3px]  text-[#252525]"> {{ menuScrollHideTargetIsVisible }}</div>
          
          <svg width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.60364 11.3965C1.45171 9.24458 1.45171 5.75562 3.60364 3.60369C5.75557 1.45176 9.24453 1.45176 11.3965 3.60369C13.5484 5.75562 13.5484 9.24458 11.3965 11.3965C9.24453 13.5484 5.75557 13.5484 3.60364 11.3965ZM2.89653 2.89658C0.354081 5.43903 0.354081 9.56116 2.89653 12.1036C5.32 14.5271 9.17874 14.6405 11.7365 12.4439L13.8642 14.5715C14.0595 14.7668 14.376 14.7668 14.5713 14.5715C14.7666 14.3763 14.7666 14.0597 14.5713 13.8644L12.4437 11.7368C14.6405 9.17898 14.5271 5.3201 12.1036 2.89658C9.56112 0.354128 5.43899 0.354128 2.89653 2.89658Z" fill="white" fill-opacity="0.22"/>
          </svg>

        </div>

        <div class="flex items-center">

          <button v-if="firebaseUser" @click="toggleUserMenu()" class="relative bg-[#121212] z-5 border-4 border-[#000] rounded-full w-[65px] h-[65px] flex justify-center items-center">
              <div class="absolute w-[2px] h-[16px] bg-[#444]"></div>
              <div class="absolute w-[2px] h-[16px] bg-[#444] rotate-90"></div>
          </button>
          
          <button v-if="firebaseUser" @click="toggleUserMenu()" class="relative z-0 rounded-full transform translate-x-4">
              <img :src="avatar"
              class="rounded-full w-[60px] h-[60px] border-4 border-[#000]" 
              />
          </button>
          
          
          
          <!-- bg-[linear-gradient(to top, #c471f5 0%, #fa71cd 100%)] -->
        </div>
      </div>

      <div v-else class="fixed w-full justify-self-center bottom-10 h-[85px] flex justify-center items-center z-20">
        <div class="bg-[#ffffff07] backdrop-blur-xl w-[500px] h-full flex items-center justify-center rounded-full">
          HOHO!
        </div> 
      </div>
    </transition>
    <!-- userMenu -->

    <div v-if="userMenu"
      class="pt-20 z-30 absolute top-0 left-0 w-screen h-screen backdrop-blur-xl"
      >
        <div class="w-screen h-screen flex justify-end">
          <div class="fixed w-full px-20 top-10 h-[58px] flex justify-end items-center z-20">
          <button v-if="firebaseUser" @click="toggleUserMenu()" class="relative bg-[#5656561b] z-5 transform -translate-x-[2px] rounded-full w-[60px] h-[60px] flex justify-center items-center">
            <div class="absolute w-[2px] h-[30px] bg-[#444] -rotate-45"></div>
            <div class="absolute w-[2px] h-[30px] bg-[#444] rotate-45"></div>
          </button>
          </div>
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

    <div class="h-[90vh] text-neutral-300 pb-32 pt-40 flex flex-col justify-between items-center text-2xl font-['Trap-Medium']">
      
      <div class="flex flex-col items-center"> 

          <div ref="menuScrollHideTarget" class="font-['Poppins'] font-thin tracking-wide h-[80px] flex flex-row justify-center items-center text-[85px]">
              <div class="h-[80px] flex items-center">{{timeHrs}}</div>
              <div class="text-[65px] px-2 pb-1">:</div>
              <div class="h-[80px] flex items-center">{{timeMin}}</div>
            </div>
            <div class="text-[16px] pb-2 font-['Poppins'] font-extralight tracking-wide">{{dateDay}}, {{dateMonth}} {{dateDayNum}}</div>
            <p class="pt-4 text-[25px]">
              <span class="font-['Poppins'] font-thin">{{ greeting }}</span><span>{{ name }}</span><span> 👋</span>
            </p>
          </div>


        <!-- Widgets -->
        <div class="w-[100%] scroll-smooth flex justify-center no-scrollbar items-center overflow-x-hidden h-[310px]">
          <transition name="fadein" mode="out-in">
            <div ref="scrollcenter" class="h-[310px] overflow-auto flex w-fit flex-nowrap text-[22px] text-[#cacaca]">
                
                <!-- squircle shape clip-path -->
                  <svg width="0" height="0">
                    <defs>
                      <clipPath id="squircle" clipPathUnits="objectBoundingBox">
                        <path d="M .5,0 C .1,0 0,.1 0,.5 0,.9 .1,1 .5,1 .9,1 1,.9 1,.5 1,.1 .9,0 .5,0 Z"/>
                      </clipPath>
                    </defs>
                  </svg>
                <!-- end squircle -->

                <!-- squircle-rect shape clip-path -->
                  <svg width="0" height="0">
                    <defs>
                      <clipPath id="squircle-rect" clipPathUnits="objectBoundingBox">
                        <path d="M.235 0C.24 0 .56 0 .905 0V0C1.23 0 1.53 0 1.57 0 1.655 0 1.705 0 1.755.05 1.805.1 1.805.18 1.805.205 1.805.235 1.805.315 1.755.365 1.71.41 1.645.415 1.57.415 1.565.415 1.245.41.905.41V.41C.575.41.275.415.235.415.15.415.1.41.05.365-0 .315-0 .235-0 .205-0 .18-0 .095.05.05.095 0 .16 0 .235 0Z"/>
                      </clipPath>
                    </defs>
                  </svg>
                <!-- end squircle -->

                <!-- spacer -->
                <div class="w-[600px] h-[310px]">
                  <div class="w-[600px] h-[310px]">
                  </div>
                </div>

                <!-- widget 1 -->
                <div class="mx-10 w-[330px] text-[rgba(0,0,0,0.88)] pt-5 flex items-end rounded-xl font-['Poppins'] font-light tracking-wide">

                  <div class="w-[330px] text-[13px] font-['Poppins'] text-[#b5b5b5] tracking-wide"> 

                    <!-- <div class="w-full pb-6 text-[25px] font-['Inktrap-regular'] text-[#7b7b7b40] flex items-start">
                          <span>Inbox</span>
                    </div> -->

                    <div class="flex items-center pt-5">
                      <div>
                        <img :src="randomUserImage"
                            class="rounded-full  w-[36px] h-[36px] transform translate-y-[8px]" 
                        />
                      </div>
                      <div class="flex flex-col min-w-0 max-w-[292px]">
                        <div class="ml-3 py-3 px-5 max-w-fit truncate bg-[#121212] rounded-t-full rounded-br-full">Maybe CVR for last 6 months?</div>
                        <div class="flex justify-start pr-[12px] text-[#7979798f] text-[12px]">
                          <div class="pl-7 flex justify-start">@andywhite</div>
                          <div class="pl-4 flex justify-start">6min ago</div>
                        </div>
                      </div>
                    </div>

                    <div class="flex items-center pt-5">
                      <div>
                        <img :src="randomUserImage2"
                            class="rounded-full  w-[36px] h-[36px] transform translate-y-[8px]" 
                        />
                      </div>
                      <div class="flex flex-col min-w-0 max-w-[292px]">
                        <div class="ml-3 py-3 px-5 max-w-fit truncate bg-[#121212] rounded-t-full rounded-br-full">Ok, thanks! 🙌🏼 💯</div>
                        <div class="flex justify-start pr-[12px] text-[#7979798f] text-[12px]">
                          <div class="pl-7 flex justify-start">@andywhite</div>
                          <div class="pl-4 flex justify-start">12:30</div>
                        </div>
                      </div>
                    </div>


                    <div class="flex items-center pt-5">
                      <div>
                        <img :src="randomUserImage3"
                            class="rounded-full  w-[36px] h-[36px] transform translate-y-[8px]" 
                        />
                      </div>
                      <div class="flex flex-col min-w-0 max-w-[292px]">
                        <div class="ml-3 py-3 px-5 max-w-fit truncate bg-[#121212] rounded-t-full rounded-br-full">Hi! There's something wired with the score now, if you look at the</div>
                        <div class="flex justify-start pr-[12px] text-[#7979798f] text-[12px]">
                          <div class="pl-7 flex justify-start">@andywhite</div>
                          <div class="pl-4 flex justify-start">tue 14:15</div>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>

                <!-- widget 2 -->
                <div class="mx-10 max-w-[315px] min-w-[315px] gap-x-3 gap-y-2 h-[310px] text-[#b9b9b9] text-[16px] flex flex-wrap-reverse">

                  <!-- Item 1 -->
                  <div class="bg-[#040b3c] h-[150px] w-[150px] squircle flex justify-between">

                      <div class="h-[150px] pt-6 pl-6 pb-6 pr-6 flex flex-col justify-between"> 
                        
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
                <div class="mx-10 w-[310px] h-[310px]">
                  <div class="squircle w-[310px] h-[310px]  bg-[#19011e] text-[#d488ce] text-[20px] pt-[40px] pb-[40px] pl-[40px] flex flex-col justify-between">
                    <div class="text-[17px] text-[#863f80]">#Insight</div>
                    <div class="text-[30px] tracking-normal leading-[40px] pr-5">Company OKRs 2023</div>
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

                <!-- widget 4 -->
                <div class="mx-10 w-[300px] pt-5 text-sm flex items-end rounded-xl font-['Poppins'] font-light tracking-wide">

                    <div class="text-[#b5b5b5] w-[300px]">
                      
                      <ul>
                        <li v-for="(task, index) in userActiveTasks" :key="index">

                          <div class="flex my-2 h-10 items-center hover:bg-[#007d7d30]">
                            <!--  border border-1 border-[#838383] -->
                            <button class="mr-4 checkmark relative bg-transparent z-5 rounded-full w-[30px] h-[30px] flex justify-center items-center" @click="removeTask(index)">
                            </button>
                            <div class="cursor-pointer flex items-center h-full w-full" @click="removeTask(index)">
                              {{ task.title }} 
                            </div>
                          </div>

                        </li>
                      </ul>
                      <form @submit.prevent="addTask">
                          <input 
                              ref="taskInput" 
                              class="w-[290px] text-2xl outline-[0px] bg-transparent h-12 border-b-[#ffffff69] border-b-2 px-0 placeholder-[#ffffff69] mb-1"
                              v-model="newTask" 
                              placeholder="Add a new task"
                            >
                      </form>
                    </div>

                </div>

                <!-- spacer -->
                <div class="w-[600px] h-[310px]">
                  <div class="w-[600px] h-[310px]">
                  </div>
                </div>

            </div>
          </transition>
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
        <div>
          <h1>Hello world</h1>
        </div>
        <button class="dashed text-gray-900 text-5xl font-['Trap-Medium'] bg-transparent rounded-xl p-10 h-[250px] lg:w-[30%] flex justify-center items-center">
          Add
        </button>
      </div>

    </div>
    
  </div>
</template>

<script setup>

import { useIntersectionObserver } from '@vueuse/core'
import { serverTimestamp } from 'firebase/firestore'

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

// TODO code


const userId = ref()
const taskInput = ref()
const tasks = ref([]);
const userTasks = ref([]);
const userActiveTasks = ref([])
const newTask = ref('');
const scrollcenter = ref()
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
const menuScrollHideTarget = ref(null)
const menuScrollHideTargetIsVisible = ref(false)
const { stop } = useIntersectionObserver(
      menuScrollHideTarget,
      ([{ isIntersecting }], observerElement) => {

      menuScrollHideTargetIsVisible.value = isIntersecting

        // if (intersectionRatio === 1.0) {
        // menuScrollHideTargetIsVisible.value = true
        // } else {
        //   menuScrollHideTargetIsVisible.value = false
        // }
        
      },
)
const circle1_progress = reactive({
  strokeDashoffset: ''
})
const circle2_progress = reactive({
  strokeDashoffset: ''
})
const circle3_progress = reactive({
  strokeDashoffset: ''
})
const taskDoc = reactive({
  uid : '',
  status : '',
  assigned_to : '',
  owner : '',
  owner_avatar : '',
  title : '',
  added_01 : '',
  added_01_avatar : '',
  has_reminder : false,
  has_snooze : false,
  has_subtasks : false,
  reminder_01 : null,
  snooze_01 : null,
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

const getTasks = async () => {
    const t = await getFirestoreDocByKeyVal("tasks", "uid", userId.value)
    userTasks.value = t.result
    console.log(`home.vue --> getTasks() userTasks (from db) ${JSON.stringify(t.result, null, 3)}`)
    
    const activeTasks = () => {

      const arr = userTasks.value
      const activeTasks = arr.filter(tasks => tasks.status !== "done")
      console.log(`home.vue --> All tasks except done tasks : ${activeTasks}`);

      return activeTasks;
    }

    userActiveTasks.value = activeTasks()

    console.log(`home.vue --> userActiveTasks.value is ${JSON.stringify(userActiveTasks.value, null, 3)}`)
  }

const updateTask = async (obj) => {
  const result = await updateFirestoreDocument('tasks', obj)
}


function addTask() {
  console.log("addTask() triggered")
  tasks.value.push(newTask.value);
  saveNewTask()
  newTask.value = '';
  getTasks()
}

function removeTask(index) {
  const i = index
  console.log(`home.vue --> taskTitle is: ${userActiveTasks.value[i].title}, taskId is: ${userActiveTasks.value[i].id}`)
  const taskId = userActiveTasks.value[i].id

  const taskDoc = {
    user_id: taskId,
    status: "done",
  }
  updateTask(taskDoc)
  tasks.value.splice(index, 1);
  userActiveTasks.value.splice(index, 1);
}

function saveNewTask() {
    taskDoc.uid = userId.value
    taskDoc.status = ''
    taskDoc.assigned_to = userId.value
    taskDoc.owner = name.value
    taskDoc.owner_avatar = avatar.value
    taskDoc.title = newTask.value
    taskDoc.added_01 = ''
    taskDoc.added_01_avatar = ''
    taskDoc.has_reminder = false
    taskDoc.has_snooze = false
    taskDoc.has_subtasks = false
    taskDoc.reminder_01 = null
    taskDoc.snooze_01 = null

    const { result } = addFirestoreData('tasks', taskDoc);
  }


// Time of day for user greeting
function updateTime() {
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
}

updateTime()

  if (timeHrs.value > 6 && timeHrs.value < 12) {
    console.log('Good morning')
    greeting.value = 'Good morning '
  } else if (timeHrs.value >= 12 && timeHrs.value < 18) {
    console.log('Good afternoon ')
    greeting.value = 'Good afternoon '
  } else if (timeHrs.value >= 18 && timeHrs.value < 23) {
    console.log('Good evening ')
    greeting.value = 'Good evening '
  } else {
    greeting.value = 'Good night '
  }

let clock = setInterval(updateTime, 1000);

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
  userId.value = uid
  console.log(`home.vue --> userId.value: ${userId.value}`)
  console.log(`---> home.vue -- userCookie uid: ${uid}`)

  const userDataCall = await getFirestoreDoc("users", uid)
  const userData = userDataCall.result
  console.log(`---> home.vue -- userData: ${JSON.stringify(userData, null, 4)}`)
  console.log(`---> home.vue -- userData.name: ${JSON.stringify(userData.name, null, 4)}`)
  console.log(`---> home.vue -- userData.photoURL: ${JSON.stringify(userData.photoURL, null, 4)}`)

  name.value = userData.name
  avatar.value = userData.photoURL

    onStartTyping(() => {
    
      taskInput.value.focus()
  })

  getTasks()

  percentageComplete1.value = Math.random()
  let circle1_value = 100 - (percentageComplete1.value * 100);
  circle1_progress.strokeDashoffset = circle1_value

  percentageComplete2.value = Math.random()
  let circle2_value = 100 - (percentageComplete2.value * 100);
  circle2_progress.strokeDashoffset = circle2_value

  percentageComplete3.value = Math.random()
  let circle3_value = 100 - (percentageComplete2.value * 100);
  circle3_progress.strokeDashoffset = circle3_value

  console.log(`scrollcenter ${scrollcenter}`) 
  console.log(`scrollcenter.value ${scrollcenter.value}`) 
  console.log(`scrollcenter.value.scrollLeft ${scrollcenter.value.scrollLeft}`)
  console.log(`scrollcenter.value.scrollWidth ${scrollcenter.value.scrollWidth}`) 
  console.log(`scrollcenter.value.offsetWidth ${scrollcenter.value.offsetWidth}`)
  console.log(`scrollcenter.value.getBoundingClientRect().width ${scrollcenter.value.getBoundingClientRect().width}`)

  let initialOffset = (scrollcenter.value.getBoundingClientRect().width - scrollcenter.value.scrollWidth) / 2;
  console.log(`initialOffset = ${initialOffset}`)
  let positiveOffset = Math.abs(initialOffset)
  scrollcenter.value.scrollLeft = positiveOffset;
  // let leftscroll = (scrollcenter.value.scrollWidth - scrollcenter.value.offsetWidth) / 2
  // scrollcenter.value.scrollLeft = leftscroll
// (document.body.scrollWidth - document.body.clientWidth) / 2
  // scrollcenter.forEach((stc) => {
  //   // First try to scroll well beyond the possible width
  //   stc.scrollLeft = 1000000
  //   // it will be set to the maximum scrollLeft
  //   //console.log(stc.scrollLeft) 

  //   // Then set to half it's value
  //   stc.scrollLeft /= 2
  // })

  const updated_at_timestamp = serverTimestamp()

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

.squircle-rect {
  clip-path: url(#squircle-rect);
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

/* switch transitions */
.switch-enter-from,
.switch-leave-to {
  opacity: 0;
  transform: translateY(-40px);
}
.switch-enter-to,
.switch-leave-from {
  opacity: 1;
  transform: translateY(0px)
}
.switch-enter-active,
.switch-leave-active {
  transition: all 0.4s ease;
}

.testClass {
		background: red;
  }

.fadein-enter-active,
.fadein-leave-active {
  transition: opacity 1s ease;
}

.fadein-enter-from,
.fadein-leave-to {
  opacity: 0;
}

.checkmark {
  box-shadow: inset 0px 0px 0px #131313;
  animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
}

@keyframes fill {
  100% {
    box-shadow: inset 0px 0px 0px 30px #131313;
  }
}
  
</style>