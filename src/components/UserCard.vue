<template>
  <div
    class="outline outline-1 outline-custom-gray-100 rounded-[16px] py-6 px-4 bg-white shadow-input"
  >
    <div class="flex items-center justify-between">
      <div class="inline-flex align-sub">
        <label
          for="userCheckbox"
          class="flex items-center cursor-pointer relative"
        >
          <input
            id="userCheckbox"
            type="checkbox"
            class="peer h-[18px] w-[18px] cursor-pointer transition-all appearance-none rounded-[5px] border-[2px] border-[#E9E9E9] checked:bg-primary checked:border-primary"
          />
          <span
            class="absolute text-white peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="#fff"
              stroke="#fff"
              stroke-width="1"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
        </label>
      </div>
      <p class="text-custom-gray-500 text-[12px] font-medium leading-[17px]">
        Data rejestracji: {{ formatDate(user.registered.date) }}
      </p>
    </div>
    <div class="flex items-center gap-x-[10px] py-4">
      <img
        :src="user.picture.large"
        :alt="`Photo of ${user.name.first} ${user.name.last}`"
        class="w-8 h-8 rounded-full"
      />
      <div class="text-base font-medium leading-[22px]">
        <p class="mb-[3px] break-all">
          {{ user.name.first }} {{ user.name.last }}
        </p>
        <p class="text-sm text-custom-gray-500 break-all">{{ user.email }}</p>
      </div>
    </div>
    <div class="flex items-center gap-[10px] leading-[18px]">
      <img
        :src="`https://flagsapi.com/${user.nat}/flat/16.png`"
        :alt="`Flag of ${user.location.country}`"
        class="w-[14px] h-[14px]"
      />
      <p class="text-[13px] text-custom-gray-500 font-medium">
        {{ user.location.country }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { User } from "@/types/User";
import { formatDate } from "@/utils/formatDate";

defineProps({
  user: {
    type: Object as () => User,
    required: true,
  },
});
</script>
