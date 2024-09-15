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
    <div class="userForm-container">
        <form @submit.prevent="handleSubmit">
          <h2>Crear nuevo</h2>
            <label for="name">Nombre:</label>
            <input type="text" v-model="user.name" required />
            <label for="surname">Apellido:</label>
            <input type="text" v-model="user.surname" required />
            <label for="birthdate">Fecha de Nacimiento:</label>
            <input type="date" v-model="user.birthdate" required />
            <div class="btn-container">
              <button class="submit-btn" type="submit">Guardar</button>
          </div>
        </form>
    </div>
</template>


<style scoped>
.userForm-container {
  max-width: 500px;
  margin: 5rem auto;
  padding: 1rem;
  border: 2px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

form {
  display: flex;
  flex-direction: column;
  gap: 16px;

  label {
    font-size: 16px;
    font-weight: bold;
    color: #7a7a7a;
}

input[type="text"],
input[type="date"] {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: border-color 0.3s ease;
}

input:focus {
  border-color: #00113f;
  outline: none;
}
}

h2 {
  color:#00113f;
  text-align: center;
}

.btn-container {
  display: flex;
  justify-content: center;
  padding: 16px;
}

.submit-btn {
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

.submit-btn:hover {
  background-color: #4199be;
}
</style>
