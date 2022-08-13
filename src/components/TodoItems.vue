<script setup lang="ts">
import { Todo } from "../global";
import TickIcon from "./TickIcon.vue";
import CrossIcon from "./CrossIcon.vue";

defineProps<{
  todos: Todo[] | null;
}>();
</script>

<template>
  <section class="border-2 border-gray-800 w-1/2 mx-auto mt-16">
    <div
      v-for="todo in todos"
      data-test="todoitem"
      class="border-b-2 border-gray-600"
    >
      <div class="flex justify-between items-center mx-10 px-5 py-10">
        <h1
          data-test="todoitem-title"
          class="text-3xl text-red-400 font-semibold w-3/4"
        >
          {{ todo.title }}
        </h1>
        <TickIcon data-test="todoitem-tick" v-if="todo.completed" />
        <CrossIcon data-test="todoitem-cross" v-else />
      </div>
      <p class="text-gray-800 font-mono mx-10 mb-10 px-5">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi nostrum
        dicta officiis esse quod voluptas aspernatur sunt eaque hic deleniti
        labore in aut doloribus, quas, inventore atque dolor enim! Aliquam,
        repellendus. Eveniet illo, fugit error enim, voluptate fuga nesciunt non
        dicta porro sed a obcaecati aliquam natus quos voluptates! Impedit!
      </p>
    </div>
  </section>
</template>

<style scoped></style>
