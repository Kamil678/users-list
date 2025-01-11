<template>
  <nav
    class="w-full flex flex-col justify-end items-center gap-y-4 md:flex-row md:w-auto"
    aria-label="Paginacja"
  >
    <p
      class="w-full text-center text-sm font-medium tracking-[-0.01em] text-custom-gray-300 md:mr-6 md:w-auto md:text-left"
    >
      Strona {{ currentPage }} z {{ totalPages }}
    </p>
    <div
      class="w-full flex justify-between items-center gap-x-1.5 md:justify-end md:w-auto"
    >
      <button
        :disabled="currentPage === 1"
        @click="changePage(1)"
        class="w-[42px] h-[42px] flex justify-center items-center rounded-xl border border-custom-gray-100 hover:bg-gray-100 disabled:cursor-not-allowed"
        aria-label="Pierwsza strona"
      >
        <img
          v-if="currentPage === 1"
          src="../assets/disabled-arrow-left.png"
          alt="Gray left arrow"
        />
        <img
          v-else
          src="../assets/arrow-right.png"
          alt="Left arrow"
          class="rotate-180"
        />
      </button>

      <div class="flex justify-end items-center gap-x-1.5">
        <button
          v-for="page in visiblePages"
          :key="page"
          :class="[
            'w-[42px] h-[42px] flex justify-center items-center rounded-xl text-sm font-medium leading-[22px]',
            currentPage === page
              ? 'bg-primary text-white'
              : 'hover:bg-gray-100 border border-custom-gray-100 text-custom-gray-400',
          ]"
          @click="changePage(page)"
          :aria-current="currentPage === page ? 'page' : undefined"
          :aria-label="`Przejdź do strony ${page}`"
        >
          <span>{{ page }}</span>
        </button>
      </div>

      <button
        :disabled="currentPage === totalPages"
        @click="changePage(totalPages)"
        class="w-[42px] h-[42px] flex justify-center items-center rounded-xl border border-custom-gray-100 hover:bg-gray-100 disabled:cursor-not-allowed"
        aria-label="Ostatnia strona"
      >
        <img
          v-if="currentPage === totalPages"
          src="../assets/disabled-arrow-left.png"
          alt="Gray right arrow"
          class="rotate-180"
        />
        <img v-else src="../assets/arrow-right.png" alt="Right arrow" />
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from "vue";

const props = defineProps<{
  totalPages: number;
  currentPage: number;
}>();

const emit = defineEmits<{
  "change-page": (page: number) => void;
}>();

const visiblePages = computed(() => {
  const { currentPage, totalPages } = props;

  if (totalPages <= 3) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (currentPage === 1) {
    return [1, 2, 3];
  }

  if (currentPage === totalPages) {
    return [totalPages - 2, totalPages - 1, totalPages];
  }

  return [currentPage - 1, currentPage, currentPage + 1];
});

const changePage = (page: number) => {
  emit("change-page", page);
};
</script>
