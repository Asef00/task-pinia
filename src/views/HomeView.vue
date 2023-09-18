<script setup lang="ts">
import TaskItem from '@/components/TaskItem.vue'
import { useTaskStore } from '@/stores/TaskStore'

const taskStore = useTaskStore()
</script>

<template>
  <main>
    <div class="flex flex-col gap-3">
      <TaskItem v-for="task in taskStore.tasks" :key="task.id" :task="task" />
    </div>
  </main>
</template>
