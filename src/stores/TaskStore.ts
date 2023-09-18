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
    },
    favsCount(): number {
      return this.tasks.reduce((p, c) => {
        return c.isFav ? p + 1 : p
      }, 0)
    },
    totalCount(): number {
      return this.tasks.length
    }
  },
  actions: {
    addTask(task: Task) {
      this.tasks.push(task)
    },
    deleteTask(id: number) {
      const removeIndex = this.tasks.map((item) => item.id).indexOf(id)
      ~removeIndex && this.tasks.splice(removeIndex, 1)
    },
    toggleFav(id: number) {
      const toggleTask = this.tasks.find((item) => item.id == id)
      toggleTask.isFav = !toggleTask.isFav
    }
  }
})
