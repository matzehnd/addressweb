<template>
  <div class="w-full grid grid-cols-4 gap-4">
    <user-info></user-info>
    <div @click="counter.increase">
      {{ counter.counter.value }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounter } from "../composables/useCounter";
import userInfo from "../components/user/userInfo.vue";

const counter = useCounter();
</script>
