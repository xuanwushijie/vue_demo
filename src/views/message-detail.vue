<template>
  <ul>
    <li>id: {{$route.params.id}}</li>
    <li>title: {{messageDetail.title}}</li>
    <li>content: {{messageDetail.content}}</li>
  </ul>
</template>

<script>
  const allMessageDetils = [
    {id: 1, title: 'message001', content: 'message content001...'},
    {id: 3, title: 'message003', content: 'message content003...'},
    {id: 5, title: 'message005', content: 'message content005...'}
  ]

  export default {
    data () {
      return {
        messageDetail: {}
      }
    },

    // 初始化显示
    mounted () {
      console.log('beforeUpdate()')
      const id = this.$route.params.id
      this.messageDetail = allMessageDetils.find(md => md.id===id*1)
    },

    // 切换路由链接显示
    watch: {
      $route: function () {
        console.log('$route()')
        const id = this.$route.params.id
        this.messageDetail = allMessageDetils.find(md => md.id===id*1)
      }
    }
  }
</script>

<style>

</style>