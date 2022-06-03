import { Button } from "../Style/StyleButton"
import { Link } from "react-router-dom"

export default function BackHome( {textButton} ) {

    return(
        <>
        <Link to={'/'}>
        <Button>{textButton}</Button>
        </Link> 
        </> 
    )
}

