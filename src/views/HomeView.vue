<script setup lang="ts">
import TaskItem from '@/components/TaskItem.vue'

const taskList = [
  { id: 1, title: 'play gloomhaven', isFav: true },
  { id: 2, title: 'mow the lawn', isFav: false },
  { id: 3, title: 'become an eldern lord', isFav: true },
  { id: 4, title: 'eat some pinapples', isFav: false }
]
</script>

<template>
  <main>
    <div class="flex flex-col gap-3">
      <TaskItem v-for="task in taskList" :key="task.id" :task="task" />
    </div>
  </main>
</template>
