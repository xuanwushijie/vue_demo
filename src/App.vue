<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header :addTodo="addTodo"/>
      <List :todos="todos" :deleteTodo="deleteTodo"/>
      <todo-footer :todos="todos" :deleteComputed="deleteComputed" :selectAll="selectAll"/>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import List from './components/List.vue'
  import Footer from './components/Footer.vue'

  export default { // 配置对象

    data () {
      return {
        todos: [
          {title: '吃饭', completed: false},
          {title: '睡觉', completed: true},
          {title: '打代码', completed: false}
        ]
      }
    },

    components: {
      TodoHeader:Header,
      List,
      TodoFooter: Footer
    },

    methods: {
      addTodo (todo) {
        this.todos.unshift(todo)
      },
      deleteTodo (index) {
        this.todos.splice(index, 1)
      },
      deleteComputed () {
        this.todos = this.todos.filter(todo => !todo.completed)
      },

      // 全选或全不选
      selectAll (check) {
        this.todos.forEach(todo => todo.completed = check)
      }
    }
  }
</script>

<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>