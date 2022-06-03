import styled from 'styled-components';

export const StyleFooter= styled.footer `
    background-color: #808080;
    width: 100%;
    height: 70px;
    margin: 0;
    position: ${props => props.primary ? 'fixed' : 'relative'};
    bottom: 0;

    p{
        padding-top: 25px;
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        text-align: center; 
        font-size: 15px;
        margin: 0;
    }
`