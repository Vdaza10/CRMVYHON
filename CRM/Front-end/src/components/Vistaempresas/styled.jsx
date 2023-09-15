import styled from "styled-components";

// Componente estilizado llamado Container
export const Container = styled.div`
    height: 75vh;
    width: 100%;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-direction: column;
`
// Componente estilizado llamado Parrafo para párrafos
export const Parrafo = styled.p`
    font-size: 22px;
    font-style: italic;
    display: flex;
    text-align: center;
    margin: 0;
    padding: 0;
`
// Componente estilizado llamado Boton para botones
export const Boton = styled.button`
    background-color: #3eabee;
    color: white;
    width: 10%;
    height: 35px;
    border: none;
    margin: 5%;
    font-size: 16px; 
    margin: 0;
    padding: 0;
    margin-top: 20px;
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