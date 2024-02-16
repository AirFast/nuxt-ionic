type User = {
  name: string;
  email: string;
};

export const useUsersStore = defineStore("users", () => {
  const config = useRuntimeConfig();
  const users: Ref<User[]> = ref([]);

  const fetchUsers = async () => {
    try {
      const { data } = await useFetch<User[]>(config.public.apiUsersUrl);

      users.value = data.value ?? [];
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return {
    users,
    fetchUsers,
  };
});
