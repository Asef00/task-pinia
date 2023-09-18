<template>
  <div class="flex justify-between items-center px-4 py-5 shadow bg-slate-600 rounded">
    <p>{{ props.task.title }}</p>
    <div class="flex gap-2">
      <button @click="taskStore.deleteTask(task.id)">
        <i class="material-icons hover:text-gray-50 drop-shadow">delete</i>
      </button>
      <button @click="taskStore.toggleFav(task.id)">
        <i
          class="material-icons hover:text-gray-50 drop-shadow"
          :class="{ 'text-red-600': props.task.isFav }"
        >
          favorite
        </i>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Task } from '@/types/Task'
import { useTaskStore } from '@/stores/TaskStore'

const taskStore = useTaskStore()

const props = defineProps<{
  task: Task
}>()
</script>
