<template>
  <div id="card" class="card border border-dark w-75" v-if="!isShown">
    <div
      class="card-body d-flex  justify-content-between align-items-center"
      id="cardBody"
    >
      <div>
        <img
          :src="pokemon.sprite"
          class="rounded float-start"
          v-bind:key="pokemon.sprite"
        />
      </div>
      <div>
        <textarea class="nameField" :readonly="!isEditable" v-model="pokemon.name">
        </textarea>
      </div>
      <div id="rigthSide">
        <input
          class="form-check-input float-end"
          type="checkbox"
          v-model="pokemon.catched"
          id="flexCheckDefault" @change="updatePoke(pokemon.id)"
        />

        <img
          class="pokeball"
          src="@/assets/e7cb1a05e60dd2e.png"
          @click="deletePoke(pokemon.id)"
        />

        <img
          class="lapiz"
          src="@/assets/lapizito.png"
          @click="isEditable = true"
          v-if="!isEditable"
        />
        <button
          class="doneBtn btn btn-success"
          @click="
            isEditable = false;
            updatePoke(pokemon.id);
          "
          v-if="isEditable"
        >
          Done
        </button>
      </div>
    </div>
  </div>
  
</template>

<script>

  import { pokeServices } from "../services/pokeServices.js";
  export default {
    name: "Card",
    data() {
      return {
        isEditable: false,
      };
    },
    props: ["pokemon"],
    updtated(){
      updatePoke()
    },
    preMount() {
      this.deletePoke();
    },
    methods: {
      deletePoke(id) {
        pokeServices.deleteOne(id).then((response) => {
          this.pokemon = response.data;
        });
        this.$router.go();
      },
      updatePoke(id) {
        var data = {
          id: this.pokemon.id,
          name: this.pokemon.name,
          sprite: this.pokemon.sprite,
          catched: this.pokemon.catched,
        };
        pokeServices.updateOne(id, data).then((response) => {
          this.pokemons = response.data;
        });
       this.$router.go();
      },
      
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url("https://fonts.googleapis.com/css2?family=VT323&display=swap");

  #card {
    margin: 10px 10px 0px 10px;
    font-family: "VT323", sans-serif;
  }
  #rigthSide {
    justify-content: space-around;
  }
  .pokeball {
    margin-right: 50px;
    height: 60px;
  }
  #cardBody {
    background-color: #60b2e9;
  }
  #rigthSide input {
    margin-right: 30px;
    margin-top: 25px;
  }
  .lapiz {
    height: 55px;
    margin-right: 40px;
  }
  .doneBtn{
  margin-right:20px;
  }
</style>
