<template>
  <div class="todos">
    <input
      type="text"
      v-model="newTodo"
      @keypress.enter="addTodo"
      placeholder="Add a new todo..."
    />
    <div v-if="todos.length">
      <ul>
        <li v-for="todo in todos" :key="todo.id" @click="deleteTodo(todo.id)">
          {{ todo.text }}
        </li>
      </ul>
    </div>
    <div v-else>Woohoo, nothing left todo!</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface Todo {
  text: string;
  id: number;
}

export default defineComponent({
  emits: {
    badValue() {
      return true;
    },
  },
  setup(props, ctx) {
    const todos = ref<Todo[]>([
      { text: "make the bed", id: 1 },
      { text: "play video games", id: 2 },
    ]);

    const newTodo = ref<string>("");

    function addTodo() {
      if (newTodo.value) {
        const id: number = Math.random();
        todos.value = [{ text: newTodo.value, id }, ...todos.value];
        newTodo.value = "";
      } else {
        ctx.emit("badValue");
      }
    }

    function deleteTodo(id: number) {
      todos.value = todos.value.filter((todo: Todo) => todo.id != id);
    }

    return { todos, addTodo, deleteTodo, newTodo };
  },
});
</script>

<style>
.todos {
  max-width: 400px;
  margin: 20px auto;
  position: relative;
}
input {
  width: 100%;
  padding: 12px;
  border: 1px solid #eee;
  border-radius: 10px;
  box-sizing: border-box;
  margin-bottom: 20px;
}
.todos ul {
  position: relative;
  padding: 0;
}
.todos li {
  list-style-type: none;
  display: block;
  margin-bottom: 10px;
  padding: 10px;
  background: white;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
}
.todos li:hover {
  cursor: pointer;
}
</style>
