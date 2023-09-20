import type { Task } from '@/types/Task'
import { defineStore } from 'pinia'

type AlertType = 'error' | 'warn' | 'info'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [] as Task[],
    loading: false,
    alert: { type: 'info' as AlertType, message: '', show: false },
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
      if (!res.ok) {
        this.alert.message = (data && data.message) || res.statusText;
        this.alert.type = 'error'
        this.alert.show = true
      }

      this.tasks = data
      this.loading = false
    },
    async addTask(task: Task) {
      this.tasks.push(task)
      this.loading = true
      const res = await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        body: JSON.stringify(task),
        headers: { 'Content-Type': 'application/json' }
      })

      if (!res.ok) {
        // this.alert.message = (data && data.message) || res.statusText;
        this.alert.message = 'Something went wrong!';
        this.alert.type = 'error'
        this.alert.show = true
      }
      this.loading = false
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
