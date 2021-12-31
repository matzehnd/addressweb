<template>
  <pre-icon>
    <template v-slot:icon>
      <phone-icon />
    </template>
    <slot />
  </pre-icon>
</template>

<script setup lang="ts">
import { PhoneIcon } from "@heroicons/vue/solid";
import PreIcon from "./preIcon.vue";
</script>
