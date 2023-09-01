import styled from "styled-components"

// Contenedor superior que contiene elementos en fila
export const Container1 = styled.div`
    height: 10%;
    width: 100%;
    margin-top: 15px;
    display: flex;
    
`
// Contenedor superior con elementos espaciados uniformemente
export const Container2 = styled.div`
    height: 10%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 15px;
`
// Caja rectangular con fondo de color
export const Caja = styled.div`
    border-radius: 10px;
    height: 100%;
    width: 19%;
    background-color: #0000004c;
`
// Cajita que contiene elementos distribuidos uniformemente
export const Cajita = styled.div`
    display: flex;
    justify-content: space-between;
    height: 40%;
    width: 90%;
    align-items: center;
`
// Caja con cursor y contenido
export const Caja1 = styled.div`
    height: 100%;
    width: 30%;
    display: flex;
    cursor: pointer;
`
// Cajita que contiene elementos con alineación vertical
export const Cajita1 = styled.div`
    height: 100%;
    width: 33%;
    display: flex;
    align-items: center;
`
// Cajita con contenido
export const Cajita2 = styled.div`
    height: 100%;
    width: 33%;
`
// Contenedor grande
export const Container3 = styled.div`
    height: 80%;
    width: 100%;
`
// Caja grande con margen y posición
export const Caja2 = styled.div`
    height: 40%;
    width: 50%;
    margin-left: 25%;
    margin-top: 15%;
`
// Cajita que contiene elementos con alineación vertical y horizontal
export const Cajita3 = styled.div`
    height: 40%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
// Botón de estilo primario
export const Boton1 = styled.button`
    background-color: #3eabee;
    color: white;
    width: 20%;
    height: 36px;
    border: none;
    margin: 5%;
    font-size: 16px; 
    cursor: pointer;

    &:hover {
        background-color: #3eaaee93;
        color: gray;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
        }
`
// Botón de estilo secundario
export const Boton2 = styled.button`
    background-color: white;
    color: #49a3db;
    width: 20%;
    height: 36px;
    border: #80808051 solid 1px;
    font-size: 16px; 
    cursor: pointer;

    &:hover {
        background-color: #3eaaee93;
        color: gray;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
        }
`