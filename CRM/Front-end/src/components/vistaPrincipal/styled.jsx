import styled from "styled-components";

export const Contenedor = styled.div`
/* background-color: blueviolet; */
height: 750px;
display: grid;
grid-gap: 10px;
grid-template: 1fr / 5% 1fr 5%;
grid-template-areas: "prev carousel next";
justify-items: center;
align-items: center;
margin-top: 7vh;
`;

export const ContenedorTarjeta = styled.div`
/* background-color: #0000ff; */
display: flex;
justify-content: center;
align-items: center;
height: 700px;
width: 234em;
`;

export const Tarjeta1 = styled.div`
width: 320px;
height: 600px;
background-color: #ff0000;
transition: all 0.3s ease;
opacity: 0;
transform: translateX(20px);

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

// export const ConInformacion = styled.div``;

// export const Titulo = styled.h1``;

