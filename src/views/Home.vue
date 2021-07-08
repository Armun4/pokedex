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
  import pokeServices from '../services/pokeServices.js'
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
        pokeServices.getAll();
        this.pokemons = res.data;
      },

      // getId(event) {
      //   axios
      //     .get(`http://127.0.0.1:8000/api/events/${event.id}/subscribers`)
      //     .then((response) => {
      //       this.subscribers = response.data;
      //       this.selectedEvent = event;

      //     });
      // },

      toggleSawNewPkmn() {
        this.isShown = !this.isShown;
      },
    }
  }
</script>

<style scoped></style>
