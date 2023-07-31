import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PostView from '@/views/PostView.vue'
import NewView from '@/views/NewView.vue'
import EditPostView from '@/views/EditView.vue'
import DeletePostView from '@/views/DeleteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/post/:id',
      name: 'post',
      component: PostView
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: EditPostView
    },
    {
      path: '/delete/:id',
      name: 'delete',
      component: DeletePostView
    },
    {
      path: '/new',
      name: 'new',
      component: NewView
    }
  ]
})

export default router
