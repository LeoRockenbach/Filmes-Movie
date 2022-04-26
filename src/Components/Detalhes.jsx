import { StyleDetalhes } from "../Style/StyleDetalhes"
import img_Filme from '../Assets/Img/Filme.PNG'
import BackHome from "./Button"

export default function Detalhes (){
    
    return(
        <StyleDetalhes src={img_Filme}>
            <p>Olá</p>
            <BackHome />
        </StyleDetalhes>
            

    )
}