import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/containers/HelloWorld'
import TodoList from '@/containers/TodoList'

Vue.use(Router)

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
    }
  ]
})
