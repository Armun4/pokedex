<template>
  <div id="nav">
    
  <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
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
  background-color: rgb(243, 127, 127) ;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
