import styled from "styled-components";

export const Contenedor = styled.div`
    height: 90vh;
    width: 100%;
    align-items: center;
    justify-content: center;
`
export const ContenedorCampañas = styled.div`
    height: 255px;
    /* background-color: #ff0000; */
    display: flex;
    margin-top: 28px;
    align-items: center;
    justify-content: space-evenly;
    `
    export const ContenedorCampañas1 = styled.div`
    height: 255px;
    /* background-color: #ffffff; */
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

    @media screen and (max-width: 910px) {
        width: 200px;
    }
    @media screen and (max-width: 650px) {
        width: 150px;
    }
    @media screen and (max-width: 400px) {
        width: 90px;
    }
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
    @media screen and (max-width: 1240px) {
        flex-direction: column;
    }
    @media screen and (max-width: 650px) {
        font-size: 25px;
    }
    @media screen and (max-width: 400px) {
        font-size: 20px;
    }
    `