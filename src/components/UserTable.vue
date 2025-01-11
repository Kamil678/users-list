<template>
  <div class="w-full flex items-center gap-3 mb-4 md:w-auto md:mb-8">
    <UserSearchAndSort
      :filter-text="filterText"
      :columns="columns"
      :sort-key="sortKey"
      @update-filter-text="(value) => (filterText = value)"
    />
  </div>

  <div
    class="hidden overflow-hidden border border-custom-gray-100 rounded-[12px] shadow-table xl:block"
  >
    <table
      :class="`w-full bg-white ${
        paginatedUsers.length > 0 ? 'table-fixed' : ''
      } rounded-[12px]`"
    >
      <thead>
        <tr class="bg-[#F6F6F8] text-left">
          <th
            class="w-[66px] py-[15.75px] px-6 border-b border-custom-gray-100"
          ></th>
          <th
            v-for="(column, index) in columns"
            :key="index"
            class="py-[15.75px] px-6 border-b border-custom-gray-100 cursor-pointer"
            @click="sortBy(column.name)"
          >
            <span
              class="flex items-center text-[12px] leading-[17px] font-medium text-custom-gray-400"
            >
              {{ column.title }}
              <img
                src="../assets/sort-arrow.png"
                alt="Sort arrow"
                :class="{
                  'rotate-0': sortKey === column.name && sortOrder === 'asc',
                  'rotate-180': sortKey === column.name && sortOrder === 'desc',
                  'opacity-50': sortKey !== column.name,
                }"
                class="inline transition-transform ml-1"
              />
            </span>
          </th>
          <th
            class="w-[66px] py-[15.75px] px-6 border-b border-custom-gray-100"
          ></th>
        </tr>
      </thead>
      <tbody v-if="paginatedUsers.length > 0">
        <tr
          v-for="user in paginatedUsers"
          :key="user.login.username"
          class="hover:bg-gray-50"
        >
          <td class="w-[66px] py-[15.5px] px-6 border-b border-custom-gray-100">
            <div class="inline-flex align-sub">
              <label class="flex items-center relative cursor-pointer">
                <input
                  type="checkbox"
                  class="peer h-[18px] w-[18px] cursor-pointer transition-all appearance-none rounded-[5px] border-[2px] border-[#E9E9E9] checked:bg-primary checked:border-primary"
                />
                <span
                  class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white peer-checked:opacity-100 pointer-events-none"
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
          </td>

          <td
            class="py-[15.5px] px-6 border-b text-base font-medium leading-[22px]"
          >
            <div class="flex items-center space-x-4">
              <img
                :src="user.picture.large"
                alt="Avatar"
                class="w-6 h-6 rounded-full"
              />
              <span>{{ user.name.first }} {{ user.name.last }}</span>
            </div>
          </td>
          <td
            class="py-[15.5px] px-6 border-b border-custom-gray-100 text-base font-medium leading-[22px] text-custom-gray-500 break-words"
          >
            {{ user.email }}
          </td>
          <td
            class="py-[15.5px] px-6 border-b border-custom-gray-100 text-base font-medium leading-[22px] text-custom-gray-500 break-words"
          >
            {{ user.login.username }}
          </td>
          <td
            class="py-[15.5px] px-6 border-b border-custom-gray-100 text-base font-medium leading-[22px] text-custom-gray-500 break-words"
          >
            <div class="flex items-center gap-x-[10px]">
              <img
                :src="`https://flagsapi.com/${user.nat}/flat/16.png`"
                :alt="`Flag of ${user.location.country}`"
                class="w-[17px] h-[17px]"
              />
              {{ user.location.country }}
            </div>
          </td>
          <td
            class="py-[15.5px] px-6 border-b border-custom-gray-100 text-base font-medium leading-[22px] text-custom-gray-500 break-words"
          >
            {{ formatDate(user.registered.date) }}
          </td>
          <td class="w-[66px] py-[15.5px] px-6 border-b border-custom-gray-100">
            <img src="../assets/dots.png" alt="Three dots" />
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan="100%" class="py-6 text-center text-gray-500">
            Brak wyników do wyświetlenia.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-2 mt-[17px] xl:hidden">
    <UserCard
      v-for="user in paginatedUsers"
      :key="user.login.username"
      :user="user"
    />
  </div>
  <div
    v-if="totalPages > 0"
    class="flex flex-col-reverse items-center justify-between gap-y-4 mt-6 md:mt-8 md:flex-row"
  >
    <RowsPerPageSelect
      :options="rowsPerPageOptions"
      :selectedValue="rowsPerPage"
      @change-rows-per-page="updateRowsPerPage"
    />

    <PaginationTable
      :totalPages="totalPages"
      :currentPage="currentPage"
      @change-page="changePage"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineProps, watch } from "vue";
