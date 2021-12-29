<template>
  <div class="w-full grid grid-cols-4 gap-4">
    <user-info></user-info>
  </div>
</template>

<script lang="ts">
import { Options, setup, Vue } from "vue-class-component";
import { useCounter } from "../services/useCounter";
import UserInfo from "../components/user/userInfo.vue";

@Options({
  components: { UserInfo },
})
export default class Home extends Vue {
  public counter = setup(() => useCounter());
}
</script>
