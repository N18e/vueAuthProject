<template>
  <div class="auth-container">
    <h2>Регистрация</h2>
    <form @submit.prevent="register">
      <label>Email:</label>
      <input v-model="email" type="email" required />

      <label>Пароль:</label>
      <input v-model="password" type="password" required />

      <button type="submit">Зарегистрироваться</button>
    </form>
    <button @click="$router.push('/')">Войти</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const email = ref('');
    const password = ref('');

    const register = () => {
      console.log('Регистрация:', email.value, password.value);
      // Позже добавим запрос на бекенд
    };

    return { email, password, register };
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
