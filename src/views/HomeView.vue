<script setup lang="ts">
import TaskItem from '@/components/TaskItem.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import { useTaskStore } from '@/stores/TaskStore'

const taskStore = useTaskStore()
taskStore.getTasks()
</script>

<template>
  <main class="relative">
    <div class="flex flex-col gap-3" :class="{ 'blur-sm': taskStore.loading }">
      <!-- filters -->
      <template v-if="taskStore.filter === 'all'">
        <p>You have {{ taskStore.totalCount }} tasks left to do</p>
        <TaskItem v-for="task in taskStore.tasks" :key="task.id" :task="task" />
      </template>
      <template v-else-if="taskStore.filter === 'fav'">
        <p>You have {{ taskStore.favsCount }} favorite tasks</p>
        <TaskItem v-for="task in taskStore.favs" :key="task.id" :task="task" />
      </template>
    </div>
    <!-- loading -->
    <LoadingSpinner
      v-if="taskStore.loading"
      class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
    />
  </main>
</template>
