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
        this.$store.commit('addTodo', text);
      }

      // clear text box
      e.target.value = '';
    },
  },
};
</script>
