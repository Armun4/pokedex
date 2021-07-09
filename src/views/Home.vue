<template>
  <div id="mainDiv" class="home" align="center">
    <div v-for="pokemon in pokemons" v-bind:key="pokemon">
      <Card :pokemon="pokemon" />
      
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src

  import Card from '../components/Card.vue';
  import {pokeServices} from '../services/pokeServices.js'
  export default {
    name: "Home",
    components:{
      Card    },
    data() {
      return {
        pokemons: [],
        isShown:false
      };
    },

    mounted() {
      this.getPokemons();
      
      
      

          },
    methods: {
      async getPokemons() {
        pokeServices.getAll().then((response) => {
          this.pokemons = response.data})
       },
    


    }
  }
</script>

<style scoped></style>
