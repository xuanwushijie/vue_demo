<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Router Basic - 01</h2></div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!--使用router-link生成路由链接-->
          <router-link class="list-group-item" to="/about">About</router-link>
          <router-link class="list-group-item"  to="/home">Hme</router-link>
        </div>
      </div>

      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!--使用router-view显示当前路由组件-->
            <keep-alive>
              <router-view msg="abc"/>
            </keep-alive>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


  export default { // 配置对象


  }
</script>

<style scoped>

</style>
