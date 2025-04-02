<script setup>
  import { useRouter } from 'vue-router';

  const router = useRouter();

  function logout() {
    localStorage.removeItem("user");
    router.push("/register");
  }

  const showNavbar = computed(() => router.path !== "/register");
</script>

<template>

  <header class="navbar">
    <button @click="logout">Se déconnecter</button>
  </header>

  <main>
    <div class="container">
      <RouterView />
    </div>
  </main>

</template>

<style scoped>
  .navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  background-color: var(--color-bg-primary);
  z-index: 1;
}
</style>