<script setup>
import UserList from './components/UserList.vue';
import UserForm from './components/UserForm.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div id="app">
    <RouterView></RouterView>
  </div>
</template>

<style scoped>

h1 {
  color: #00113f;
}

@media (min-width: 1024px) {
  
}
</style>
