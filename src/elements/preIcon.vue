<template>
  <div class="flex flex-row items-center">
    <div class="w-4 h-4 mr-3 text-gray-400">
      <slot name="icon" />
    </div>
    <div class="flex-grow text-center">
      <slot />
    </div>
  </div>
</template>
