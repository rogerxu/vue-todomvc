<template>
  <li class="todo">
    <div class="view">
      <input type="checkbox" class="toggle"
        :checked="todo.done">
      <label v-text="todo.text"></label>
      <button class="destroy"></button>
    </div>
    <input type="text" class="edit"
      :value="todo.text">
  </li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['todo'],
  data() {
    return {
      editing: false,
    };
  },
  methods: {

  },
};
</script>
