import styled from "styled-components";

export const Contenedor = styled.div`
height: 70%;
width: 100%;
display: flex;
justify-items: center;
align-content: center;
@media screen and (min-width: 390) and (max-height: 844){
    height: 50%;
    display: grid;
    grid-gap: 10px;
    grid-template-areas: "prev carousel next";
    justify-items: center;
    align-items: center;
}
`;

export const ContenedorTarjeta = styled.div`
/* background-color: #0000ff; */
display: flex;
justify-content: center;
align-items: center;
height: auto;
width: 100%;

`;

export const Carrusel = styled.div`
    display: flex;
    height: auto;
    width: 100%;
`
export const Tarjeta1 = styled.div`
width: 320px;
height: 435px;
background-color: #2d5affb8;
transition: all 0.3s ease;
border-radius: 30px;
box-shadow: #7b7a7a 1px 0px 15px 5px ;
opacity: 0;
transform: translateX(20px);
display: flex;
flex-direction: column;
justify-content: center;
&.active {
    opacity: 5;
    transform: translateX(0);
}
`;