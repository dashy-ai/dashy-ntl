import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export default defineNuxtPlugin(nuxtApp => {

  const config = useRuntimeConfig()

  const firebaseConfig = {
    apiKey: config.public.firebaseKey,
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  initUser();

  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth();

  // Make firebase Auth object available globally,
  // will be available in composables, middlewares etc.
  nuxtApp.vueApp.provide('auth', auth);
  nuxtApp.provide('auth', auth);

  // console.log(app)
})