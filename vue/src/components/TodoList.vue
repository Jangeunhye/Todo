<template>
  <section class="main">
    <ul class="todo-list">
      <li
        v-for="{ id, text, isDone } in todos"
        :key="id"
        :class="{ todo: true, completed: isDone }"
      >
        <div class="view">
          <input
            class="toggle"
            type="checkbox"
            :checked="isDone"
            @change="onCheckedHandler(id)"
          />
          <span class="text" :class="{ isChecked: isDone }">
            {{ text }}
          </span>
          <button class="delete" @click="onDeletedHandler(id)">❌</button>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    todos: { type: Array, default: () => [] },
  },
  methods: {
    onCheckedHandler(id) {
      this.$emit("toggleTodo", id);
    },
    onDeletedHandler(id) {
      this.$emit("removeTodo", id);
    },
  },
};
</script>

<style>
.main {
  margin: 0 auto;
}
ul {
  list-style: none;
  padding: 0;
}
.todoList {
  font-size: 1.2rem;
  line-height: 2rem;
  margin-bottom: 1rem;

  list-style: none;
}

.toggle:hover {
  cursor: pointer;
}

.delete:hover {
  cursor: pointer;
}

.text {
  display: inline-block;
  width: 28rem;
  margin-left: 0.5rem;
  margin-right: 1rem;
}

.delete {
  background-color: transparent;
  border: none;
}
</style>
