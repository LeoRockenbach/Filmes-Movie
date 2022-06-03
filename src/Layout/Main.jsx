import { Subtitulo } from "../Style/StyleMain"
import Film from "../Components/Filme";
import { useEffect, useState } from "react";
import { getApiPopular } from "../Service/GetMovie";

export default function Main( {textSubtitulo} ){
    
    const [moviePopular, setMoviePopular ] = useState([])

    //Função que pega o resultado da consulta do axios e traz pra dentro desse componente
    //O async é usado para fazer a página aguardar o carregamento de todas as informações da API 
    const fetchPopular= async () => {
      const { data }= await getApiPopular();
      
      //os dados estão dentro do 'results no array pos isso passamos .results'
       console.log ('data', data.results)
      //envia os dados do array para useState ='moviePopular'.
      setMoviePopular(data.results);
    }
  
  //useEfect é executado toda vez que o app é renderizado na tela
  useEffect(() => {
  
    fetchPopular();
    
  }, [])

    return(
        <main>
            <>
            <Subtitulo>{textSubtitulo}</Subtitulo>
            <Film dataMovie={moviePopular} />
            </>
        </main>
    )

}