<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();
const user = ref({
  name: '',
  surname: '',
  birthday: ''
});

const handleSubmit = async () => {
  try {
    await axios.post('/users.json', user.value);
    router.push('/');
  } catch (error) {
    console.error('Error al crear el usuario:', error);
  }
};
</script>

<template>
    <div>
        <h2>Crear Usuario</h2>
        <form @submit.prevent="handleSubmit">
            <label for="name">Nombre:</label>
            <input type="text" v-model="user.name" required />
            <label for="surname">Apellido:</label>
            <input type="text" v-model="user.surname" required />
            <label for="birthdate">Fecha de Nacimiento:</label>
            <input type="date" v-model="user.birthdate" required />
            <button type="submit">Guardar</button>
        </form>
    </div>
</template>
