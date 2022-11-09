 <template>
  <div class="100vhfix  h-screen dark:bg-black">
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
</style>
