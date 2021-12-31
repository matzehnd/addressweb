<template>
  <card>
    <div class="flex flex-row justify-between items-center pb-2 border-b mb-2">
      <div class="text-xl">Matthias Meier</div>
      <user-circle-icon class="h-8 w-8 text-gray-400" />
    </div>
    <div class="flex flex-col space-y-2">
      <phone-number>079'527'52'73</phone-number>
      <address-small>
        <div class="flex flex-col">
          <div>Brunngasse 89</div>
          <div>4153 Reinach</div>
        </div>
      </address-small>
    </div>
  </card>
</template>

<script setup lang="ts">
import Card from "../../elements/card.vue";
import PhoneNumber from "../../elements/phoneNumber.vue";
import AddressSmall from "../../elements/addressSmall.vue";
import { UserCircleIcon } from "@heroicons/vue/solid";
</script>
