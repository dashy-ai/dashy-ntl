
export default defineNuxtPlugin(() => {

  addRouteMiddleware('auth', () => {
    // Get provided 'auth' ( getAuth ) provided in firebaseAuth.client.ts
    const { $auth } = useNuxtApp()

    // $auth.currentUser will be undefined if user isn't logged in, hence the '?' $auth?... to not crash.
    // console.log(`>>>>> Middleware prints out $auth.currentUser ${JSON.stringify($auth?.currentUser, null, 2)}`)

    // Route gard: If not logged in, abort navigation on pages where 
    // definePageMeta({
    //   middleware: ['auth']
    // })
    // is used

    try {
      if (!$auth?.currentUser?.uid) {
        abortNavigation()
      }
    } catch (error) {
      console.log(`abortNavigation error is § ${error}`)
      return navigateTo('/');
    }


  })

})