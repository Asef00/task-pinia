<template>
  <form class="flex gap-2" @submit.prevent="addTask">
    <input
      v-model="newTask"
      class="rounded text-slate-900 px-2 py-1"
      type="text"
      placeholder="I need to..."
    />
    <button type="submit" class="rounded px-4 bg-amber-300 text-slate-950">Add</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTaskStore } from '@/stores/TaskStore'

const newTask = ref('')
const taskStore = useTaskStore()

const addTask = () => {
  if (newTask.value.length) {
    taskStore.addTask({ title: newTask.value, isFav: false })
    newTask.value = ''
  }
}
</script>
