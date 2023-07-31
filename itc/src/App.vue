<script setup lang="ts">
import { useRoute } from 'vue-router'
import { usePost } from '@/stores/posts'
import MainLayout from '@/components/layouts/MainLayout.vue'

const route = useRoute()
const store = usePost()
store.getPosts()
</script>

<template>
  <MainLayout :key="route.path">
    <RouterView />
  </MainLayout>
</template>
