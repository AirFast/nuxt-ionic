<script setup lang="ts">
import { useUsersStore } from "~/store/useUsersStore";

const usersStore = useUsersStore();
const { users } = storeToRefs(usersStore);

await usersStore.fetchUsers();

const results = ref(users.value);

const handleInput = (q?: string | null) => {
  const query = q?.toLowerCase();

  results.value = users.value.filter(
    (d) => d.name.toLowerCase().indexOf(query ?? "") > -1
  );
};
</script>

<template>
  <h1>{{ $t("menu.home") }}</h1>

  <ion-searchbar
    :debounce="300"
    @ionInput="handleInput($event.target.value)"
    :placeholder="$t('searchPlaceholder')"
  />

  <ion-list>
    <ion-item button v-for="{ name, email } in results">
      <ion-avatar aria-hidden="true" slot="start">
        <img src="https://ionicframework.com/docs/img/demos/avatar.svg" />
      </ion-avatar>
      <ion-label>{{ name }}</ion-label>
      <ion-note slot="end">{{ email }}</ion-note>
    </ion-item>
  </ion-list>
</template>
~/store/useUsersStore
