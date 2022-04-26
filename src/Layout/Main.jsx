import { Subtitulo } from "../Style/StyleMain"
import Film from "../Components/Filme";

export default function Main( {textSubtitulo} ){
    

    return(
        <main>
            <Subtitulo>{textSubtitulo}</Subtitulo>
            <Film />
        </main>
    )

}