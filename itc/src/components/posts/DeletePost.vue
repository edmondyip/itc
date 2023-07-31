<script setup lang="ts">
import { usePost } from '@/stores/posts'
import { useRoute, useRouter } from 'vue-router'
const store = usePost()
const route = useRoute()
const router = useRouter()
const postId = route.params.id as string
const data = store.posts.items[postId]

const deletePost = () => {
  store.deletePost(+postId)
  return router.push('/')
}
</script>

<template>
  <section class="h-96">
    <h1 class="text-4xl text-center p-6">
      Are you sure <span class="text-red-500">DELELTE</span> "{{ data.title }}"
    </h1>
    <div
      @click="deletePost()"
      class="text-3xl text-center bg-red-500 max-w-md mx-auto py-4 cursor-pointer"
    >
      DELETE
    </div>
  </section>
</template>
