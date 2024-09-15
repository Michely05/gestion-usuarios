<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const users = ref([]);
const router = useRouter();

const fetchUsers = async () => {
  try {
    const response = await axios.get('/users.json');
    users.value = response.data.users;
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
  }
};

const calcularEdad = (birthdate) => {
  const birthDate = new Date(birthdate);
  const diff = Date.now() - birthDate.getTime();
  const age = new Date(diff).getUTCFullYear() - 1970;
  return age;
};

const navigateToForm = () => {
  router.push('/new-user');
};

onMounted(() => {
  fetchUsers();
});

</script>

<template>
  <div>
    <button @click="navigateToForm">Añadir usuario</button>
    <table v-if="users.length">
        <thead>
            <tr>
                <th>Nombre y apellidos</th>
                <th>Edad</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" :key="user.name">
                <td>{{ user.name }} {{ user.surname }}</td>
                <td> {{ calcularEdad(user.birthday) }}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>
