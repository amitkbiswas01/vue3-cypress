import { defineStore } from "pinia";
import { Todo } from "./global";
import { useFetch } from "./composables/fetch";

export const useStore = defineStore("main", {
  state: () => ({
    /** @type {Todo []} */
    todos: [] as Todo[],
  }),
  getters: {
    /**
     * @returns {Todo[]}
     */
    finishedTodos(state) {
      return state.todos.filter((todo: Todo) => todo.completed);
    },
    /**
     * @returns {Todo[]}
     */
    allTodos(state) {
      return state.todos;
    },
  },
  actions: {
    async addTodos() {
      const url = "https://jsonplaceholder.typicode.com/todos/";
      const { data, error } = await useFetch(url);

      if (!error.value) {
        this.todos = data;
      }
    },
  },
});
