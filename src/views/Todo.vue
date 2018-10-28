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
        <li v-for="(todo, index) in todos"
          :key="index"
        >{{todo}}</li>
      </ul>
    </section>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  components: {},
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
