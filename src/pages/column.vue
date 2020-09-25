<template>
  <div class="column pd-top">
    <!-- <img :src="head" alt=""> -->
    <uc-cell
      v-for="(item,index) of list"
      :key="item._id"
     :data="item" 
     collectionName="column"
     />
  </div>
</template>

<script>
   import UcCell from '../components/uc-cell/uc-cell.vue'
   // import head from '../../public/images/head.png';
  export default {
    name:'column',
    props:{},
    data(){
      return {
        // head:head,
        list:[]
      }
    },
     components:{UcCell},
    mounted(){
      this.$axios({
        url:'/api/column',
        params:{_limit:10,_page:1}
      }).then(
        res => this.list = res.data.data
      )
    },
    updated(){},
    methods:{}
  }
</script>
<style scoped>
	.column{
	 padding-left: 0.34rem;
	}
</style>
