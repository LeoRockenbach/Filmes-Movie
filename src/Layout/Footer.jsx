
import { StyleFooter } from "../Style/StyleFooter"


export default function Footer (){

    const footer= 'React Movies @ 2022. Todos os direitos reservados';
    

    return(
        <StyleFooter>
            <div>
                <p>{footer}</p>
            </div>
        </StyleFooter>
    )

}