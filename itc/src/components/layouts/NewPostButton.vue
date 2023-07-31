<script setup lang="ts">
import { useTheme } from '@/stores/theme'

const theme = useTheme()
</script>

<template>
  <div class="p-3">
    <RouterLink class="button" :class="{ dark: theme.mode }" to="/new">New Post</RouterLink>
  </div>
</template>

<style scoped lang="scss">
.button {
  @apply bg-slate-300 cursor-pointer rounded p-2 transition-all ease-in;
  &:hover {
    @apply bg-gray-500;
  }
  &.dark {
    @apply bg-slate-700;

    &:hover {
      @apply bg-slate-500;
    }
  }
}
</style>
