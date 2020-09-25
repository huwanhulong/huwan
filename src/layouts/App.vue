<template>
  <div id="app">
    <loading v-show="$root.bLoading"/>
    <Header v-show="$root.bNav"/>
    <router-view/>
    <Footer v-show="$root.bFoot"/>
    
  </div>
</template>

<script>
  import Header from './header.vue'
  import Footer from './Footer.vue'
  import loading from '../components/loading.vue'
export default {
  name: 'App',
  data(){
    return {
    }
  },
  watch:{
    $route:{
      handler(newVal){
        let path = newVal.path;
        if(/home|follow|column/.test(path)){
          this.$root.bNav=true;
          this.$root.bFoot=true;
        }
        if(/user/.test(path)){
          this.$root.bNav=false;
          this.$root.bFoot=true;
        }
        if(/login|reg|detail/.test(path)){
          this.$root.bNav=false;
          this.$root.bFoot=false;
        }
      },
      immediate:true
    }
  },
  mounted(){
    
  },
  components: {
    Header,Footer,loading
  },
  methods:{
  }
}
</script>

<style>

</style>
