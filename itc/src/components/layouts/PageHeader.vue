<script setup lang="ts">
import NewPostButton from './NewPostButton.vue'
import ThemeSwitch from './ThemeSwitch.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <header class="container mx-auto h-64 m-0 p-0 bg-cover bg-bottom border-b-2 relative">
    <div class="flex justify-between">
      <ThemeSwitch />
      <NewPostButton v-if="route.path !== `/new`" />
    </div>
    <div class="text-5xl font-serif mx-auto p-8 md:p-16 text-center break-normal">
      <RouterLink to="/"> Simple Blog </RouterLink>
    </div>
  </header>
</template>
