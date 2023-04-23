<template>
  <div>
    <Header/>
    <!-- 路由视图 -->
    <router-view ></router-view>
    <Footer v-show="$route.meta.show"/>
    
  </div>
</template>

<script>

import Header from './components/Header/index.vue'
import Footer from './components/Footer/index.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted(){
    this.$store.dispatch("categoryList");
  }
}
</script>

<style>
</style>
