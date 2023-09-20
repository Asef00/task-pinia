<template>
  <div class="p-4 border-l-4 fixed top-5 left-5" :class="activeClass" role="alert">
    <p class="font-bold">Be Warned</p>
    <p>Something not ideal might be happening.</p>
    <button class="absolute top-2 right-2" @click="taskStore.alert.show = false">
      <i class="material-icons">close</i>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useTaskStore } from '@/stores/TaskStore'
import { computed } from 'vue'

const taskStore = useTaskStore()

const activeClass = computed(() => ({
  'bg-orange-100 border-orange-500 text-orange-700': taskStore.alert.type === 'warn',
  'bg-red-100 border-red-500 text-red-700': taskStore.alert.type === 'error',
  'bg-blue-100 border-blue-500 text-blue-700': taskStore.alert.type === 'info',
}))
</script>
