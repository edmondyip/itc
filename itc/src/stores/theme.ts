import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTheme = defineStore('theme', () => {
  const mode = ref<boolean>(false)

  // get system theme
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')

  const getMode = () => {
    return systemTheme.matches ? (mode.value = true) : (mode.value = false)
  }

  const updateMode = () => {
    return (mode.value = !mode.value)
  }

  return {
    mode,
    getMode,
    updateMode
  }
})
