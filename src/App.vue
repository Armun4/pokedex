<template>



  <div id="nav">
  <Header/>
    <router-view  ></router-view>
  </div>
</template>

<script>

  import Header from '@/components/Header.vue';
  export default {
    name: "App",
    components:{
      Header
       },
 

  
    
  }
</script>

<style>

#app {
  font-family: 'Open Sans', sans-serif, VT323;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 200%;
  
}

#nav {
  padding: 30px;
  background-color: rgb(243, 127, 127);
  height:100vh;
  overflow: scroll;
  text-align:center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
