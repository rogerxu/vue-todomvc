import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    editTodo(state, { todo, text = todo.text, done = todo.done }) {
      const item = todo;
      item.text = text;
      item.done = done;
    },
    removeTodo(state, todo) {
      state.todos.splice(state.todos.indexOf(todo), 1);
    },
  },
  actions: {
    addTodo({ commit }, text) {
      commit('addTodo', {
        text,
        done: false,
      });
    },
    editTodo({ commit }, { todo, value }) {
      commit('editTodo', { todo, text: value });
    },
    removeTodo({ commit }, todo) {
      commit('removeTodo', todo);
    },
  },
});
