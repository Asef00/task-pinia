<script setup lang="ts">
import TaskItem from '@/components/TaskItem.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import { useTaskStore } from '@/stores/TaskStore'

const taskStore = useTaskStore()
taskStore.getTasks()
</script>

<template>
  <main>
    <div class="flex flex-col gap-3">
      <!-- filters -->
      <template v-if="taskStore.filter === 'all'">
        <p>You have {{ taskStore.totalCount }} tasks left to do</p>
        <TaskItem v-for="task in taskStore.tasks" :key="task.id" :task="task" />
      </template>
      <template v-else-if="taskStore.filter === 'fav'">
        <p>You have {{ taskStore.favsCount }} favorite tasks</p>
        <TaskItem v-for="task in taskStore.favs" :key="task.id" :task="task" />
      </template>
      <!-- loading -->
      <LoadingSpinner v-if="taskStore.loading" />
    </div>
  </main>
</template>
