<template>
  <div id="app">
  <h3>输入框</h3>
 <UcInput/>
 <uc-input v-model='ipt'></uc-input>
 <uc-input v-model="ipt2" type="password" label="密码"></uc-input>
  </div>
</template>

<script>
import UcInput from '../components/uc-input';

export default {
  name: 'App',
  data(){
	  return{
		  ipt:'bmw',
		  ipt2:'k5',
	  }
  },
  components: {
  UcInput
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
