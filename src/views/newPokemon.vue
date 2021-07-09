<template>
  <div id="card" class="card border border-dark">
    <div
      class="card-body d-flex  justify-content-between align-items-center"
      id="cardBody"
    >
    <div class="submit-form">
      <div class="container">
        <section class="new-player-pop-up">
        <div class="form-group">
          <h3 class="newPokemon">New Pokemon</h3>
          <input type="text" class="input" id="name" required name="name" v-model="pokemon.name" />
        </div> 
          <div class="selection-photo">
            <img src="" id="14" class="photo" />
          </div>
        <button  @click="savePokemon" class="myButton">CREATE</button>
        </section>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { pokeServices } from "../services/pokeServices.js";
  export default {
    name: "newPokemon",
    data() {
      return {
        pokemon: {
          id: null,
          name: "",
          sprite: "https://github.com/Armun4/pokedex/blob/main/src/assets/red-blue/108.png?raw=true",
          catched: false,
        },
      };
    },
    watch:{
    $route (newPokemon, Home){
     this.$router.go()
    }
    },
     methods: {
    savePokemon() {
      var data = {
        name: this.pokemon.name,
        sprite: this.pokemon.sprite,
      };

      pokeServices.createOne(data).then(response => {
          this.pokemon.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
          
        })
    
    this.$router.push('/');
    

    },
    
  }
};

</script>

<style scoped>
  #card {
    align-items: center;
    height: 70vh;
    margin-top: 20px;
    width: 30vw;
    display: inline-block;
  }
  #body {
    justify-content: space-around;
    align-self: center;
  }
</style>
