<template>
  <div
    class="relative group inline-block"
    :aria-describedby="text ? 'tooltip' : undefined"
  >
    <slot />
    <div
      v-if="text"
      id="tooltip"
      role="tooltip"
      class="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200 bg-zinc-900 tracking-normal text-white text-xs font-medium leading-4 rounded-[10px] py-2 px-[14px] whitespace-nowrap z-50 md:left-0 md:right-auto md:transform-none md:text-[13px]"
    >
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>
