<template>
  <div class="flex justify-between px-4 py-5 shadow bg-slate-600 rounded">
    <p>{{ props.task.title }}</p>
    <div class="flex gap-2"></div>
  </div>
</template>

<script setup lang="ts">
import type { Task } from '@/types/Task'

const props = defineProps<{
  task: Task
}>()
</script>
