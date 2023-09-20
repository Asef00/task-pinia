<template>
  <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 fixed top-5 left-5" role="alert">
    <p class="font-bold">Be Warned</p>
    <p>Something not ideal might be happening.</p>
    <button class="absolute top-2 right-2" @click="taskStore.alert.show = false">
    <i class="material-icons">close</i>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useTaskStore } from '@/stores/TaskStore';

const taskStore = useTaskStore()
</script>