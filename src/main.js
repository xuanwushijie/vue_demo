import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App.vue'
import router from './router'

// 注册全局组件
Vue.component(Button.name, Button)


new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router  // 映射上路由器
})