import axios from 'axios'

const baseUrl = "http://localhost:3000"

export const pokeServices = { 
 getAll(){
     return axios.get(baseUrl + "/pokemons")
 }

}