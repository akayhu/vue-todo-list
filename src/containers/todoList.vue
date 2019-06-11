<template>
  <div class="todo-list-main">
    新增內容：
    <input
      type="text"
      class="create-input"
      v-model="createInput"
      v-on:keyup.enter="creatData"
    />
    <div>
      <button class="show-all" @click="onChangeView('all')">顯示全部</button>
      <button class="show-selected" @click="onChangeView('completed')">顯示已選取</button>
      <button class="show-notSelected" @click="onChangeView('unCompleted')">顯示未選取</button>
    </div>
    <hr />
    <p
      is="todoListItem"
      v-for="item in viewFilterData"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import todoListItem from '@/components/todoListItem.vue'

export default {
  name: 'TodoList',
  data() {
    return {
      createInput: ''
    }
  },
  computed: {
    listData: function() {
      return this.$store.state.todoList.todoListData
    },
    viewFilterData: function() {
      const todoListData = this.$store.state.todoList.todoListData;
      const showFilter = this.$store.state.todoList.viewFilter;
      return todoListData.filter(items =>
        showFilter === 'all' ? true : items.completed === showFilter
      );
    }
  },
  methods: {
    ...mapActions(['createData', 'viewFilter']),
    creatData() {
      this.createData({
        value: this.createInput,
        completed: 'unCompleted'
      });
      this.createInput = '';
    },
    onChangeView(value) {
      this.viewFilter({
        value: value
      })
    }
  },
  components: {
    todoListItem
  }
}
</script>

<style>
.todo-list-main {
  padding: 20px;
}
.todo-list-main .create-input {
  padding: 10px;
  border-radius: 5px;
  width: 300px;
  border: 1px solid #999;
  margin-bottom: 10px;
}
.show-all {
  background-color: #fff;
  border: 1px solid #ccc;
  color: #333;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}
.show-selected {
  background-color: #5a7f98;
  border: 1px solid #5a7f98;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}
.show-notSelected {
  background-color: #f9c4a8;
  border: 1px solid #f9c4a8;
  color: #000;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
