//https://firebase.google.com/docs/auth/web/start

import { FirebaseError } from 'firebase/app'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    sendEmailVerification,
} from 'firebase/auth'

import { storeToRefs } from 'pinia'

export const createUser = async (email, password) => {
    console.log(
        `useFirebase.ts --> createUser recieved --> email : ${email}, password: ${password}`
    )

    const auth = getAuth()

    const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
    ).catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        // ..
    })
    console.log(
        `useFirebase.ts --> createUserWithEmailAndPassword returned --> credentials : ${JSON.stringify(
            credentials,
            null,
            3
        )}`
    )
    return credentials
}

export const sendVerifyEmail = async () => {
    const auth = getAuth()

    sendEmailVerification(auth.currentUser).then(() => {
        console.log(
            `useFirebase.ts --> sendEmailVerification --> email verification sent!`
        )
        console.log(
            `useFirebase.ts --> sendEmailVerification --> auth.CurrentUser was passed, and is : ${JSON.stringify(
                auth.currentUser,
                null,
                3
            )}`
        )
        // ...
    })
}

export const signInUser = async (email, password) => {
    const auth = getAuth()
    let errorCode = null

    const credentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
    ).catch((error) => {
        console.log(`useFirebase.ts --> error.code is ${error.code}`)
        errorCode = error.code
    })

    let returnObj = null

    if (errorCode !== null) {
        returnObj = {
            error: errorCode,
            uid: credentials,
        }
    } else {
        returnObj = {
            error: null,
            uid: credentials.user.uid,
        }
    }

    console.log(
        `useFirebase.ts --> returnObj is ${JSON.stringify(returnObj, null, 3)}`
    )
    console.log(`useFirebase.ts --> errorCode is ${errorCode}`)
    return returnObj
}

// TODO: Invalid email

export const initUser = async () => {
    const auth = getAuth()

    const currentUser = auth.currentUser
    console.log(`useFirebase.ts ( InitUser)`)
    const firebaseUser = useFirebaseUser()

    const userStore = useUserStore()
    const { userObject } = storeToRefs(userStore)
    // @ts-ignore
    firebaseUser.value = currentUser
    // console.log('useFirebase.ts -- initUser')
    // Cookie
    const userCookie = useCookie('userCookie')

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            // console.log(`useFirebase.ts -- User is signed in`)
            userCookie.value = user.uid
            const myId = useUid()
            myId.value.uid = user.uid

            const userFromFirestore = async () => {
                const { result } = await getFirestoreDoc('users', user.uid)
                const fs_user = result
                return fs_user
            }

            ;(async () => {
                const myUserFromDb = await userFromFirestore()
                console.log(
                    `useFirebase.ts --> myUserFromDb : ${JSON.stringify(
                        myUserFromDb,
                        null,
                        3
                    )}`
                )
                userObject.value = myUserFromDb
                console.log(
                    `useFirebase.ts --> userObject.value : ${JSON.stringify(
                        userObject.value,
                        null,
                        3
                    )}`
                )
            })()
        } else {
            // If signed out
            // console.log(`useFirebase.ts -- User is signed out`)
            userCookie.value = null
            const myId = useUid()
            myId.value.uid = null
            userObject.value = {}
        }
        // @ts-ignore
        firebaseUser.value = user
        // console.log(`useFirebase.ts -- User is either signed out or in`)
        // @ts-ignore

        $fetch('/api/auth/auth', {
            method: 'POST',
            body: { user },
        })
    })
}

export const signOutUser = async () => {
    const auth = getAuth()
    const result = await auth.signOut()
    // console.log('Signed Out:', result)
    return result
}
