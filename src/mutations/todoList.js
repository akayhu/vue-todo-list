export const CREATE_DATA = 'CREATE_DATA';
export const EDIT_DATA = 'EDIT_DATA';
export const DELETE_DATA = 'DELETE_DATA';
export const SELECT_DATA = 'SELECT_DATA';
export const VIEW_FILTER = 'VIEW_FILTER';
export const ALL_SELECT = 'ALL_SELECT';
export const CANCEL_SELECT = 'CANCEL_SELECT';

export const state = {
  todoListData: [],
  viewFilter: 'all'
};

export const actions = {
  createData ({commit}, payload) {
    commit(CREATE_DATA, payload);
  },
  editData ({commit}, payload) {
    commit(EDIT_DATA, payload);
  },
  deleteData ({commit}, payload) {
    commit(DELETE_DATA, payload);
  },
  selectData ({commit}, payload) {
    commit(SELECT_DATA, payload);
  },
  viewFilter ({commit}, payload) {
    commit(VIEW_FILTER, payload);
  },
  allSelect ({commit}) {
    commit(ALL_SELECT);
  },
  cancelSelect ({commit}) {
    commit(CANCEL_SELECT);
  }
};

let index = 0;
export const mutations = {
  [CREATE_DATA] (state, payload) {
    index = index + 1;
    state.todoListData.push({
      id: index,
      value: payload.value,
      completed: payload.completed
    });
  },
  [EDIT_DATA] (state, payload) {
    state.todoListData.map(todoItem => {
      todoItem.id === payload.id
      ? todoItem.value = payload.value
      : todoItem
    });
  },
  [DELETE_DATA] (state, payload) {
    state.todoListData = state.todoListData.filter(todoItem => !(todoItem.id === payload.id));
  },
  [SELECT_DATA] (state, payload) {
    state.todoListData.map(todoItem =>
      todoItem.id === payload.id
      ? todoItem.completed = (todoItem.completed === 'unCompleted') ? 'completed' : 'unCompleted'
      : todoItem
    );
  },
  [VIEW_FILTER] (state, payload) {
    state.viewFilter = payload.value
  },
  [ALL_SELECT] (state) {
    state.todoListData.map(todoItem => todoItem.completed = 'completed');
  },
  [CANCEL_SELECT] (state){
    state.todoListData.map(todoItem => todoItem.completed = 'unCompleted')
  }
};

export const getters = {
  getListData: state => state.todoListData,
  getViewFilter: state => state.viewFilter,
  getViewFilterData: (state, getters) => {
    const todoListData = getters.getListData;
    const showFilter = getters.getViewFilter;
    return todoListData.filter(items =>
      showFilter === 'all' ? true : items.completed === showFilter
    );
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};