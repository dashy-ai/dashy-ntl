import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig()
  const firebaseConfig = {
    apiKey: config.public.firebaseKey,
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);

  console.log(app)
})