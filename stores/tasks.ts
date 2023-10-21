import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', () => {
    const taskList = ref([
        {
            uid: '123',
            status: '',
            assigned_to: 'ad',
            owner: 'as',
            owner_avatar: 'asd',
            title: 'test task in store',
            added_01: '',
            added_01_avatar: '',
            has_reminder: false,
            has_snooze: false,
            has_subtasks: false,
            reminder_01: null,
            snooze_01: null,
        },
    ])

    const taskListDone = ref([
        {
            uid: '123',
            status: 'done',
            assigned_to: 'rewterwt',
            owner: 'werterwt',
            owner_avatar: 'wert',
            title: 'test DONE task in store',
            added_01: '',
            added_01_avatar: '',
            has_reminder: false,
            has_snooze: false,
            has_subtasks: false,
            reminder_01: null,
            snooze_01: null,
        },
    ])

    const taskDoc = reactive({
        uid: '',
        status: '',
        assigned_to: '',
        owner: '',
        owner_avatar: '',
        title: '',
        added_01: '',
        added_01_avatar: '',
        has_reminder: false,
        has_snooze: false,
        has_subtasks: false,
        reminder_01: null,
        snooze_01: null,
    })

    return { taskList, taskListDone, taskDoc }
})
