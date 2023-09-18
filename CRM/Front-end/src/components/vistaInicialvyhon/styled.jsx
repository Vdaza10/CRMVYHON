

import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
`
export const ContenedorInicial = styled.div`
    height: 10vh;
    width: 100%;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: 2px 2px 10px 10px #0099ff4c;
    background: -webkit-linear-gradient(180deg, #0099ff 0%, #ffffff 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0099ff",endColorstr="#ffffff",GradientType=1);
`
export const Contenedor1 = styled.nav`
/* background-color: aqua; */
    height: 100%;
    width: 20%;
    display: flex;
    align-items: center;
`
export const Logo = styled.img`
    height: 55px;
`;

export const Menucontainer = styled.ul`
    width: 300px;
    list-style: none;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 700px) {
        display: flex;
        flex-direction: column;
    };
    `

export const Opciones = styled.li`
background-color: #0099ff;
color: #000000;
padding: 10px 20px;
border-radius: 5px;
cursor: pointer;
transition: background-color 0.3s, color 0.3s, border-color 0.3s;
&:hover {

background: -webkit-linear-gradient(180deg, #0099ff -10%, #ffffff 250%);
color: #000000;
}
`;

export const Informacion = styled.div`
    height: 100vh;
    width: 100%;
    /* background-color: blue;  */ 
`
export const OpcionesCrm = styled.div`
    height: 700px;
    width: 100%;
    /* background-color: salmon; */
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ContainerTarjetas = styled.div`
    /* height: 10050%; */
    height: 90%;
    /* background-color: #c41f1f; */
    display : flex;
    justify-items: center;
    /* text-align: center; */
    align-items: center;
    justify-content: space-around;
    margin-top: 0%;
`
export const ContenedorImagen = styled.div`
    height: 35%;
    width: 60%;
    margin-top: 10px;
    display: flex;
    align-items: center;
    background-repeat: no-repeat;
    background-size: cover;
`
export const TarjetasInformativas = styled.div`
    height: 90%;
    width: 30%;
    background-color: #4ea9f9;
    opacity: .9;
    /* margin-top: 5%; */
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: space-evenly; */
    font-size: 20px;
    /* font-weight: 250px; */
    /* font-family: 'DM Sans', sans-serif; */
    font-family: 'Times New Roman', Times, serif;
`
export const Footer = styled.div`
    color: #3db8e9;
    text-align: center;
    /* padding: 10px; */
    height: 10em;
`
export const TextoFooter = styled.p`
    margin: 0;
    font-size: 50px;
`