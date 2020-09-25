<template>
  <div id="app">
    
    <h3>toolbar组件测试</h3>
	<uc-toolbar></uc-toolbar>
	  
	</div>
    
  </div>
</template>

<script>
import  UcToolbar from '../components/uc-toolbar/uc-toolbar.vue'
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
   UcToolbar
  },
  methods:{
    show(ev){
      console.log(ev)
	 
    }
  }
}
</script>

<style>
.uc-cell{position: relative;}
  .uc-cell:active {background: #ccc;}
  .uc-cell div { color:#494d4d; padding:0.2rem 0; border-bottom:1px dashed #ccc;}
  .uc-cell div h2{max-height:0.9rem; font-size:0.33rem; overflow:hidden;}
  .uc-cell div p{max-height:1.8rem; margin-top:0.05rem;overflow:hidden;}
  .cell__anchor{position:absolute;right:0.3rem;top:0.4rem;}
</style>