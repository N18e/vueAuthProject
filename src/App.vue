<script setup>
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// Динамическое название страницы
const pageTitle = computed(() => route.name || 'Vue App');

watch(pageTitle, (newTitle) => {
  document.title = newTitle;
});
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style scoped>
#app {
  font-family: 'Arial', sans-serif;
  text-align: center;
  margin-top: 60px;
}
</style>
