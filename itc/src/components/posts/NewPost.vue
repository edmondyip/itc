<script setup lang="ts">
import { ref } from 'vue'
import type { Post } from '@/stores/posts'
import { useTheme } from '@/stores/theme'
import { usePost } from '@/stores/posts'
import PostCard from './PostCard.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const theme = useTheme()
const store = usePost()

const submitNotice = ref<boolean>(false)

const inputData = ref<Post>({
  userId: 1,
  user: {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz'
  },
  id: Object.keys(store.posts.items).length + 1,
  title: 'Title',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  photo: 'https://'
})

const randomImage = () => {
  return (inputData.value.photo = `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/`)
}

const submitPost = () => {
  inputData.value.title.length > 0 && inputData.value.body.length > 0
    ? store.createPost(inputData.value)
    : (submitNotice.value = true)
  return router.push('/')
}
</script>

<template>
  <section class="form-wrapper" :class="{ dark: theme.mode }">
    <dl class="form w-2/3">
      <dt>Cover Image <span class="random" @click="randomImage()">(Random Image)</span></dt>
      <dd><input v-model="inputData.photo" type="url" placeholder="https://" /></dd>
      <dt>
        Title* <span class="notice" v-if="inputData.title.length === 100">Max 100 characters</span>
        <div class="notice" v-if="submitNotice">Please input data</div>
      </dt>
      <dd><input v-model="inputData.title" type="text" maxlength="100" /></dd>
      <dt>
        Body*
        <div class="notice" v-if="submitNotice">Please input data</div>
      </dt>
      <dd><textarea class="body" v-model="inputData.body"></textarea></dd>
    </dl>
    <PostCard :post="inputData" />
  </section>
  <div class="action" :class="{ dark: theme.mode }">
    <button @click="submitPost()" class="submit">Submit</button>
  </div>
</template>

<style scoped lang="scss">
section.form-wrapper {
  @apply bg-slate-300 rounded-t p-12 flex;
  :deep(article) {
    a {
      @apply pointer-events-none;
    }
  }
  .random {
    @apply text-xs hover:underline cursor-pointer;
  }
  .notice {
    @apply text-red-600 text-xs;
  }
  .body {
    @apply resize-none h-48;
  }
  dl.form {
    dt {
      @apply text-xl;
    }
    input,
    textarea {
      @apply rounded p-2 w-full mb-6;
    }
  }
  &.dark {
    @apply bg-slate-600;
    dl.form {
      input,
      textarea {
        @apply bg-slate-800;
      }
    }
    :deep(article) {
      .card-bg {
        @apply bg-slate-800;
      }
    }
  }
}
.action {
  @apply text-center;
  .submit {
    @apply w-full bg-slate-400 hover:bg-cyan-300 rounded-b block p-2;
  }
  &.dark {
    .submit {
      @apply bg-gray-700 hover:bg-cyan-700;
    }
  }
}
</style>
