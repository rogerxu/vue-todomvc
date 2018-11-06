<template>
  <section class="todoapp">
    <!-- header -->
    <header class="header">
      <h1>TODO</h1>
      <input type="text" class="new-todo"
        autofocus
        autocomplete="off"
        placeholder="What needs to be done?"
        @keyup.enter="addTodo">
    </header>

    <!-- content -->
    <section class="main">
      <ul class="todo-list">
        <todo-item
          v-for="(todo, index) in todos"
          :key="index"
          :todo="todo"
        />
      </ul>
    </section>
  </section>
</template>

<style lang="scss" scoped>
.todoapp {
  background: #fff;
  margin: 130px 0 40px 0;
  // position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
    0 25px 50px 0 rgba(0, 0, 0, 0.1);

  input::placeholder {
    font-style: italic;
    color: #e6e6e6;
  }

  h1 {
    // position: absolute;
    // width: 100%;
    font: {
      size: 100px;
      weight: 100;
    }
    // text-align: center;
    text-rendering: optimizeLegibility;
    color: rgba(175, 47, 47, 0.15);
  }
}

.new-todo {
  border: none;
  background: rgba(0, 0, 0, 0.03);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}

.main {
  border-top: 1px solid #e6e6e6;
}

.todo-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>

<script>
import { mapState } from 'vuex';
import TodoItem from '../components/TodoItem.vue';

export default {
  components: { TodoItem },
  data() {
    return {};
  },
  computed: mapState([
    'todos',
  ]),
  methods: {
    addTodo(e) {
      const text = e.target.value;

      if (text.trim()) {
        this.$store.dispatch('addTodo', text);
      }

      // clear text box
      e.target.value = '';
    },
  },
};
</script>
