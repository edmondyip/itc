<script setup lang="ts">
import { useRoute } from 'vue-router'
import { usePost } from '@/stores/posts'
import { useTheme } from '@/stores/theme'

const theme = useTheme()
const route = useRoute()
const store = usePost()
const data = store.posts.items[route.params.id as string]
</script>

<template>
  <section v-if="data" class="single-post" :class="{ dark: theme.mode }">
    <div class="action">
      <div class="edit"><RouterLink :to="`/edit/${data.id}`">edit</RouterLink></div>
      <div class="delete"><RouterLink :to="`/delete/${data.id}`">delete</RouterLink></div>
    </div>
    <img class="cover" :src="`${data.photo}/1400/600`" />
    <h1 class="title">{{ data.title }}</h1>
    <caption>
      <a :href="`mailto:${data.user?.email}`"> {{ data.user?.name }}</a>
    </caption>
    <p class="body">{{ data.body }}</p>
  </section>
</template>

<style scoped lang="scss">
.single-post {
  @apply h-full py-4 relative;
  .cover {
    @apply object-cover rounded;
  }
  h1.title {
    @apply text-4xl bg-slate-200 font-serif capitalize text-center pt-6;
  }
  caption {
    @apply block text-center pb-6;
    a {
      @apply hover:bg-slate-400 p-1;
    }
  }
  .body {
    @apply min-h-[200px] flex bg-gray-200 p-6 text-2xl rounded;
  }
  .action {
    @apply justify-end flex gap-1 text-end;
    > div {
      @apply text-xs p-1 bg-gray-300 rounded cursor-pointer;
    }
    .edit {
      @apply hover:bg-green-300;
    }
    .delete {
      @apply hover:bg-red-300;
    }
  }
  &.dark {
    h1.title {
      @apply bg-slate-900;
    }
    .body {
      @apply bg-slate-800;
    }
    .action {
      > div {
        @apply bg-slate-500;
      }
      .edit {
        @apply hover:bg-green-800;
      }
      .delete {
        @apply hover:bg-red-800;
      }
    }
  }
}
</style>
