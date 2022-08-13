<script setup lang="ts">
import { onMounted, ref } from "vue";
import TodoItems from "./components/TodoItems.vue";
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
  <TodoItems :todos="store.allTodos" />
</template>

<style scoped></style>
