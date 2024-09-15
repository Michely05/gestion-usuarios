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
  <div class="userList-content">
    <div class="btn-container">
      <button class="add-user-btn" @click="navigateToForm">Añadir usuario</button>
    </div>
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

<style scoped>

.userList-content {
  margin: 5rem auto;
}

.btn-container{
  display: flex;
  justify-content: flex-end;
}

.add-user-btn {
  background-color: #00c2ff;
  color: #ffff;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.add-user-btn:hover {
  background-color: #4199be;
}

table {
  width: 100%;
  margin: 2rem auto;
  border-collapse: collapse;
  border: 2px solid #ddd;
  font-size: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  th {
  padding: 15px;
  color: #7a7a7a;
  text-align: left;
  font-weight: bold;
}

td {
  padding: 15px;
  border-bottom: 1px solid #ddd;
  border-top: 1px solid #ddd;
}
}

</style>
