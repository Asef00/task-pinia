<template>
  <div class="flex flex-col gap-3">
    <TaskItem v-for="task in taskStore.favs" :key="task.id" :task="task" />
  </div>
</template>

<script setup lang="ts">
import { useTaskStore } from '@/stores/TaskStore'
import TaskItem from '@/components/TaskItem.vue';

const taskStore = useTaskStore()
</script>
