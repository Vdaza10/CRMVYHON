import styled from "styled-components";

const Fondo= styled.div`
    height: 100vh;
    width: 100%;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const ContenedorDeCajas = styled.div`
    height: 20%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;
`
const ContenedorLetrasCajas = styled.div`
    background-color: #f00;
    width: 100%;
    height: 25%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`
const LetrasCajas = styled.div`
    background-color: #ffffff;
    width: 60%;
    height: 40%;
`
const Icono = styled.div`
    background-color: #fff;
    width: 10%;
    height: 70%;
`
const NumerosCajas = styled.div`
    background-color: #cc1b1b;
    width: 50%;
    height: 25%;
    font-size: 25px;
`
const Caja = styled.div`
    height: 80%;
    width: 20%;
    background-color: #3eabee;
    margin: 5px 5px 5px 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ContenedorDeElMedio = styled.div`
    height: 40%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;
`
const ContenedorColorYLetra = styled.div`
    background-color: #0a6b9b;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
//================================================1
    &.contenedor1de1{
        width: 20%;
        height: 60%;
    }
    &.contenedor2de1{
        width: 20%;
        height: 60%;
    }
    &.contenedor3de1{
        width: 20%;
        height: 60%;
    }
    &.contenedor4de1{
        width: 20%;
        height: 60%;
    }
//============================================2
    &.contenedor1de2{
        width: 20%;
        height: 60%;
    }
    &.contenedor2de2{
        width: 20%;
        height: 60%;
    }
    &.contenedor3de2{
        width: 20%;
        height: 60%;
    }
    &.contenedor4de2{
        width: 20%;
        height: 60%;
    }
//=============================================3
&.contenedor1de3{
        width: 20%;
        height: 60%;
    }
    &.contenedor2de3{
        width: 20%;
        height: 60%;
    }
    &.contenedor3de3{
        width: 20%;
        height: 60%;
    }
    &.contenedor4de3{
        width: 20%;
        height: 60%;
    }
`


const LetrasDeVerificacion = styled.div`
    background-color: #ffffff;
    width: 60%;
    height: 25%;

//=============================================1
    &.letra1de1{
        height: 70%;
    }
    &.letra2de1{
        height: 70%;
    }
    &.letra3de1{
        height: 70%;
    }
    &.letra4de1{
        height: 70%;
    }
//=============================================2
    &.letra1de2{
        height: 70%;
    }
    &.letra2de2{
        height: 70%;
    }
    &.letra3de2{
        height: 70%;
    }
    &.letra4de2{
        height: 70%;
    }
//============================================3
&.letra1de3{
    
        height: 70%;
    }
    &.letra2de3{
        height: 70%;
    }
    &.letra3de3{
        height: 70%;
    }
    &.letra4de3{
        height: 70%;
    }
`
const Color = styled.div`
    background-color: #fff;
    width: 10%;
    height: 35%;
//==================================1
    &.color1de1{
        background-color: #000000;
        height: 70%;
    }
    &.color2de1{
        background-color: #ff00bb;
        height: 70%;
    }
    &.color3de1{
        background-color: #bfff00;
        height: 70%;
    }
    &.color4de1{
        background-color: #00a6ff;
        height: 70%;
    }
//====================================2
    &.color1de2{
        background-color: #000000;
        height: 70%;
    }
    &.color2de2{
        background-color: #8c00ff;
        height: 70%;
    }
    &.color3de2{
        background-color: #a96206;
        height: 70%;
    }
    &.color4de2{
        background-color: #7a8286;
        height: 70%;
    }
//======================================3
&.color1de3{
        background-color: #000000;
        height: 70%;
    }
    &.color2de3{
        background-color: #8c00ff;
        height: 70%;
    }
    &.color3de3{
        background-color: #a96206;
        height: 70%;
    }
    &.color4de3{
        background-color: #7a8286;
        height: 70%;
    }
`
const ContenedorVerificacion = styled.div`
    width: 80%;
    height: 15%;
    display: flex;
    flex-direction: row;
`
const ContenedorDeBarras = styled.div`
    width: 85%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const CajaGraficaDeElMedio = styled.div`
    height: 97%;
    width: 35.2%;
    margin: 5px 5px 5px 5px;
    background-color: #3eabee;
    display: flex;
    flex-direction: column;
`

const ContenedorFooter = styled.div`
    height: 55%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const CajaFooter = styled.div`
    height: 98%;
    width: 80.7%;
    background-color: #3eabee;
`

export {
    Fondo, ContenedorDeCajas, ContenedorLetrasCajas, LetrasCajas, Icono, NumerosCajas, Caja, ContenedorDeElMedio, ContenedorVerificacion, ContenedorColorYLetra, ContenedorDeBarras,LetrasDeVerificacion, Color, CajaGraficaDeElMedio, ContenedorFooter, CajaFooter }