<template>
  <header class="header">
    <input
      class="new-todo"
      autofocus
      autocomplete="off"
      placeholder="Todo"
      v-model="text"
      @keypress="handleTodo"
    />
  </header>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },
  methods: {
    handleTodo({ keyCode }) {
      const { text } = this;

      if (keyCode === 13 && text !== "") {
        this.$emit("insertTodo", text);
        this.text = "";
      }
    },
  },
};
</script>

<style>
header {
  margin: 0 auto;
}
.new-todo {
  border: none;
  width: 33rem;
  border-bottom: 2px solid;
  padding-left: 1rem;
}
</style>
