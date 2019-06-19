import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/containers/HelloWorld';
import TodoList from '@/containers/TodoList';
import Movie from '@/containers/movie';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/todoList',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/movie',
      name: 'movie',
      component: Movie
    }
  ]
})
