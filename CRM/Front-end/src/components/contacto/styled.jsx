import styled from "styled-components"

// Estilo para el contenedor principal
export const Container= styled.div`
    height: 70vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
// Estilo para el párrafo
export const Parrafo = styled.p`
    font-size: 20px;
    font-style: italic;
    display: flex;
    text-align: center;
`
// Estilo para el botón
export const Boton =styled.button`
    background-color: #3aa8ec;
    color: #eaeff1;
    width: 10%;
    height: 35px;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    font-size: 16px; 
    cursor: pointer;

    &:hover {
        background-color:#3eaaee93;
        color: gray;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
        }
`