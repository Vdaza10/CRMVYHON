import styled from "styled-components";

// fondo
export const Fondo = styled.div`
    /* background-color:#f2f2f2; */
    background: -webkit-linear-gradient(70deg, #56b7f7b6 0%, #ffffff 100%);

`
//Header y su contenido
export const Header = styled.header`
width: 100%;
height: 130px;
/* margin-top: 0%; */
`

export const Parrafo = styled.p`
    margin: 0;
    /* font-style: italic; */
    margin-top: 10px;
    margin-left: 20px;
    font-size: 20px;
    font-weight: 100;
    
`
//Contenedor del perfil
export const Main = styled.div `
    display: flex;
    justify-content: center;
    height: 76vh;
    /* background-color: #56b7f7a2; */
    background: -webkit-linear-gradient(100deg, #56b7f7b6 0%, #ffffff 70%);
`

export const ContenedorPerfil = styled.div`
    width: 30%;
    height: 70%;
    margin-top: 100px;
    border: 1px solid black;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    /* background-color: #fff; */
    box-shadow: 2px 2px 10px 10px #0099ff4c; 
    background: -webkit-linear-gradient(100deg, #56b7f7b6 0%, #ffffff 70%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#56b7f7a2",endColorstr="#56b7f7a2",GradientType=1);

`
export const InformacionActivacion = styled.div`
    width: 100%;
    height: 35%;
    display: flex;
    border-bottom: 1px solid black;

`;
//  contenedor imagen
export const ImagenPerfil = styled.img `
border-radius: 50%;
width: 20%;
height: 60%;
margin: 5%;
`;
export const ContenedorRegistro=styled.div`
    /* background-color: violet; */
    width: 100%;
    height: auto;
`
export const Registro = styled.p`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 17px;
    color: rgb(128, 128, 128);
    margin-left: 33%;
    /* background-color: salmon; */
    
`
export const Fecha = styled.p`
    text-decoration: none;
    color:#646262;
    margin: 0;

`;
export const DatosUsuario  = styled.div`
    width: 100%;
    height:65%;
    /* background-color: maroon; */
    margin-Left: 30px;
    color:#646262;
`
export const Informacion = styled.div`
width: 50%;
height: 100%;
`
export const Nombre = styled.p`
    color: gray;
    margin-Left:20px;
    margin-Right:50px;
`
export const Editar = styled.button`
    background-color:#0099ffe2;
    width: 30%;
    height: 35px;
    border:0;
    border-radius: 3px;
    margin-top: 30px;
    margin-left: 55%;
    color: white;
    &:hover {
    background-color: #3eabee76;
    color: gray;
}

`;
export const Caja = styled.div`
    display: flex;
    margin-top: 30px;
    margin-left: 30px;
    width: 15%;
    justify-content: space-between;
    height: 40px;
`

export const Parrafo1 = styled.a`
    position: relative;
    margin: 0;
    margin-top: 4px;
    font-size: 18px;
    color: gray;
    text-decoration: none;
    cursor: pointer;

    &:before {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        height: 3px;
        width: 0;
        background-color: #1e1e1e;
        border-radius: 40px;
        transition: width 0.2s ease-in-out;
        
    }
    &:hover:before {
        width: 100%;
        
    }
    &:hover {
        color: #000000;
    };
`;

export const Container = styled.div`
    width: 90%;
    height: 50%;
    display:flex;
    justify-content : space-between;
`
