<script setup lang="ts">
import { computed } from 'vue'
import { usePost } from '@/stores/posts'
import { useTheme } from '@/stores/theme'
import FirstPostCard from '@/components/posts/FirstPostCard.vue'
import PostCard from '@/components/posts/PostCard.vue'
import PostPageinate from '@/components/posts/PostPageinate.vue'

const theme = useTheme()
const store = usePost()

const firstPost = computed(() => {
  return store.postsId[0]
})

const sortedPostsWithoutFirst = computed(() => {
  return store.postsId.slice(1)
})
</script>

<template>
  <section class="w-full card-container" :class="{ dark: theme.mode }">
    <FirstPostCard :id="firstPost" :post="store.posts.items[firstPost]" />
  </section>
  <PostPageinate />
  <section class="post-list card-container" :class="{ dark: theme.mode }">
    <PostCard
      :id="id"
      :post="store.posts.items[id]"
      v-for="id in sortedPostsWithoutFirst"
      :key="id"
    />
  </section>
  <PostPageinate />
</template>

<style lang="scss" scoped>
.post-list {
  @apply flex flex-wrap items-stretch pt-6;
}
.card-container {
  &.dark {
    :deep(article) {
      .card-bg {
        @apply bg-slate-800;
      }
      .card-action {
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
}
</style>
