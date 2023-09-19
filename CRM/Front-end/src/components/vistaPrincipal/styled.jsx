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
`;

export const ContenedorTarjeta = styled.div`
/* background-color: #0000ff; */
display: flex;
justify-content: center;
align-items: center;
height: 600px;
width: 234em;
`;

export const Tarjeta1 = styled.div`
width: 320px;
height: 435px;
background-color: #10daf0b8;
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


