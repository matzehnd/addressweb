<template>
  <div class="flex flex-row">
    <menuc class="w-56 flex-none" />
    <router-view class="flex-grow" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Menuc from "./components/menu/menuc.vue";

@Options({
  components: {
    Menuc,
  },
})
export default class App extends Vue {}
</script>
