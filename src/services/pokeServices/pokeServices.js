import axios from 'axios'

const baseUrl = "http://localhost:3000"

export const pokemonList = { 
 getAll(){
     return axios.get(baseUrl + "/pokemons" )
 }

}