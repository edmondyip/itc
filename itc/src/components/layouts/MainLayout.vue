<script setup lang="ts">
import { useTheme } from '@/stores/theme'
import PageHeader from './PageHeader.vue'
import PageFooter from './PageFooter.vue'

const theme = useTheme()
</script>

<template>
  <div class="main-container" :class="{ dark: theme.mode }">
    <PageHeader />
    <main>
      <slot></slot>
    </main>
    <PageFooter />
  </div>
</template>

<style scoped lang="scss">
.main-container {
  @apply w-full h-full text-gray-900 bg-slate-200 transition-colors ease-in-out;
  &.dark {
    @apply bg-slate-900 text-gray-200;
  }
  main {
    @apply container px-4 md:px-0 max-w-6xl mx-auto;
  }
}
</style>
