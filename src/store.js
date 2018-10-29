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
    removeTodo({ commit }, todo) {
      commit('removeTodo', todo);
    },
  },
});
