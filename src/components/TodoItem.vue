<template>
  <li class="todo" :class="{ completed: todo.done, editing: editing }">
    <div class="view">
      <input type="checkbox" class="toggle"
        :checked="todo.done"
        @change="toggleTodo(todo)">
      <label v-text="todo.text" @dblclick="beginEditTodo"></label>
      <button class="destroy" @click="removeTodo(todo)"></button>
    </div>
    <input type="text" class="edit"
      ref="edit"
      v-show="editing"
      :value="todo.text"
      @keyup.enter="doneEdit"
      @keydown.esc="cancelEdit"
      >
  </li>
</template>

<style lang="scss" scoped>
li.todo {
  font-size: 24px;
  border-bottom: 1px solid #ededed;

  &:last-child {
    border-bottom: none;
  }

  &.completed {
    label {
      color: #d9d9d9;
      text-decoration: line-through;
    }
  }

  &.editing {
    .view {
      display: none;
    }

    .edit {
      display: block;
    }
  }

  .destroy {
    display: none;
    color: #cc9a9a;
    transition: color 0.2s ease-out;

    &::after {
      content: '×';
    }

    &:hover {
      color: #af5b5e;
    }
  }

  &:hover {
    .destroy {
      display: inline;
    }
  }
}
</style>


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
      'toggleTodo',
      'removeTodo',
    ]),
    beginEditTodo() {
      // show editing element
      this.editing = true;

      // focus editing element after rendered
      this.$nextTick(() => {
        this.$refs.edit.focus();
      });
    },
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
