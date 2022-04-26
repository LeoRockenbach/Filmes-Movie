import styled from "styled-components";

export const Subtitulo= styled.h2`
    font-size: 17px;
    margin-left: 5%;
`;

export const DivConteiner= styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

export const Card = styled.div `
    border: solid #808080 1px;
    width: 20%;
    margin: 0% 5% 5% 5%;
    flex-grow: 1;
    cursor: pointer;

    p{
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