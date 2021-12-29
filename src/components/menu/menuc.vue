<template>
  <div class="bg-blue-300 h-screen">
    <div v-for="route in routes" :key="route.name">
      <router-link :to="route">{{ route.display }}</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Menuc extends Vue {
  public routes = [
    { name: "Home", display: "Home" },
    { name: "About", display: "About" },
  ];
}
</script>
