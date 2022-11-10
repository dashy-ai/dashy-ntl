 <template>
  <div class="dark:bg-black mybody">
    <Navbar />
    <slot />
  </div>
</template>
<script setup lang="ts">
import Navbar from "~/components/layout/navbar.vue";
</script>
<style>
.test {
  background-color: red;
}

/* 
Added IOSHeight tailwind plugin from: https://github.com/RVxLab/tailwind-plugin-ios-full-height
Instructions:

classes
min-h-screen-ios
h-screen-ios

Or add by .some-element { @apply h-screen-ios min-h-screen-ios; }

*/
</style>
