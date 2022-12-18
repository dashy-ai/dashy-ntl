
export default defineNuxtPlugin(() => {

  addRouteMiddleware('global-test', () => {
    console.log('>>>>> Global middleware was added in a plugin and will be run on every route change')
  }, { global: true })

  addRouteMiddleware('auth', () => {
    // Get provided 'auth' ( getAuth ) provided in firebaseAuth.client.ts
    const { $auth } = useNuxtApp()

    // $auth.currentUser will be undefined if user isn't logged in, hence the '?' $auth?... to not crash.
    console.log(`>>>>> auth Middleware - $auth?.currentUser?.uid is: ${$auth?.currentUser?.uid}`)

    // Route gard: If not logged in, abort navigation on pages where 
    // definePageMeta({
    //   middleware: ['auth']
    // })
    // is used

    try {
      if (!$auth?.currentUser?.uid) {
        console.log(">>>>> auth Middleware - auth gard - triggered")
        abortNavigation()
        return navigateTo('/');
      } else {
        console.log(">>>>> auth Middleware - auth gard - signed in")
      }
    } catch (error) {
      console.log(`>>>>> auth Middleware - return navigateTo('/') triggered -> abortNavigation error is § ${error}`)
      return navigateTo('/');
    }


  })

})