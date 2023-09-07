import styled from "styled-components";

// Contenedor principal
export const Contenedor = styled.div`
    /* height:100%;
    width: 100%;
    background-color: pink; */
    position: absolute;
`
// Contenedor para el carrusel de tarjetas
export const ContenedorTarjeta = styled.div`
    height: 75vh;
    width: 100%; 
    margin-top: 0.0%;
    /* background: radial-gradient(90deg, #a9c8eb 10%, rgba(0,212,255,1) 23%, #a9c8eb 100%); */
    /* background-color: red;  */
    display: flex;
    /* align-items: center; */
    left: auto; 
    justify-content: space-between;
    justify-content: space-evenly;
    @media screen and (max-width: 700px) {  
    }
`
// Tarjeta individual (ejemplo, puedes tener múltiples tarjetas con nombres diferentes)
export const Tarjeta1 = styled.div`
    height: 90%;
    width: 10%; 
    background-color: pink;
    align-items: center;
    display: flex; 
`
// Tarjeta utilizada en el carrusel
export const Tarjeta2 = styled.div`
    height: 65vh;
    width: 100%; 
    /* background-color: blue;  */
    align-items: center;
`
// Contenedor para la información adicional (fuera del carrusel)
export const ConInformacion = styled.div`
    /* background-color: aqua; */
    width: 100%;
    height: 60vh;
    `
// Ejemplo de estilo para un título (puedes personalizarlo según tus necesidades)
export const Titulo = styled.h1``

