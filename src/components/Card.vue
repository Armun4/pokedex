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
        <h4 class="nameField" :contenteditable="isEditable">
          {{ pokemon.name }}
        </h4>
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
          class="btn btn-success"
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
  <EditForm v-if="isShown" />
</template>

<script>
  import EditForm from "../components/EditForm.vue";
  import { pokeServices } from "../services/pokeServices.js";
  export default {
    name: "Card",
    components: { EditForm },
    data() {
      return {


        isEditable: false,
      };
    },
    props: ["pokemon"],
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
          name: document.querySelector(".nameField").textContent,
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
    font-family: "Open Sans", sans-serif;
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
</style>
