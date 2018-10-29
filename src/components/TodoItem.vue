<template>
  <li class="todo">
    <div class="view">
      <input type="checkbox" class="toggle"
        :checked="todo.done">
      <label v-text="todo.text" @dblclick="editing = true"></label>
      <button class="destroy" @click="removeTodo(todo)">X</button>
    </div>
    <input type="text" class="edit"
      v-show="editing"
      :value="todo.text"
      @keyup.enter="doneEdit"
      @keydown.esc="cancelEdit"
      >
  </li>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'TodoItem',
  props: ['todo'],
  data() {
    return {
      editing: false,
    };
  },
  methods: {
    ...mapActions([
      'editTodo',
      'removeTodo',
    ]),
    doneEdit(e) {
      const value = e.target.value.trim();
      const { todo } = this;

      if (value && this.editing) {
        this.editTodo({
          todo,
          value,
        });

        this.editing = false;
      }
    },
    cancelEdit(e) {
      this.editing = false;
    },
  },
};
</script>
