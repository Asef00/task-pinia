import type { Task } from '@/types/Task'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      { id: 1, title: 'play gloomhaven', isFav: true },
      { id: 2, title: 'mow the lawn', isFav: false },
      { id: 3, title: 'become an eldern lord', isFav: true },
      { id: 4, title: 'eat some pinapples', isFav: false }
    ],
    filter: 'all'
  }),
  getters: {
    favs(): Task[] {
      return this.tasks.filter((x) => x.isFav)
    }
  }
})
