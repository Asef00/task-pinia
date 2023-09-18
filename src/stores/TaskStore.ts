import { defineStore } from 'pinia'
import type { Task } from '@/types/Task'

export const useTaskStore = defineStore('taskStore', {
  state: () => {
    const tasks: Task[] = [
      { id: 1, title: 'play gloomhaven', isFav: true },
      { id: 2, title: 'mow the lawn', isFav: false },
      { id: 3, title: 'become an eldern lord', isFav: true },
      { id: 4, title: 'eat some pinapples', isFav: false }
    ]

    return tasks
  }
})
