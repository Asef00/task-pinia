<script setup lang="ts">
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
      <div class="flex justify-between px-4 py-5 shadow bg-slate-600 rounded" v-for="(task, index) in taskList" :key="index">
        <p>{{ task.title }}</p>
        <div class="flex gap-2"></div>
      </div>
    </div>
  </main>
</template>
