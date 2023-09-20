import type { Task } from '@/types/Task'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [] as Task[],
    loading: false,
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
    async getTasks() {
      this.loading = true

      const res = await fetch('http://localhost:3000/tasks')
      const data = await res.json()

      this.tasks = data
      this.loading = false
    },
    addTask(task: Task) {
      this.tasks.push(task)
    },
    deleteTask(id: number) {
      const removeIndex = this.tasks.map((item) => item.id).indexOf(id)
      ~removeIndex && this.tasks.splice(removeIndex, 1)
    },
    toggleFav(id: number) {
      const toggleTask = this.tasks.find((item) => item.id == id)
      if (toggleTask !== undefined) toggleTask.isFav = !toggleTask.isFav
    }
  }
})
