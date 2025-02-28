<template>
  <div class="auth-container">
    <h2>Вход</h2>
    <form @submit.prevent="login">
      <label>Email:</label>
      <input v-model="email" type="email" required />

      <label>Пароль:</label>
      <input v-model="password" type="password" required />

      <button type="submit">Войти</button>
    </form>
    <button @click="$router.push('/register')">Регистрация</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useAuthStore } from '../store/auth'; // Подключаем store

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const authStore = useAuthStore(); // Используем хранилище

    const login = () => {
      authStore.setUser({ email: email.value }, 'FAKE_TOKEN'); // Сохраняем данные
      console.log('Вход выполнен:', authStore.user); // Проверяем в консоли
    };

    return { email, password, login };
  }
};
</script>

<style scoped>
.auth-container {
  max-width: 300px;
  margin: auto;
  text-align: center;
}
input {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 8px;
}
button {
  margin-top: 10px;
  padding: 8px 16px;
}
</style>
