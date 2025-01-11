<template>
  <div
    class="w-full flex items-center justify-between space-x-4 md:justify-start md:w-auto"
  >
    <label
      for="rowsPerPage"
      class="text-sm font-medium tracking-[-0.01em] text-custom-gray-300"
    >
      Pozycji na stronie:
    </label>

    <div class="relative">
      <button
        ref="dropdownRef"
        id="rowsPerPage"
        class="cursor-pointer flex items-center justify-between border border-custom-gray-100 rounded-xl px-4 py-2.5 bg-transparent text-sm text-black w-full"
        @click="toggleOptions"
        :aria-expanded="isOpen"
        aria-haspopup="listbox"
      >
        <span>{{ selected }}</span>
        <span
          class="ml-[5px] flex items-center justify-center w-[19px] h-[19px] transform transition-transform"
          :class="isOpen ? 'rotate-180' : ''"
        >
          <img src="../assets/arrow-down.png" alt="Arrow" />
        </span>
      </button>

      <ul
        v-if="isOpen"
        :class="`absolute ${
          shouldOpenUp ? 'bottom-full mb-2' : 'top-full mt-2'
        } w-full bg-white border border-custom-gray-100 rounded-xl shadow-lg z-10`"
        class="list-none"
        role="listbox"
        tabindex="-1"
        @keydown="handleKeydown"
      >
        <li
          v-for="option in options"
          :key="option"
          :aria-selected="option === selected"
          role="option"
          tabindex="0"
          class="px-4 py-2.5 cursor-pointer text-sm text-black first:rounded-t-xl last:rounded-b-xl focus:bg-gray-200 hover:bg-gray-100"
          @click="selectOption(option)"
          @keydown.enter="selectOption(option)"
        >
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, onMounted, onUnmounted } from "vue";

const props = defineProps<{
  options: number[];
  selectedValue: number;
}>();

const emit = defineEmits<{
  "change-rows-per-page": (rows: number) => void;
}>();

const selected = ref(props.selectedValue);
const isOpen = ref(false);

const dropdownRef = ref<HTMLElement | null>(null);

const shouldOpenUp = ref(false);

const checkDropdownPosition = () => {
  if (!dropdownRef.value) return;

  const rect = dropdownRef.value.getBoundingClientRect();
  const spaceBelow = window.innerHeight - rect.bottom;

  shouldOpenUp.value = spaceBelow <= 210;
};

const toggleOptions = () => {
  checkDropdownPosition();
  isOpen.value = !isOpen.value;
};

const selectOption = (option: number) => {
  selected.value = option;
  emit("change-rows-per-page", selected.value);
  isOpen.value = false;
};

const closeDropdown = (event: MouseEvent) => {
  if (!(event.target as HTMLElement).closest(".relative")) {
    isOpen.value = false;
  }
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", closeDropdown);
});

onUnmounted(() => {
  document.removeEventListener("click", closeDropdown);
});
</script>
