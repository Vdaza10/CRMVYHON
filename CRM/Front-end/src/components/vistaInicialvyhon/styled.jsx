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
        width: 150px;
        flex-direction: column;
        height: 90px;
        justify-content: space-evenly;
        margin-left: 6em;
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
    /* background-color: blue;   */
`
export const ContainerTarjetas = styled.div`
    height: 100vh;
    width: 100%;
    /* background-color: #c41f1f; */
    display : flex;
    justify-items: center;
    align-items: center;
    justify-content: space-around;
    margin-top: 0%;
    @media screen and (max-width: 700px){
        flex-direction: column;
        align-items: center;
        height: 260vh;
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
    /* background-size: contain;  */
    @media screen and (max-width: 700px){
        height: 20%;
        width: 90% ;
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
    color: black;
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