import { DivConteiner, Card, CardFilme } from "../Style/StyleMain"
import img_Filme from '../Assets/Img/Filme.PNG'


export default function Film (){
    const tituloFilme= 'Spider-man No way home';
    const notaFilme= '10';
  
    return(
      <DivConteiner>
          <Card>
              <CardFilme src={img_Filme} />
              <p>Titulo: {tituloFilme}</p> 
              <p>Nota: {notaFilme}</p>
          </Card>
          <Card>
              <CardFilme src={img_Filme} />
              <p>Titulo: {tituloFilme}</p> 
              <p>Nota: {notaFilme}</p>
          </Card>
          <Card>
              <CardFilme src={img_Filme} />
              <p>Titulo: {tituloFilme}</p> 
              <p>Nota: {notaFilme}</p>
          </Card>
          <Card>
              <CardFilme src={img_Filme} />
              <p>Titulo: {tituloFilme}</p> 
              <p>Nota: {notaFilme}</p>
          </Card>
          <Card>
              <CardFilme src={img_Filme} />
              <p>Titulo: {tituloFilme}</p> 
              <p>Nota: {notaFilme}</p>
          </Card>
          <Card>
              <CardFilme src={img_Filme} />
              <p>Titulo: {tituloFilme}</p> 
              <p>Nota: {notaFilme}</p>
          </Card>
          
      </DivConteiner>
    )
}