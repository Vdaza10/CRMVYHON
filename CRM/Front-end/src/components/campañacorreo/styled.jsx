import styled, { keyframes } from "styled-components";

const slideInRigth = keyframes`
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(10%);
    }
`
export const Contenedor = styled.div`
    height: 90.1vh;
    width: 100%;
    /* background-color: pink; */
    /* animation: ${slideInRigth} 0.5s ease-in-out; */
`
export const Contenedorcampaña1 = styled.div`
    height: 100%;
    width: 100%;
    animation: ${slideInRigth} 0.5s ease-in-out;
    box-shadow: 2px 2px 10px 10px #0099ff4c;
    background: -webkit-linear-gradient(180deg, #0099ffac 0%, #72c4fa 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0099ff",endColorstr="#ffffff",GradientType=1);
    display: flex;
    justify-content: space-between;
    justify-content: space-evenly;
    gap: 10px;
`
export const TarjetasEditablesCorreo = styled.div`
    height: 40%;
    width: 20%;
    background-color: white; 
    margin-right: 10px; 
    margin-top: 5%;
`
export const TextoTarjeta = styled.div`
    height: 13%;
    width: 100%;
    background-color: pink;
    display: flex;
    align-items: center;
    justify-content: center;
`