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
      <button class="edit-button" @click="edit">編輯</button>
    </span>
    <span v-if="isSelect">
      <input
        class="item-input"
        v-model="inputValue"
        v-on:blur="present"
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
      inputValueIsNullValue: false,
      inputOldValue: ''
    }
  },
  methods: {
    ...mapActions([
      'editData',
      'deleteData',
      'selectData'
    ]),
    edit() {
      this.isSelect = true;
    },
    present() {
      this.isSelect = false;
      if (this.inputValueIsNullValue && this.item.completed === 'completed') {
        this.onChange(this.item.id, this.inputOldValue);
      } else if (this.inputValueIsNullValue && this.item.completed === 'unCompleted') {
        this.deleteData({ id: this.item.id });
      }
    },
    deleteD() {
      this.deleteData({
        id: this.item.id
      })
    },
    onChange(id, value) {
      this.editData({
        id: id,
        value: value
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
    },
    inputValue: {
      get() {
        return this.item.value;
      },
      set(value) {
        this.onChange(this.item.id, value);
      }
    }
  },
  props: {
    item: Object
  },
  watch: {
    inputValue: function(newValue, oldValue) {
      if (newValue === '') {
        this.inputValueIsNullValue = true;
        this.inputOldValue = oldValue;
      } else {
        this.inputValueIsNullValue = false;
        this.inputOldValue = '';
      }
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
.edit-button {
  background-color: #fff;
  border: 1px solid #ccc;
  color: #333;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
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

