<template>
  <div id="app">
    
    <h3>cell组件测试</h3>
	<uc-cell :data="{_id:3,title:'xxx',des:'oo'}" :index="0" collectionName="detail"></uc-cell>
	  <uc-cell :data="{_id:3,title:'xxx',des:'oo'}"></uc-cell>
	  
	  <uc-cell :data="{_id:3,title:'xxx',des:'oo'}" isAdd @add-item="show"></uc-cell>
	  
	  <uc-cell :data="{_id:3,title:'xxx',des:'oo'}" collectionName="detail" isAdd @add-item="show"></uc-cell>
	  
	</div>
    
  </div>
</template>

<script>
import  UcCell from '../components/uc-cell/uc-cell.vue'
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
   UcCell
  },
  methods:{
    show(ev){
      console.log(ev)
	 
    }
  }
}
</script>

<style scoped>
.uc-cell{position: relative;}
  .uc-cell:active {background: #ccc;}
  .uc-cell div { color:#494d4d; padding:0.2rem 0; border-bottom:1px dashed #ccc;}
  .uc-cell div h2{max-height:0.9rem; font-size:0.33rem; overflow:hidden;}
  .uc-cell div p{max-height:1.8rem; margin-top:0.05rem;overflow:hidden;}
  .cell__anchor{position:absolute;right:0.3rem;top:0.4rem;}
</style>