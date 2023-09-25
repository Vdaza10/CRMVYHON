import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: red;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    flex-wrap: wrap;
    @media (min-width: 700px) {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    }
`
//contenedor de opciones de ingresar
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
//contenedor logo
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
        /* width: 150px;
        flex-direction: column;
        height: 90px;
        justify-content: space-evenly;
        margin-left: 6em; */
        width: auto;
        list-style: none;
        /* display: flex; */
        justify-content: space-between;
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
    background-color: blue;  
`
//contendor tarjetas
export const ContainerTarjetas = styled.div`
    height: 100vh;
    width: 100%;
    /* background-color: red; */
    display : flex;
    justify-items: center;
    align-items: center;
    justify-content: space-around;
    margin-top: 0%;
    /* @media (min-width: 360px) and (max-height: 950px) {
    height: auto;
    width: 100%; 
    background-color: #08e738; 
    display : flex;
    justify-items: center;
    flex-direction: column; 
    align-items: center;
    justify-content: space-around;
    }     */
    @media (min-width: 360px) and (max-height: 700px) {
    height: auto;
    width: 100%;
    /* background-color: #08e738; */
    display : flex;
    justify-items: center;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    }   
` 
export const ContenedorImagen = styled.div`
    height: 30%;
    width: 55%;
    background-color: aqua;
    margin-top: 10px;
    /* display: flex; */
    /* align-items: center; */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    /* background-attachment: fixed; */
    @media (min-width: 235px) and (max-height: 950px) {
    height: 150px;
    display: flex;
    margin-top: 10px;
    /* display: flex; */
    /* align-items: center; */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    }
`
export const TarjetasInformativas = styled.div`
    height: 75%;
    width: 30%;
    background-color: #4ea9f9;
    opacity: .9;
    border-radius: 3%;
    /* margin-top: 5%; */
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    font-family: 'Times New Roman', Times, serif;
    h2 {
        margin-bottom: 10px; /* Puedes ajustar este valor según tu preferencia */
    }
    @media screen and (max-width: 700px) {
        width: 80%; /* Ajusta el ancho de las tarjetas en dispositivos móviles */
        margin-top: 2em;
    }
`
export const Footer = styled.div`
    color: #3db8e9;
    text-align: center;
    /* padding: 10px; */
    height: 10em;
    /* background-color: aqua; */
`
export const TextoFooter = styled.p`
    margin: 0;
    font-size: 50px;
    /* background-color: red; */
`