import styled from "styled-components";

// Estilo para el contenedor principal
export const Div1 = styled.div`
position: absolute;
    height: 90vh;
    width: 350px;
    top: 97px;
    right: 0px;
    display: flex; 
    justify-content: center; 
    @media screen and (max-width: 1228px) {
        
    }
`;
// Estilo para el contenedor que envuelve el contenido principal
export const Container1 = styled.div`
    height: 99.6%;
    width: 350px;
    background-color: white;
    background-color: aqua;
    border: solid 1px black;
`
// Estilo para una caja que contiene elementos
export const Caja = styled.div`
    height: 10%;
    width: 340px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`
// Estilo para el párrafo
export const Parrafo = styled.p`
    font-size: 20px;
    font-style: italic;
    display: flex;
    align-items: center;
    padding-left: 20px;
    
`
// Estilo para la imagen
export const Img = styled.img`
    height: 30px;
    width: 30px;
    padding-right: 30px;
    cursor: pointer;
    
` 
// Estilo para otro párrafo
export const Parrafo1 = styled.p`
    font-size: 15px;
    font-style: italic;
    
`
// Estilo para una caja que contiene elementos (sección principal)
export const Caja1 = styled.div`
    height: 615px;
    width: 325px;
    padding-left: 20px;
    background-color: pink;
`
// Estilo para el input
export const Input = styled.input`
    height: 35px;
    width: 300px;
    font-size: 17px;
    outline: none;
    
`
// Estilo para el área de texto
export const Area = styled.textarea`
    height: 100px;
    width: 310px;
    font-size: 17px;
    outline: none;
    background-color: #00f784;
`
// Estilo para un botón de acción
export const Boton1 = styled.button`
    background-color: #49a3db;
    color: white;
    width: 100px;
    height: 39px;
    border: none;
    border-radius: 2px;
    font-size: 15px; 
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
// Estilo para otro botón de acción
export const Boton2 = styled.button`
    background-color: white;
    color: #49a3db;
    width: 85px;
    height: 39px;
    font-size: 15px; 
    border: solid 1px gray;
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
// Estilo para una caja que contiene elementos (sección de botones)
export const Caja2 = styled.div`
    height: 90px;
    width: 340px;
    display: flex;
    align-items: normal;
    justify-content: space-evenly;
    align-items: center;
    /* right: auto; */
    /* background-color: aqua; */

`
export const SelectEmpresa = styled.select`
    height: 40px;
    width: 310px;
    
`