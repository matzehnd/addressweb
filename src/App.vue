<template>
  <div class="flex flex-row">
    <router-view class="flex-grow p-4" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class App extends Vue {}
</script>
