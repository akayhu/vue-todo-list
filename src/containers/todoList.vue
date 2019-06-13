<template>
  <div class="todo-list-main">
    新增內容：
    <input
      type="text"
      class="create-input"
      v-model="createInput"
      v-on:keyup.enter="creatData"
    />
    <div class="select-button">
      <button class="all-select" @click="allSelect()">全部選取</button>
      <button class="cancel-select" @click="cancelSelect()">全部取消選取</button>
    </div>
    <div>
      <button class="show-all" @click="onChangeView('all')">顯示全部</button>
      <button class="show-selected" @click="onChangeView('completed')">顯示已選取</button>
      <button class="show-notSelected" @click="onChangeView('unCompleted')">顯示未選取</button>
      <span class="display-view-state">顯示狀態：{{ getViewFilter }}</span>
    </div>
    <hr />
    <div class="list-main">
      <div class="left-main">
        <template v-for="(item, index) in getViewFilterData">
          <div
            is="todoListItem"
            :key="item.id"
            :item="item"
            :index="index"
          >
          </div>
        </template>
      </div>
      <div class="right-main">
        <table>
          <tr>
            <td>id</td>
            <td>內容</td>
            <td>狀態</td>
          </tr>
          <template v-for="item in getListData">
            <tr :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.value }}</td>
              <td
                :style="{
                  'background-color': item.completed === 'completed' ? 'greenyellow' : 'red',
                  'color': item.completed === 'completed' ? '#000' : '#fff'
                }"
              >
                {{ item.completed === 'completed' ? '選取' : '未選取' }}
              </td>
            </tr>
          </template>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import todoListItem from '@/components/todoListItem.vue'

export default {
  name: 'TodoList',
  data() {
    return {
      createInput: ''
    }
  },
  computed: {
    ...mapGetters([
      'getListData',
      'getViewFilter',
      'getViewFilterData'
    ]),
  },
  methods: {
    ...mapActions([
      'createData',
      'viewFilter',
      'allSelect',
      'cancelSelect'
    ]),
    creatData() {
      if (this.createInput) {
        this.createData({
          value: this.createInput,
          completed: 'unCompleted'
        });
        this.createInput = '';
      }
    },
    onChangeView(value) {
      this.viewFilter({
        value: value
      });
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
.select-button {
  margin-bottom: 10px;
}
.all-select {
  color: #000;
  background-color: greenyellow;
  border: 1px solid greenyellow;
  border-radius: 5px;
  padding: 5px 10px;
}
.cancel-select {
  color: #fff;
  background-color: red;
  border: 1px solid red;
  border-radius: 5px;
  padding: 5px 10px;
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
.display-view-state {
  font-size: 14px;
  margin-left: 15px;
}
.list-main {
  display: flex;
}
.left-main {
  justify-content: space-between;
  width: 40%;
}
.right-main {
  justify-content: space-between;
  width: 60%;
}
.right-main table {
  border: 1px solid #ccc;
  text-align: center;
}
.right-main table td {
  border: 1px solid #ccc;
  padding: 5px;
}
.right-main table td:nth-child(2),
.right-main table td:nth-child(3) {
  text-align: left;
}
.right-main table tr:nth-child(1) td:nth-child(2),
.right-main table tr:nth-child(1) td:nth-child(3) {
  text-align: center;
}
</style>
