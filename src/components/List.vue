<template>
  <ul class="todo-main">
    <Item v-for="(todo, index) in todos"
          :key="index" :todo="todo" :deleteTodo="deleteTodo" :index="index"/>
  </ul>
</template>

<script>
  import Item from './Item.vue'
  export default {
    // 声明接收属性  (只声明属性名)
    props: ['todos', 'deleteTodo'], // todos就会成功组件对象的属性
    components: {
      Item
    }
  }
</script>

<style>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>

<!--在组件中的this是组件对象: 它的功能相当于vm-->