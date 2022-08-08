<script setup lang="ts">
import { onMounted, ref } from "vue";
import TodoItem from "./components/TodoItem.vue";
import { useStore } from "./store";

const store = useStore();

onMounted(() => {
  store.addTodos();
});
</script>

<template>
  <h1
    class="text-6xl text-red-900 text-center font-mono font-semibold mt-16 mb-8"
  >
    Todos
  </h1>
  <TodoItem :todos="store.allTodos" />
</template>

<style scoped></style>
