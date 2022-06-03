import styled from "styled-components";

export const Subtitulo= styled.h2`
    font-size: 17px;
    margin-left: 14%;
`;

export const DivConteiner= styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 180px;
    
    a {
    border: solid #808080 1px;
    margin: 10px;
    align-items: flex-start;
    width: 300px;
    text-decoration: none;
    }
  
`

export const Card = styled.div `
    text-decoration: none;
    margin:0;
    width: auto;
    flex-wrap: 3;
    cursor: pointer;

    p{
        font-size: 1.2vw;
        margin-left: 5%;
        color: #808080;
    }
`

export const CardFilme= styled.img `
    margin-left: 5%;
    margin-top: 3%;
    width: 90%;
    height: 80%;
`