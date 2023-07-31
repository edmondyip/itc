<script setup lang="ts">
const props = defineProps(['post'])
</script>

<template>
  <article>
    <div class="card-bg">
      <RouterLink :to="`/post/${props.post.id}`">
        <div class="w-full md:w-1/2">
          <div
            class="card-img"
            :style="{ backgroundImage: `url(${props.post.photo}/600/400)` }"
          ></div>
        </div>
        <div class="w-full md:w-1/2 flex flex-col flex-grow flex-shrink">
          <h2 class="card-title">{{ props.post.title }}</h2>
          <p class="card-body">{{ props.post.body }}</p>
          <div class="card-footer">{{ props.post.user.name }}</div>
        </div>
      </RouterLink>
      <div class="card-action">
        <div class="edit"><RouterLink :to="`/edit/${props.post.id}`">edit</RouterLink></div>
        <div class="delete"><RouterLink :to="`/delete/${props.post.id}`">delete</RouterLink></div>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
article {
  @apply w-full p-6 flex flex-col flex-grow flex-shrink;
  .card-bg {
    @apply h-full bg-white rounded overflow-hidden shadow-lg hover:shadow-sm transition-all ease-out relative;
    a {
      @apply h-full flex-1 md:flex;
      .card-img {
        @apply w-full bg-cover bg-center h-64 md:h-96;
      }
      .card-title {
        @apply w-full font-bold text-xl px-6 mt-6 capitalize;
      }
      .card-body {
        @apply px-6 mb-5;
      }
      .card-footer {
        @apply flex-none mt-auto p-6;
      }
    }
    .card-action {
      @apply justify-end top-1 left-1 absolute hidden gap-1 text-end;
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
    &:hover {
      .card-img {
        @apply grayscale;
      }
      .card-action {
        @apply flex;
      }
    }
  }
}
</style>
