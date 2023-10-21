<!-- widget 4 -->
<template>
    <div
        class="mx-10 w-[300px] pt-5 text-sm flex items-end rounded-xl font-['Poppins'] font-light tracking-wide"
    >
        Test userStore: {{ userObject }}

        <div class="text-[#b5b5b5] w-[300px]">
            <ul>
                <li v-for="(task, index) in taskList" :key="index">
                    <div
                        class="flex my-2 h-10 items-center hover:bg-[#007d7d30]"
                    >
                        <button
                            class="mr-4 checkmark relative bg-transparent z-5 rounded-full w-[30px] h-[30px] flex justify-center items-center"
                            @click="removeTask(index)"
                        ></button>
                        <div
                            class="cursor-pointer flex items-center h-full w-full"
                            @click="removeTask(index)"
                        >
                            {{ task.title }}
                        </div>
                    </div>
                </li>
            </ul>
            <form @submit.prevent="createTask(taskTitle)">
                <input
                    ref="taskInput"
                    class="w-[290px] text-2xl outline-[0px] bg-transparent h-12 border-b-[#ffffff69] border-b-2 px-0 placeholder-[#ffffff69] mb-1"
                    v-model="taskTitle"
                    placeholder="Add a new task"
                />
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
    // import { useUserStore } from '../../stores/user'
    // import { useTaskStore } from '../../stores/tasks'
    import { storeToRefs } from 'pinia'

    const taskStore = useTaskStore()
    const { taskList, taskListDone, taskDoc } = storeToRefs(taskStore)

    // form @submit.prevent="addTask(newTaskTitle)
    const taskTitle = ref('')
    const taskInput = ref()
    const tasks = ref([])
    const userTasks = ref([])
    const userActiveTasks = ref([])

    function createTask(taskName: string) {
        const name = taskName
        const obj = {
            uid: '',
            status: '',
            assigned_to: '',
            owner: '',
            owner_avatar: '',
            title: name,
            added_01: '',
            added_01_avatar: '',
            has_reminder: false,
            has_snooze: false,
            has_subtasks: false,
            reminder_01: null,
            snooze_01: null,
        }
    }

    // const getTasks = async () => {
    //     const t = await getFirestoreDocByKeyVal('tasks', 'uid', userId.value)
    //     userTasks.value = t.result
    //     console.log(
    //         `home.vue --> getTasks() userTasks (from db) ${JSON.stringify(
    //             t.result,
    //             null,
    //             3
    //         )}`
    //     )
    //     const activeTasks = () => {
    //         const arr = userTasks.value
    //         const activeTasks = arr.filter((tasks) => tasks.status !== 'done')
    //         console.log(
    //             `home.vue --> All tasks except done tasks : ${activeTasks}`
    //         )
    //         return activeTasks
    //     }
    //     userActiveTasks.value = activeTasks()
    //     console.log(
    //         `home.vue --> userActiveTasks.value is ${JSON.stringify(
    //             userActiveTasks.value,
    //             null,
    //             3
    //         )}`
    //     )
    // }

    // const updateTask = async (obj) => {
    //     const result = await updateFirestoreDocument('tasks', obj)
    // }

    // function sendTask() {
    //     console.log('addTask() triggered')
    //     tasks.value.push(newTask.value)
    //     saveNewTask()
    //     newTask.value = ''
    //     getTasks()
    // }

    // function removeTask(index) {
    //     const i = index
    //     console.log(
    //         `home.vue --> taskTitle is: ${userActiveTasks.value[i].title}, taskId is: ${userActiveTasks.value[i].id}`
    //     )
    //     const taskId = userActiveTasks.value[i].id
    //     const taskDoc = {
    //         user_id: taskId,
    //         status: 'done',
    //     }
    //     updateTask(taskDoc)
    //     tasks.value.splice(index, 1)
    //     userActiveTasks.value.splice(index, 1)
    // }

    // function saveNewTask() {
    //     taskDoc.uid = userId.value
    //     taskDoc.status = ''
    //     taskDoc.assigned_to = userId.value
    //     taskDoc.owner = name.value
    //     taskDoc.owner_avatar = avatar.value
    //     taskDoc.title = newTask.value
    //     taskDoc.added_01 = ''
    //     taskDoc.added_01_avatar = ''
    //     taskDoc.has_reminder = false
    //     taskDoc.has_snooze = false
    //     taskDoc.has_subtasks = false
    //     taskDoc.reminder_01 = null
    //     taskDoc.snooze_01 = null
    //     const { result } = addFirestoreData('tasks', taskDoc)
    // }
</script>
