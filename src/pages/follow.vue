<template>
  <div class="follow pd-top">
    <uc-cell
      v-for="(item,index) of list"
      :key="item._id"
     :data="item" 
     :index="index" 
     collectionName="follow"
     />
  </div>
</template>

<script>
  import UcCell from '../components/uc-cell/uc-cell.vue'
  export default {
    name:'follow',
    props:{},
    data(){
      return {
        list:[]
      }
    },
    components:{UcCell},
    mounted(){
      this.$axios({
        url:'/api/follow',
        params:{_limit:15,_page:1}
      }).then(
        res => this.list = res.data.data
      )
    },
    updated(){},
    methods:{}
  }
</script>

<style>
  .follow{padding-left: 0.34rem;padding-right: 0.34rem;}
</style>
