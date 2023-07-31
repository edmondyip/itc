<script setup lang="ts">
const props = defineProps(['post'])
</script>

<template>
  <article>
    <div class="card-bg">
      <RouterLink :to="`/post/${props.post.id}`">
        <div
          class="card-img"
          :style="{ backgroundImage: `url(${props.post.photo}/300/200)` }"
        ></div>
        <div>
          <h2 class="card-title">{{ props.post.title }}</h2>
          <p class="card-body">{{ props.post.body }}</p>
        </div>
        <div class="card-footer">
          <div class="name">
            {{ props.post.user.name }}
          </div>
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
  @apply w-full md:w-1/3 p-6;
  .card-bg {
    @apply h-full bg-white rounded overflow-hidden shadow-lg hover:shadow-sm transition-all ease-out relative;
    a {
      @apply h-full flex flex-col justify-stretch gap-4;
      .card-img {
        @apply w-full bg-cover bg-center h-64 pb-6 transition-all ease-in;
      }
      .card-title {
        @apply w-full font-bold text-xl px-6 capitalize;
      }
      .card-body {
        @apply font-serif text-base px-6 mb-5;
      }
      .card-footer {
        @apply flex mt-auto p-6 justify-between;
      }
    }
    .card-action {
      @apply justify-end top-1 right-1 absolute hidden gap-1 text-end;
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
