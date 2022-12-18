import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const config = useRuntimeConfig()

const firebaseConfig = {
  apiKey: config.firebaseKey,
  authDomain: "dashy.ai",
  projectId: "dashy-ntl-auth",
  storageBucket: "dashy-ntl-auth.appspot.com",
  messagingSenderId: "661350024002",
  appId: "1:661350024002:web:cdf8a4c7e5d4c151e13edb"
};


export const firebaseApp = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(firebaseApp);
