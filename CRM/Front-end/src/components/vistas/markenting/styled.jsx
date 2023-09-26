import styled from "styled-components";

export const Contenedor = styled.div`
    height: 80%;
    width: 100%;
    align-items: center;
    justify-content: center;
`
export const ContenedorCampañas = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    margin-top: 28px;
    align-items: center;
    justify-content: space-evenly;
    `
    export const ContenedorCampañas1 = styled.div`
    height: 255px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-decoration: none;
    `

    export const ContenedorCampañaImagen = styled.img`
        height: 100%; 
        width: 290px; 
        transition: transform 0.2s ease-in-out; 
        border-radius: 10%; 
        cursor: pointer; 
    `
export const Campañas = styled.div`
    /* background-color: #00ffff; */
    height: 67%;
    width: 30%;
    text-align: center;
    display: flex;    
    font-family: 'Times New Roman', Times, serif;
    font-size: 30px;
    align-items: center;
    &:hover {
        transform: scale(1.1);
    }
    `