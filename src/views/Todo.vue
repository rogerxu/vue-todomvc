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
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {
    todos() {
      return [];
    },
  },
  methods: {
    addTodo(e) {
      const text = e.target.value;

      if (text.trim()) {
        // this.$store.dispatch('addTodo', text);
        console.log('add item', text);
      }

      // clear text box
      e.target.value = '';
    },
  },
};
</script>
