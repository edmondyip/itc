<script setup lang="ts">
import { useTheme } from '@/stores/theme'

const store = useTheme()
store.getMode()
const onChangeTheme = () => {
  return store.updateMode()
}
</script>
<template>
  <div class="theme-switch" :class="{ dark: store.mode }">
    <button @click="onChangeTheme" v-if="store.mode">Dark</button>
    <button @click="onChangeTheme" v-else>Light</button>
  </div>
</template>

<style scoped lang="scss">
.theme-switch {
  @apply p-1;
  button {
    @apply bg-slate-300 cursor-pointer rounded p-2 transition-all ease-in;
    &:hover {
      @apply bg-gray-500;
    }
  }
  &.dark {
    button {
      @apply bg-slate-700;

      &:hover {
        @apply bg-slate-500;
      }
    }
  }
}
</style>
