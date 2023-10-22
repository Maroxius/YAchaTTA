import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'


import App from './App.vue'
import HomePage from './components/HomePage.vue'
import ChatPage from './components/ChatPage.vue'
import ApiPage from './components/ApiPage.vue'
import InfoPage from './components/InfoPage.vue'
import WrongPage from './components/WrongPage.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
// 
    {
        path: '/chat',
        name: 'Chat',
        component: ChatPage
    },
// 
    {
        path: '/api',
        name: 'Api',
        component: ApiPage
    },
// 
    {
        path: '/info',
        name: 'Info',
        component: InfoPage
    },
// 
    {
        path: '/:pathMatch(.*)*',
        component: WrongPage
    }
]

const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
)

const app = createApp(App)
app.use(router)
app.mount(`#app`)
