<template>
  <div class="flex items-center gap-3 w-full lg:w-auto">
    <div class="relative flex-grow md:flex-grow-0 lg:w-[504px]">
      <span class="absolute inset-y-0 left-0 flex items-center pl-4 md:pl-6">
        <img src="../assets/search-icon.png" alt="Search icon" />
      </span>
      <input
        v-model="localFilterText"
        type="text"
        class="w-full pl-10 pr-4 py-3.5 outline outline-1 outline-custom-gray-100 focus:outline-custom-gray-100 focus:shadow-none rounded-[12px] text-sm font-medium shadow-input md:pl-12 md:pr-6"
        placeholder="Wyszukaj użytkownika..."
        aria-label="Search user"
      />
    </div>

    <div
      class="flex items-center min-w-[97px] py-3.5 px-4 outline outline-1 outline-custom-gray-100 rounded-[12px] shadow-input md:px-[20px] lg:w-auto"
    >
      <img src="../assets/two-sort-icons.png" alt="Sort icon" />
      <p class="text-sm font-medium ml-2">
        Sortuj
        <span class="hidden md:inline">
          od:
          {{ computedSortColumnTitle }}
        </span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, defineProps, defineEmits } from "vue";

const props = defineProps<{
  filterText: string;
  columns: { name: string; title: string }[];
  sortKey: string;
}>();

const emit = defineEmits<{
  (event: "update-filter-text", value: string): void;
}>();
const localFilterText = ref(props.filterText);

const computedSortColumnTitle = computed(() => {
  const column = props.columns.find((column) => column.name === props.sortKey);
  return column ? column.title : "Brak";
});

watch(
  () => props.filterText,
  (newValue) => {
    if (localFilterText.value !== newValue) {
      localFilterText.value = newValue;
    }
  }
);

watch(localFilterText, (newValue) => {
  emit("update-filter-text", newValue);
});
</script>
