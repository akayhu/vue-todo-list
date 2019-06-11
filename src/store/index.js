import Vue from 'vue';
import Vuex from 'vuex';
import todoList from '@/mutations/todoList';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todoList: todoList,
  },
  // 嚴格模式，禁止直接修改 state
  strict: true
});