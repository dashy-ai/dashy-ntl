<script setup lang="ts">
import { useState } from "#app";

const user = false // useState('user')
const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme
}


</script>
    
<template>
  <div class="dark:transparent z-10 absolute top-0 w-screen">
    <div class="w-full px-20">
      <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
        <div class="logo-container">
          <nuxt-link to="/" tag="div">
            <img v-if="$colorMode.value == 'dark'" class="logo" src="/img/dashy-white.png" />
            <img v-if="$colorMode.value == 'light'" class="logo" src="/img/dashy-black.png" />
          </nuxt-link>
        </div>

        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <nuxt-link v-if="!user" to="/login"
            class="whitespace-nowrap text-base font-medium text-gray-700 hover:text-gray-500">
            Sign in
          </nuxt-link>

          <!-- <User v-if="user" :user="user" /> -->


          <nuxt-link v-if="!user" to="/register"
            class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm font-small text-gray-300 hover:text-gray-500 dark:bg-neutral-900 bg-black hover:bg-grey-500">
            Sign up
          </nuxt-link>

        </div>
        <button class="hidden md:block" @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')">
          <svg v-if="$colorMode.value == 'light'" xmlns="http://www.w3.org/2000/svg"
            class="light-icon h-6 w-6 text-gray-50" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="dark-icon h-6 w-6" viewBox="0 0 20 20">
            <path fill-rule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

    <style>
.background {
  background-color: #000;
}

.logo {
  margin-left: -38px;
  width: 200px;
}

.dark-icon {
  fill: #232323;
}

.light-icon {
  fill: #131313;
}
</style>