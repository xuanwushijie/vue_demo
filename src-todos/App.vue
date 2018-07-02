<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header :addTodo="addTodo"/>
      <!-- <List :todos="todos" :deleteTodo="deleteTodo"/>-->
      <List :todos="todos"/>
      <todo-footer>
        <input type="checkbox" v-model="isCheck" slot="check"/>
        <span slot="count">已完成{{completedCount}}  / 全部{{todos.length}} </span>
        <button class="btn btn-danger" v-show="completedCount" @click="deleteComputed" slot="btn">清除已完成任务</button>
      </todo-footer>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import Header from './components/Header.vue'
  import List from './components/List.vue'
  import Footer from './components/Footer.vue'
  import storageUtil from './util/storageUtil'

  export default { // 配置对象

    data () {
      return {
        todos: storageUtil.readTodos()
      }
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
    },
    components: {
      TodoHeader: Header,
      List,
      TodoFooter: Footer
    },
    mounted() {
      // 订阅消息(deleteTodo)
      PubSub.subscribe('deleteTodo', (msg, index) => {
        this.deleteTodo(index)
      })
    },
    methods: {
      addTodo(todo) {
        this.todos.unshift(todo)
      },
      deleteTodo(index) {
        this.todos.splice(index, 1)
      },
      deleteComputed() {
        this.todos = this.todos.filter(todo => !todo.completed)
      },

      // 全选或全不选
      selectAll(check) {
        this.todos.forEach(todo => todo.completed = check)
      }
    },
    watch: {
      todos: {
        deep: true, // 深度监视
        /*handler: function (val) { // todos发生了改变
          // 保存todos(json)到local
          //window.localStorage.setItem('todos_key', JSON.stringify(val))
          storageUtil.saveTodos(val)
        }*/
        handler: storageUtil.saveTodos
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
