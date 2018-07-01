<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheck"/>
    </label>
    <span>
          <span>已完成{{completedCount}}</span> / 全部{{todos.length}}
        </span>
    <button class="btn btn-danger" v-show="completedCount" @click="deleteComputed">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    props: {
      todos: Array,
      deleteComputed: Function,
      selectAll: Function
    },

    computed: {
      completedCount () { // 完成的数量
        return this.todos.reduce((preTotal, todo) => preTotal + (todo.completed?1:0), 0)
      },

      isCheck: {
        get () {
          return this.todos.length===this.completedCount && this.completedCount>0
        },

        set (value) {
          // 进行全选或全不选
          this.selectAll(value)
        }
      }
    }
  }
</script>

<style>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>