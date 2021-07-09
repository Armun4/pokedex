import axios from 'axios'

const baseUrl = "http://localhost:3000"

export const pokeServices = { 
 getAll(){
     return axios.get(baseUrl + "/pokemons")
     
 },
 deleteOne(id){
    return axios.delete(baseUrl + `/pokemons/${id}`)

 },
createOne(data){
    return axios.post(baseUrl + "/pokemons", data)
    
},
updateOne(id, data){
    return axios.put(baseUrl +`/pokemons/${id}`, data)
}
}