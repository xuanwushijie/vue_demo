<template>
  <div class="container">
    <search/>
    <user-main/>
  </div>
</template>

<script>
  import Search from './components/Search.vue'
  import Main from './components/Main.vue'
  export default { // 配置对象
    components: {
      Search,
      UserMain: Main
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
