<template>
  <div id="card" class="card border border-dark w-75">
    <div
      class="card-body  bg-danger d-flex  justify-content-between align-items-center"
    >
      <div>
        <img
          :src="pokemon.sprite"
          class="rounded float-start"
          v-bind:key="pokemon.sprite"
        />
      </div>
      <div>
        <h4>{{ pokemon.name }}</h4>
      </div>
      <div>
        <p></p>
        <input
          class="form-check-input float-end"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "Card",
    props: [
      'pokemon'
    ]
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  #card{
    margin: 10px 10px 0px 10px;
    font-family: 'Open Sans', sans-serif;
  }
</style>
