<script setup lang="ts">
import TaskItem from '@/components/TaskItem.vue'

const taskList = [
  { title: 'play gloomhaven', isFav: true },
  { title: 'mow the lawn', isFav: false },
  { title: 'become an eldern lord', isFav: true },
  { title: 'eat some pinapples', isFav: false }
]
</script>

<template>
  <main>
    <div class="flex flex-col gap-3">
      <TaskItem v-for="(task, index) in taskList" :key="index" :task="task" />
    </div>
  </main>
</template>
