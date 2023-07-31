<script setup lang="ts">
import { usePost } from '@/stores/posts'
import { useTheme } from '@/stores/theme'

const theme = useTheme()
const store = usePost()

const totalPage = Math.round(Object.keys(store.posts.items).length / store.posts.postPerPage)

const onChangePage = (id: number) => {
  return store.updatePage(id)
}
</script>

<template>
  <ul class="container px-6 flex flex-nowrap gap-2" :class="{ dark: theme.mode }">
    <li
      @click="onChangePage(id)"
      v-for="id in totalPage"
      :key="id"
      :class="{ active: store.posts.page === id }"
    >
      {{ id }}
    </li>
  </ul>
</template>

<style scoped lang="scss">
ul {
  li {
    @apply cursor-pointer rounded px-2 transition-all ease-in;
    &:hover {
      @apply bg-gray-300;
    }
    &.active {
      @apply bg-gray-400;
    }
  }
  &.dark {
    li {
      &:hover {
        @apply bg-slate-700;
      }
      &.active {
        @apply bg-slate-500;
      }
    }
  }
}
</style>
