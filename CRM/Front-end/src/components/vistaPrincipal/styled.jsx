import styled from "styled-components";

export const Contenedor = styled.div`
/* background-color: #cfaaf1; */
height: 580px;
display: grid;
grid-gap: 10px;
grid-template: 1fr / 5% 1fr 5%;
grid-template-areas: "prev carousel next";
justify-items: center;
align-items: center;
/* margin-top: 7vh; */
@media screen and (min-width: 390) and (max-height: 844){
    height: 580px;
    display: grid;
    grid-gap: 10px;
    grid-template: 1fr / 5% 1fr 5%;
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
height: 600px;
width: 234em;
@media screen and (max-width: 1669px) and (min-width: 390px){
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
    width: 100px;
    background-color: pink; 
    flex-direction: column;
}
`;

export const Carrusel = styled.div`
    display: flex;
    height: 400px;
    margin-Left:1575px;
    @media screen and (max-width: 300px) and (min-width: 390px){
    height: 400px;
    margin-Left:1575px;
    }
`
export const Tarjeta1 = styled.div`
width: 320px;
height: 435px;
background-color: #2d5affb8;
/* background-color: #0099ffac; */
transition: all 0.3s ease;
border-radius: 3em;
box-shadow: 1px 1px 15px white;
opacity: 0;
transform: translateX(20px);
display: flex;
flex-direction: column;
justify-content: center;
&.active {
    opacity: 1;
    transform: translateX(0);
}
`;

export const Tarjeta2 = styled.div`
    display: flex;
    background-color: silver;
    height: 600px;
    margin-left: 1820%;
`;