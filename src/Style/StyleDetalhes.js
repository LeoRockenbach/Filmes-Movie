import styled from "styled-components";

export const StyleDetalhes= styled.div `
    width: 55%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr ;
    align-items: center;
    
    div{ 
        margin-left: 15%;
    }

    b{
        grid-row: 1/2;
        grid-column: 2/2;
        display: inline-block;
    }
    p {
        display: inline-block;
        grid-column: 2/2;
    }
`

export const BannerFilme= styled.img`
    width:100% ; 
    height: 90%;   
    margin: 10%;
    grid-column: 1/2;
`