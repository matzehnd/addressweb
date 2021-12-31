<template>
  <pre-icon>
    <template v-slot:icon>
      <home-icon />
    </template>
    <slot />
  </pre-icon>
</template>

<script setup lang="ts">
import { HomeIcon } from "@heroicons/vue/solid";
import PreIcon from "./preIcon.vue";
</script>
