**📘 Руководство по настройке проекта Vue 3 + Vite**

**📌 Описание проекта**

**Название:** start1\
**Цель:** Создать **современное, удобное, мощное и масштабируемое**
веб-приложение на основе **Vue 3 + Vite** с использованием **Vue Router,
Pinia, Axios и Tailwind CSS**.

**🚀 1. Инициализация проекта**

**📍 Создание нового проекта**

Для начала создаем проект с помощью Vite:

npm create vite@latest start1 \--template vue

После выполнения команды у нас будет **готовый шаблон проекта**.

**📍 Установка зависимостей**

Переходим в папку проекта и устанавливаем зависимости:

cd start1

npm install

**📍 Запуск проекта**

Запускаем сервер разработки и проверяем работу:

npm run dev

Проект доступен по адресу:
[**[http://localhost:5173]{.underline}**](http://localhost:5173/)

**📂 2. Структура проекта**

Для удобства и масштабируемости проекта создаем **логичную структуру
каталогов**:

📁 start1/ \# Корень проекта

┣ 📁 public/ \# Статические файлы (favicon, изображения)

┣ 📁 src/ \# Исходный код приложения

┃ ┣ 📁 assets/ \# Шрифты, изображения, стили

┃ ┣ 📁 components/ \# Глобальные UI-компоненты (кнопки, модальные окна)

┃ ┣ 📁 layouts/ \# Шаблоны (Header, Footer, Sidebar)

┃ ┣ 📁 pages/ \# Страницы (Login, Register, Home)

┃ ┣ 📁 router/ \# Конфигурация маршрутов Vue Router

┃ ┣ 📁 store/ \# Глобальное состояние Pinia

┃ ┣ 📁 utils/ \# Вспомогательные функции (форматирование, валидация)

┃ ┣ 📁 services/ \# API-запросы через Axios

┃ ┣ 📁 directives/ \# Пользовательские директивы Vue

┃ ┣ 📁 composables/ \# Повторно используемые хуки (useAuth, useFetch)

┃ ┣ 📁 styles/ \# Глобальные стили (SCSS, Tailwind)

┃ ┣ 📁 views/ \# Основные страницы (LoginView, RegisterView)

┃ ┣ 📜 App.vue \# Корневой компонент Vue

┃ ┣ 📜 main.js \# Точка входа в приложение

┣ 📜 index.html \# Главный HTML-файл

┣ 📜 vite.config.js \# Конфигурация Vite

┣ 📜 package.json \# Файл зависимостей

┣ 📜 .gitignore \# Игнорируемые файлы Git

┗ 📜 README.md \# Документация проекта

**🛤 3. Настройка маршрутизации (Vue Router)**

**📍 Устанавливаем Vue Router**

npm install vue-router@4

**📍 Создаем файл src/router/index.js**

import { createRouter, createWebHistory } from \'vue-router\';

import LoginView from \'@/views/LoginView.vue\';

import RegisterView from \'@/views/RegisterView.vue\';

const routes = \[

{ path: \'/\', component: LoginView },

{ path: \'/register\', component: RegisterView }

\];

const router = createRouter({

history: createWebHistory(),

routes

});

export default router;

✅ **Теперь у нас есть маршруты / и /register.**

**🗄 4. Настройка глобального хранилища (Pinia)**

**📍 Устанавливаем Pinia**

npm install pinia

**📍 Создаем src/store/auth.js**

import { defineStore } from \'pinia\';

export const useAuthStore = defineStore(\'auth\', {

state: () =\> ({

user: null,

token: null

}),

actions: {

setUser(user, token) {

this.user = user;

this.token = token;

},

logout() {

this.user = null;

this.token = null;

}

}

});

✅ **Теперь можно управлять авторизацией в любом компоненте.**

**⚙️ 5. Настройка main.js**

**📍 Файл src/main.js**

import { createApp } from \'vue\';

import App from \'@/App.vue\';

import router from \'@/router\';

import pinia from \'@/store\';

const app = createApp(App);

app.use(router);

app.use(pinia);

router.isReady().then(() =\> {

app.mount(\'#app\');

});

✅ **Теперь все основные плагины подключены.**

**🛠 6. Настройка Vite**

**📍 Файл vite.config.js**

import { defineConfig } from \'vite\';

import vue from \'@vitejs/plugin-vue\';

import vueDevTools from \'vite-plugin-vue-devtools\';

import { fileURLToPath } from \'url\';

export default defineConfig({

plugins: \[

vue(),

vueDevTools()

\],

resolve: {

alias: {

\'@\': fileURLToPath(new URL(\'./src\', import.meta.url))

}

},

server: {

port: 5173,

strictPort: true

}

});

✅ **Добавлен алиас @ для удобных импортов.** ✅ **Задали фиксированный
порт 5173.**

**🚀 7. Отправка проекта в GitHub**

**📍 Инициализируем Git-репозиторий**

git init

git add .

git commit -m \"Инициализация проекта Vue 3 + Vite\"

**📍 Добавляем удаленный репозиторий и пушим код**

git remote add origin \<URL вашего репозитория\>

git branch -M main

git push -u origin main

✅ **Проект загружен в GitHub!**

**🎯 Итог**

🔥 **Что сделано?**

-   ✅ **Создан проект Vue 3 + Vite**

-   ✅ **Настроена структура**

-   ✅ **Добавлена маршрутизация**

-   ✅ **Реализовано глобальное состояние Pinia**

-   ✅ **Проект загружен в GitHub**
