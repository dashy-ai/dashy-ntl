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
    password
  )
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  console.log(`useFirebase.ts (createUser) : email is: ${email}, password is: ${password}, return credentials is ${credentials}`)
  return credentials;

};

export const signInUser = async (email, password) => {
  const auth = getAuth();
  const credentials = await signInWithEmailAndPassword(
    auth,
    email,
    password
  ).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  console.log(`useFirebase.ts (signInUser) : email is: ${email} password is: ${password}, return credentials is ${credentials}`)
  return credentials;
};

export const initUser = async () => {
  const auth = getAuth();
  const firebaseUser = useFirebaseUser();
  firebaseUser.value = auth.currentUser;
  console.log('useFirebase.ts (initUser) const firebaseUser = useFirebaseUser() has :', firebaseUser)

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(`useFirebase.ts (initUser - onAuthStateChanged) Auth changed: User is signed in. uid = ${user}`)

    } else {
      // If signed out
      console.log(`useFirebase.ts (initUser - onAuthStateChanged) Auth changed: User is signed out. uid = ${user}`)
    }
    firebaseUser.value = user;
    console.log(`useFirebase.ts (initUser - onAuthStateChanged) Auth changed: User is either signed out or in. sets firebaseUser.value user, and is now : ${firebaseUser.value}`)
  });
};

export const signOutUser = async () => {
  const auth = getAuth();
  const result = await auth.signOut()
  console.log('Signed Out:', result)
  return result;
};
