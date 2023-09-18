<script setup lang="ts">
import { useTaskStore } from '@/stores/TaskStore'
import { ref } from 'vue'

const activeClass = 'bg-lime-500 text-black border-black'

const taskStore = useTaskStore()

const newTask = ref('')

const addTask = () => {
  taskStore.addTask({ id: taskStore.totalCount + 1, title: newTask.value, isFav: false })
  newTask.value = ''
}
</script>

<template>
  <header class="mb-4">
    <div class="flex flex-col gap-4 items-center">
      <div class="flex items-end gap-2">
        <img class="-rotate-12" src="@/assets/logo.svg" alt="pinia logo" width="45" height="75" />
        <h1 class="rotate-3 text-2xl font-bold mb-2">Pinia Tasks</h1>
      </div>
      <form class="flex gap-2" @submit.prevent="addTask">
        <input
          v-model="newTask"
          class="rounded text-slate-900 px-2 py-1"
          type="text"
          placeholder="I need to..."
        />
        <button type="submit" class="rounded px-4 bg-amber-300 text-slate-950">Add</button>
      </form>
    </div>
    <nav class="flex gap-2 justify-end">
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
