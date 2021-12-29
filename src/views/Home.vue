<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" @click="counter.increase" />
    <div>counter: {{ counter.counter }}</div>
  </div>
</template>

<script lang="ts">
import { Options, setup, Vue } from "vue-class-component";
import { useCounter } from "../services/useCounter";

@Options({
  components: {},
})
export default class Home extends Vue {
  public counter = setup(() => useCounter());
}
</script>
