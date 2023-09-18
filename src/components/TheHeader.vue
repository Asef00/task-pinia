<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="mb-4">
    <div class="flex flex-col gap-4 items-center">
      <div class="flex items-end gap-2">
        <img class="-rotate-12" src="@/assets/logo.svg" alt="pinia logo" width="45" height="75" />
        <h1 class="rotate-3 text-2xl font-bold mb-2">Pinia Tasks</h1>
      </div>
      <div class="flex gap-2">
        <input class="rounded px-2 py-1" type="text" placeholder="I need to..." />
        <button class="rounded px-4 bg-amber-300 text-slate-950">Add</button>
      </div>
    </div>
    <nav class="flex gap-2 justify-end">
      <RouterLink class="border px-2 py-1 rounded" to="/">All Tasks</RouterLink>
      <RouterLink class="border px-2 py-1 rounded" to="/favorites">Favorites</RouterLink>
    </nav>
  </header>
</template>
