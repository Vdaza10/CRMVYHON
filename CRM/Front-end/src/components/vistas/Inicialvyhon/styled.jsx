import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
`

//contenedor de opciones de ingresar
export const ContenedorInicial = styled.div`
    height: 10%;
    width: 100%;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: 2px 2px 10px 10px #0099ff4c;
    background: -webkit-linear-gradient(180deg, #0099ff 0%, #ffffff 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0099ff",endColorstr="#ffffff",GradientType=1);
`
//contenedor logo
export const Contenedor1 = styled.nav`
    width: 20%;
    display: flex;
    align-items: center;
`
export const Logo = styled.img`
    height: 55px;
`;

export const Menucontainer = styled.ul`
    width: 18%;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    `
export const Opciones = styled.li`
    background-color: #0099ff;
    color: #000000;
    width: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    border-radius: 5px;
    margin: 5px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s;
    &:hover {
    background: -webkit-linear-gradient(180deg, #0099ff -10%, #ffffff 250%);
    color: #000000;
}
`;

export const Informacion = styled.div`
    height: 100%;
    width: 100%;
    background-color: blue;  
`
//contendor tarjetas
export const ContainerTarjetas = styled.div`
    height: 90%;
    width: 100%;
    display : flex;
    justify-items: center;
    align-items: center;
    justify-content: space-around;
    margin-top: 0%;
    @media (min-width: 360px) and (max-height: 700px) {
    height: auto;
    width: 100%;
    display : flex;
    justify-items: center;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    }   
` 
export const ContenedorImagen = styled.div`
    height: 50%;
    width: 100%;
    background-color: red;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`
export const TarjetasInformativas = styled.div`
    height: 80%;
    width: 25%;
    background-color: #4ea9f9;
    opacity: .9;
    border-radius: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    font-family: 'Times New Roman', Times, serif;
   
`
export const Footer = styled.div`
    color: #3db8e9;
    text-align: center;
    height: 10%;
`
export const TextoFooter = styled.p`
    margin: 0;
    font-size: 50px;
`