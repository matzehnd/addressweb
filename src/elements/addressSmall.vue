<template>
  <pre-icon>
    <template v-slot:icon>
      <home-icon />
    </template>
    <slot />
  </pre-icon>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { HomeIcon } from "@heroicons/vue/solid";
import PreIcon from "./preIcon.vue";

@Options({ components: { HomeIcon, PreIcon } })
export default class PhoneNumber extends Vue {}
</script>
