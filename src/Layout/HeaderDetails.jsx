import { StyleHeader } from "../Style/StyleHeader";

export default function Header ( {title} ){

    return(
        <>
        <StyleHeader>
            <h1>{title}</h1>
            <p>Home Favoritos</p>
        </StyleHeader>
        </>
    )

}
