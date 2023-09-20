<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
import AlertPopup from '@/components/AlertPopup.vue'
import { useTaskStore } from '@/stores/TaskStore'

const taskStore = useTaskStore()
</script>

<template>
  <TheHeader />
  <RouterView />
  <AlertPopup v-if="taskStore.alert.show" />
</template>
