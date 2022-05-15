<template>
  <div>
    <p>isAuthenticated: {{ isAuthenticated }}</p>
    <p>isLoading: {{ isLoading }}</p>
    <p>error: {{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue';

const { isAuthenticated, isLoading, error } = useAuth0();
</script>