import PaginationTable from "./PaginationTable.vue";
import RowsPerPageSelect from "./RowsPerPageSelect.vue";
import UserCard from "./UserCard.vue";
import UserSearchAndSort from "./UserSearchAndSort.vue";
import { User } from "@/types/User";
import { Column, SortKey } from "@/types/Column";
import { formatDate } from "@/utils/formatDate";

const props = defineProps<{ users: User[] }>();
const rowsPerPage = ref<number>(10);
const rowsPerPageOptions = [10, 25, 50, 100, 200];
const currentPage = ref<number>(1);
const sortKey = ref<SortKey>("name");
const sortOrder = ref<"asc" | "desc">("asc");
const filterText = ref("");

const columns: Column[] = [
  {
    name: "name",
    title: "Imię i nazwisko",
  },
  {
    name: "email",
    title: "Adres email",
  },
  {
    name: "username",
    title: "Nazwa użytkownika",
  },
  {
    name: "country",
    title: "Kraj zamieszkania",
  },
  {
    name: "date",
    title: "Data rejestracji",
  },
];

const filteredUsers = computed(() => {
  const text = filterText.value.toLowerCase().trim();
  if (!text) return props.users;

  return props.users.filter(
    (user) =>
      user.login.username.toLowerCase().includes(text) ||
      user.location.country.toLowerCase().includes(text)
  );
});

watch(filterText, () => {
  currentPage.value = 1;
});

const sortedUsers = computed(() => {
  const sorted = [...filteredUsers.value];
  sorted.sort((a, b) => {
    if (sortKey.value === "name") {
      return (
        a.name.first.localeCompare(b.name.first) ||
        a.name.last.localeCompare(b.name.last)
      );
    } else if (sortKey.value === "email") {
      return a.email.localeCompare(b.email);
    } else if (sortKey.value === "username") {
      return a.login.username.localeCompare(b.login.username);
    } else if (sortKey.value === "country") {
      return a.location.country.localeCompare(b.location.country);
    } else if (sortKey.value === "date") {
      return (
        new Date(a.registered.date).getTime() -
        new Date(b.registered.date).getTime()
      );
    }
    return 0;
  });

  if (sortOrder.value === "desc") sorted.reverse();
  return sorted;
});

const totalPages = computed(() =>
  Math.ceil(sortedUsers.value.length / rowsPerPage.value)
);

const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * rowsPerPage.value;
  const end = start + rowsPerPage.value;
  return sortedUsers.value.slice(start, end);
});

const changePage = (page: number) => {
  currentPage.value = page;
};

const updateRowsPerPage = (rows: number) => {
  rowsPerPage.value = rows;
  currentPage.value = 1;
};

const sortBy = (key: SortKey) => {
  if (sortKey.value === key) {
    sortOrder.value = sortOrder.value === "asc" ? "desc" : "asc";
  } else {
    sortKey.value = key;
    sortOrder.value = "asc";
  }
};
</script>

<style lang="scss">
tr:last-child {
  td {
    border: none;
  }
}
</style>
