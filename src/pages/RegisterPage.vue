<script setup>

    import {ref, computed} from "vue";
    import { useRouter } from "vue-router";

    const router = useRouter();

    const users = ref([]);

    const user_name = ref("");
    const user_mail = ref("");
    const user_pass = ref("");

    const isFormValid = computed(() => !!user_name.value.trim() && !!user_mail.value.trim() && !!user_pass.value.trim());

    const isLoading = ref(false);
    
    function register() {
        isLoading.value = true;
        /*console.log({
            username: user_name.value,
            email: user_mail.value,
            password: user_pass.value
        });

        setTimeout( () => {
            router.push("/");
        }, 1000 );*/

        fetch("https://posts-crud-api.vercel.app/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: user_name.value,
                email: user_mail.value,
                password: user_pass.value,
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            localStorage.setItem("user", JSON.stringify(data));
            router.push("/");
        })
    }

</script>

<template>
    <main>
        <form @submit.prevent="register">
            <h1 style="margin-bottom: 1rem">Créer un compte</h1>
            <input
            type="text"
            id="username"
            name="username"
            required
            v-model="user_name"
            placeholder="Nom d'utilisateur"
            />
            <input
            type="email"
            id="email"
            name="email"
            autocomplete="email"
            required
            v-model="user_mail"
            placeholder="Email"
            />
            <input
            type="password"
            id="password"
            name="password"
            autocomplete="new-password"
            required
            v-model="user_pass"
            placeholder="Mot de passe"
            />
            <button type="submit" :disabled="!isFormValid || isLoading" :class="{ loading: isLoading }">
            Créer un compte
            </button>
        </form>
    </main>
</template>

<style scoped>
input {
  background: var(--color-bg-tertiary);
  border: none;
  border-radius: 10px;
  color: var(--color-text-primary);
  outline: none;
  padding: 1rem;
  margin-bottom: 1rem;
}
button {
  width: 100%;
}
</style>