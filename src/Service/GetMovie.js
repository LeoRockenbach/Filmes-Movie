import axios from 'axios';

//Constantes para consulta padrão aos conteúdos disponibilizados pela API.
const URL_BASE= 'https://api.themoviedb.org/3';

const API_key= "baedd556e79e73d31e645840c35e5834"

export function getApiPopular () {
    return  axios.get(`${URL_BASE}/movie/popular?api_key=${API_key}`)
}

export function getApiDetails (id){
    return axios.get (`${URL_BASE}/movie/${id}?api_key=${API_key}`)
}