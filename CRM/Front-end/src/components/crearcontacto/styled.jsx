import styled from "styled-components"

// Estilo para un div absoluto que contiene otros elementos
export const Div1 = styled.div`
position: absolute;
    height: 90vh;
    width: 18%;
    top: 97px;
    right: 0px;
    display: flex; 
    justify-content: center; 
`;
// Estilo para un contenedor principal
export const Container1 = styled.div`
    height: 99.6%;
    width: 100%;
    background-color: white;
    /* background-color: aqua; */
    border: solid 1px black;
`
// Estilo para una caja que contiene elementos
export const Caja = styled.div`
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`
// Estilo para un párrafo con estilo itálico
export const Parrafo = styled.p`
    font-size: 18px;
    font-style: italic;
    display: flex;
    align-items: center;
    padding-left: 20px;
`
// Estilo para una imagen
export const Img = styled.img`
    height: 30px;
    width: 30px;
    padding-right: 30px;
`
// Estilo para un párrafo con estilo itálico
export const Parrafo1 = styled.p`
    font-size: 15px;
    font-style: italic;
`
// Estilo para una caja que contiene elementos
export const Caja1 = styled.div`
    height: 70%;
    width: 94%;
    padding-left: 20px;
`
// Estilo para un input de texto
export const Input = styled.input`
    height: 5%;
    width: 90%;
    font-size: 17px;
    outline: none;
`
// Estilo para un párrafo con estilo itálico y color gris
export const Parrafo2 = styled.p`
    font-size: 16px;
    font-style: italic;
    color: gray;
    margin-top: 8%;
`
// Estilo para un botón con color de fondo y color de texto
export const Boton1 = styled.button`
    background-color: #49a3db;
    color: white;
    width: 35%;
    height: 45%;
    border: none;
    border-radius: 2px;
    font-size: 14px; 
    cursor: pointer;

    &:hover {
        background-color: #3eabee76;
        color: gray;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
        }
`
// Estilo para otro botón con color de fondo y color de texto
export const Boton2 = styled.button`
    background-color: white;
    scroll-padding-right: none;
    color: #49a3db;
    width: 25%;
    height: 45%;
    font-size: 14px; 
    border: solid 1px #80808044;
    cursor: pointer;

    &:hover {
        background-color: #3eabee76;
        color: gray;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
        }
`
// Estilo para una caja que contiene elementos
export const Caja2 = styled.div`
    height: 10%;
    width: 100%;
    display: flex;
    display: flex;
    align-items: normal;
    justify-content: space-evenly;
    align-items: center;
    right: auto;
`;

export const Select = styled.select`
    width: 92%;
    height: 6%;
    border: solid 1px gray;
`