<script setup lang="ts">
import { useTaskStore } from '@/stores/TaskStore'
import AddTaskForm from '@/components/AddTaskForm.vue'
const activeClass = 'bg-amber-300 text-black border-black'

const taskStore = useTaskStore()
</script>

<template>
  <header class="mb-4">
    <div class="flex flex-col gap-4 items-center">
      <div class="flex items-end gap-2">
        <img class="-rotate-12" src="@/assets/logo.svg" alt="pinia logo" width="45" height="75" />
        <h1 class="rotate-3 text-2xl font-bold mb-2">Pinia Tasks</h1>
      </div>
      <AddTaskForm />
    </div>
    <nav class="flex gap-2 justify-center mt-4">
      <button
        @click="taskStore.filter = 'all'"
        class="border px-2 py-1 rounded"
        :class="[taskStore.filter === 'all' ? activeClass : '']"
      >
        All Tasks
      </button>
      <button
        @click="taskStore.filter = 'fav'"
        class="border px-2 py-1 rounded"
        :class="[taskStore.filter === 'fav' ? activeClass : '']"
      >
        Favorites
      </button>
    </nav>
  </header>
</template>
