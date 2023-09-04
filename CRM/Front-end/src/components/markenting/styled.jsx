import styled from "styled-components";

export const Contenedor = styled.div`
    height: 90vh;
    width: 100%;
    align-items: center;
    justify-content: center;
`
export const ContenedorCampañas = styled.div`
    height: 35%;
    width: 50;
    /* background-color: #ff0000; */
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    `
    export const ContenedorCampañas1 = styled.div`
    height: 35%;
    width: 50;
    /* background-color: #ffffff; */
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-decoration: none;
    `

    export const ContenedorCampañaImagen = styled.img`
        height: 100%; 
        width: 70%; 
        transition: transform 0.2s ease-in-out; 
        border-radius: 10%; 
        cursor: pointer; 
        &:hover {
        transform: scale(1.1);
    }
    `
export const Campañas = styled.div`
    /* background-color: #00ffff; */
    height: 80%;
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
    // export const campañaStyles = {
    //     link: {
    //         textDecoration: "none",
    //         color: "white",
    //         fontFamily: "'Times New Roman', Times, serif",
    //         },
    //     }