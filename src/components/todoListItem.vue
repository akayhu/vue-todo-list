<template>
  <div class="bbb">
    <input
      type="checkbox"
      v-model="checkedStatus"
      @change="onSelect"
    />
    <span
      v-if="!isSelect"
      class="item-value"
      :style="{
        'textDecoration': item.completed === 'completed' ? 'line-through' : 'none',
        'color': item.completed === 'completed' ? 'blue' : '#000'
      }"
      @click="edit"
    >
      {{ item.value }}
    </span>
    <span v-if="isSelect">
      <input
        class="item-input"
        v-model="inputValue"
        v-on:blur="present"
        @keyup="onChange"
      />
      <button @click="present" class="can-button">取消編修</button>
      <button @click="deleteD" class="del-button">刪除</button>
    </span>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      id: this.item.id,
      isSelect: false,
      inputValue: this.item.value
    }
  },
  methods: {
    ...mapActions([
      'editData',
      'deleteData',
      'selectData'
    ]),
    edit() {
      this.isSelect = true
    },
    present() {
      this.isSelect = false
    },
    deleteD() {
      this.deleteData({
        id: this.item.id
      })
    },
    onChange() {
      this.editData({
        id: this.item.id,
        value: this.inputValue
      });
    },
    onSelect() {
      this.selectData({
        id: this.item.id
      })
    }
  },
  computed: {
    checkedStatus: {
      get() {
        return (this.item.completed === 'completed') ? true : false;
      },
      set(value) {
        return value;
      }
    }
  },
  props: {
    item: Object
  },
  watch: {
    inputValue: (newValue, oldValue) => {
      console.log('newValue', newValue);
      console.log('oldValue', oldValue);
    }
  }
}
</script>

<style>
.item-value {
  display: inline-block;
  margin-bottom: 10px;
}
.item-input {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
}
.can-button {
  color: #333;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  cursor: pointer;
}
.del-button {
  color: #fff;
  background-color: red;
  padding: 10px;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
}
</style>

