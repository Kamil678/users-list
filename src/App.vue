<template>
  <header
    class="flex items-center justify-between"
    aria-labelledby="header-title"
  >
    <div class="flex items-center justify-between gap-x-4">
      <h1
        id="header-title"
        class="text-black font-semibold text-[28px] leading-[34px] md:text-[32px] md:leading-[38px]"
      >
        Użytkownicy
      </h1>
      <TooltipComponent text="Lorem Ipsum is simply dummy text">
        <img src="./assets/tooltip-icon.png" alt="Tooltip icon" />
      </TooltipComponent>
    </div>
    <BasicButton
      text="Zaproś użytkownika"
      :icon="plusIcon"
      alt-icon="Plus icon"
    />
  </header>
  <main class="mt-4 md:mt-6">
    <section v-if="loading" aria-busy="true" aria-live="polite">
      <LoadingSpinner />
    </section>
    <section v-else-if="error" aria-labelledby="error-message">
      <p id="error-message" class="text-red-500 text-center">
        Nie udało się pobrać użytkowników.
      </p>
    </section>
    <section v-else>
      <UserTable :users="users" />
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from "vue";
import BasicButton from "./components/BasicButton.vue";
import TooltipComponent from "./components/TooltipComponent.vue";
import LoadingSpinner from "./components/LoadingSpinner.vue";
import { fetchUsers } from "@/services/usersService";
import type { User } from "@/types/User";
import plusIcon from "./assets/plus-icon.png";

const UserTable = defineAsyncComponent(
  () => import("./components/UserTable.vue")
);

const users = ref<User[]>([]);
const loading = ref(false);
const error = ref<string | null>(null);

const loadUsers = async () => {
  loading.value = true;
  try {
    users.value = await fetchUsers();
  } catch (e) {
    error.value = e instanceof Error ? e.message : "Nieznany błąd.";
  } finally {
    loading.value = false;
  }
};

onMounted(loadUsers);
</script>

<style lang="scss">
#app {
  margin: 32px 16px;
  font-family: "Inter", serif;

  @media (min-width: 768px) {
    margin: 50px;
  }
}
</style>
