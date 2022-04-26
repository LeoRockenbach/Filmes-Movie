import { StyleHeader, ImgHome } from "../Style/StyleHeader";
import pngHome from "../Assets/Img/Home.PNG"

export default function Header ( {title} ){

    return(
        <>
        <StyleHeader>
            <h1>{title}</h1>
        </StyleHeader>
        <ImgHome src={pngHome} />
        </>
    )

}