import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', () => {
    const userObject = reactive({
        user_id: '',
        name: '',
        company: '',
        team: '',
        email: '',
        displayName: '',
        emailVerified: '',
        isAnonymous: '',
        createdAt: '',
        lastLoginAt: '',
        phoneNumber: '',
        photoURL: '',
        providerId: '',
        tenantId: '',
    })

    return { userObject }
})
