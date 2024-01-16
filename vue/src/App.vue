<template>
  <div id="app">
    <section class="todoapp">
      <NewTodo @insertTodo="insertTodo" />
      <TodoList :todos="todos" @removeTodo="removeTodo" />
    </section>
  </div>
</template>

<script>
import "./assets/css/main.css";

import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
export default {
  components: {
    NewTodo,
    TodoList,
  },

  data() {
    return {
      todos: [],
    };
  },
  methods: {
    insertTodo(text) {
      this.todos = [
        ...this.todos,
        {
          id: new Date().getTime(),
          text,
          isDone: false,
        },
      ];
    },
    removeTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
};
</script>

<style>
.todoapp {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 10rem;
}
</style>
