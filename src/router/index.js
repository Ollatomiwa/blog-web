import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Post from '../views/Post.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    {
      name: 'Home',
      routes: '/',
      component: Home
    },

    {
      name:'Post',
      routes: '/post:id',
      component: Post,
    },
  ],
})

export default router
