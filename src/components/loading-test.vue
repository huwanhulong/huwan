<template>
  <div id="app">
    
    <h3>测试loading</h3>
    
    <!-- <loading/> -->
	<loading color="#f0f"/>
	<h3>测试loading</h3>
    
  </div>
</template>

<script>
import loading from '../components/loading.vue'
export default {
  name: 'App',
  data(){
    return {
      list:[]
    }
  },
  mounted(){
    setTimeout(()=>{
      this.list=[
        {_id:1,image:'/images/img_1.jpg',title:'xxx1',sub_title:'xxxx2'},
        {_id:2,image:'/images/img_2.jpg',title:'xxx2',sub_title:'xxxx2'},
        {_id:3,image:'/images/img_3.jpg',title:'xxx3',sub_title:'xxxx2'},
        {_id:4,image:'/images/img_1.jpg',title:'xxx4',sub_title:'xxxx2'},
      ];
    },1000)
  },
  components: {
    loading
  },
  methods:{
    show(ev){
      console.log(ev)
    }
  }
}
</script>

<style>

</style>