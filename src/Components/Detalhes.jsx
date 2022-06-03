import { BannerFilme, StyleDetalhes } from "../Style/StyleDetalhes"
import BackHome from "./Button";


export default function Detalhes ({ dataDetalhes }){
   
    const Img_details= `https://image.tmdb.org/t/p/w500/${dataDetalhes.poster_path}`

    console.log ({dataDetalhes})
   
   const textButton= 'Voltar para a Home';

    // function returnHome(){
    //     onclick(window.location='/Homepage')
    // }

    return(
        <>
        <StyleDetalhes>
            <BannerFilme src={Img_details} />
            <div>
              <b>Título:</b><p>{dataDetalhes.original_title}</p>
                <p><b>Sinopse:</b> {dataDetalhes.overview} </p> 
                <b>Data do lançamento:</b><p>2022-05-02</p>
                <b>Nota:</b><p>7.7</p>
                <BackHome textButton={textButton} />
             </div>
        </StyleDetalhes>
        </>
        
    )
}