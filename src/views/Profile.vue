<template>
  <h1>Login page</h1>

  <div>
    <img :src="auth.user.picture" :alt="auth.user.name" />
    <h2>{{ auth.user.name }}</h2>
    <p>{{ auth.user.email }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useAuth } from "@/plugins/auth";
export default defineComponent({
  name: "Login",
  setup() {
    const auth = useAuth();

    return {
      auth
    };
  }
});
</script>
