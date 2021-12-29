<template>
  <pre-icon>
    <template v-slot:icon>
      <phone-icon />
    </template>
    <slot />
  </pre-icon>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { PhoneIcon } from "@heroicons/vue/solid";
import PreIcon from "./preIcon.vue";

@Options({ components: { PhoneIcon, PreIcon } })
export default class PhoneNumber extends Vue {}
</script>
