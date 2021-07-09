<template>
<div class="mainDiv">
 <router-link to="/"><img src="@/assets/pkedex.png" alt=""></router-link>

  <router-link to="/newPokemon"><img src="@/assets/plus-icon-23574.png" alt=""></router-link>
    

</div>
 
</template>

<script>
  export default {
    name: "Header",
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainDiv{
    display: flex;
    background-color:rgb(84, 189, 183);
    height:60px;
    border-radius:5px;
    justify-content:space-around;
    }

.mainDiv img{
    height:60px;
    }
</style>
