<template>
  <button
    type="button"
    class="flex items-center rounded-xl bg-primary text-white p-4 text-sm font-bold tracking-[-0.01em] md:py-3.5 md:px-5"
    :aria-label="ariaLabel"
  >
    <img
      v-if="icon"
      :src="icon"
      :alt="altIcon || ''"
      class="md:mr-2.5"
      :aria-hidden="!altIcon ? 'true' : 'false'"
    />
    <span class="hidden md:inline-block" v-if="text">
      {{ text }}
    </span>
  </button>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";

const props = defineProps<{
  text: string;
  icon?: string;
  altIcon?: string;
}>();

const ariaLabel = computed(() => {
  return props.text || props.altIcon || "Przycisk bez tekstu";
});
</script>
