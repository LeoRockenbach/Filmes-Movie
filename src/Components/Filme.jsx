import React from "react";
import { DivConteiner, Card, CardFilme } from "../Style/StyleMain";
// import img_Filme from '../Assets/Img/Filme.PNG';
import { Link } from 'react-router-dom'



export default function Film ( {dataMovie} ){
    
    const banner_IMG= 'https://image.tmdb.org/t/p/w500/';

    return(
      <>
        <DivConteiner>
          { dataMovie.map(item => 
              <Link key={item.id} to={ `/Details/${item.id}` }>    
              <Card key={item.id}>
                <CardFilme src={banner_IMG + item.poster_path}/>
                <p>Titulo:{item.original_title} </p> 
                <p>Nota: {item.vote_average}</p>
              </Card>
            </Link>
            )}
        </DivConteiner>
      </>
    )
}