<script setup>
import { RouterView } from 'vue-router';
import UserList from './components/UserList.vue';
</script>


<template>
  <div id="app">
    <h1>Gestión de usuarios</h1>
    <UserList />
    <router-view></router-view>
  </div>
</template>


<style scoped>
h1 {
  color: #00113f;
}
</style>
