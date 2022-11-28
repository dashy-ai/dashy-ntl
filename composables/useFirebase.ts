//https://firebase.google.com/docs/auth/web/start

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";


export const createUser = async (email, password) => {
  const auth = getAuth();
  const credentials = await createUserWithEmailAndPassword(
    auth,
    email,
    password,
  )
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  // console.log(`useFirebase.ts (createUser) createUserWithEmailAndPassword recieved "credentials" : ${credentials.user.uid}`)
  return credentials;

};

export const signInUser = async (email, password) => {
  const auth = getAuth();
  const credentials = await signInWithEmailAndPassword(
    auth,
    email,
    password
  ).catch(error => {
    switch (error.code) {
      case 'auth/invalid-email':
        // errMsg.value = 'Invalid email'
        return 'Wrong email'
        break
      case 'auth/user-not-found':
        // errMsg.value = 'No account with that email was found'
        return 'No user'
        break
      case 'auth/wrong-password':
        // errMsg.value = 'Incorrect password'
        return 'Wrong password'
        break
      default:
        // errMsg.value = 'Email or password was incorrect'
        return 'Wrong email or password'
        break
    }
  });

  // console.log(`useFirebase.ts (signInUser) : ${email} & ${password}`)
  return credentials;
};

// TODO: Invalid email


export const initUser = async () => {
  const auth = getAuth();
  const firebaseUser = useFirebaseUser();
  // @ts-ignore
  firebaseUser.value = auth.currentUser;
  // console.log('useFirebase.ts -- initUser')
  // Cookie
  const userCookie = useCookie('userCookie');

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      // console.log(`useFirebase.ts -- User is signed in`)
      userCookie.value = user.uid;

      const myId = useUid();
      myId.value.uid = user.uid

    } else {
      // If signed out
      // console.log(`useFirebase.ts -- User is signed out`)
      userCookie.value = null;
      const myId = useUid();
      myId.value.uid = null;
    }
    // @ts-ignore
    firebaseUser.value = user;
    // console.log(`useFirebase.ts -- User is either signed out or in`)
    // @ts-ignore


    $fetch('/api/auth/auth', {
      method: 'POST',
      body: { user }
    });

  });
};

export const signOutUser = async () => {
  const auth = getAuth();
  const result = await auth.signOut()
  // console.log('Signed Out:', result)
  return result;
};

