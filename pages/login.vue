<template>
  <div class="body-cont flex flex-col justify-center">
    <div class="reg-cont flex self-center mb-12 flex-col justify-between">
      <!-- <input type="email" class="input-text rounded-full px-3 mx-4 h-12" placeholder="email" />
      <input type="password" class="input-text rounded-full px-3 mx-4 h-12" placeholder="password" /> -->
      <button class="text-slate-100 signup-button bg-neutral-800 rounded-full px-3 py-2 mx-4 h-12">Login</button>
    </div>
    <div class="flex self-center flex-col h-20 justify-around">
      <span class="mt-8 text-slate-100"> 
        <pre>
        {{ firebaseUser}}
        </pre>
      </span>
    </div>
  </div>

</template>

<script setup>
// Route gard middleware

definePageMeta({
  middleware: ['auth']
})

const firebaseUser = useFirebaseUser()

</script>

<style>
.signup-button {
  cursor: pointer;
}

.body-cont {
  width: 100vw;
  height: 100vh;
}

.reg-cont {
  width: 30vw;
  height: 190px;
}
</style>