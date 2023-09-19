import styled from "styled-components";

const Fondo = styled.div`
    background-color: #ffffff;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Contenedor = styled.div`
background-color: #abd3ec;
    width: 99.3%;
    height: 99.2vh;
    display: flex;
    justify-content: center;
`

const Caja = styled.div`
border-radius: 15px;
    width: 70%;
    height: 15%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    
    cursor: pointer;
    &.hover{
        margin-top: 15px;
    background-color: #ffffff92;
    :hover{
        
        background: -webkit-linear-gradient(180deg, #ffffff 0%, #989dd4 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#bdb2e1",endColorstr="#ffffff",GradientType=1);
    }
    }
    .perfil{
        width: 20%;
        height: 85%;
    }
    .contenedorParrafo{

        width: 70%;
        height: 100%;
        display: flex;
        flex-direction: column;
        
    }

    .parrafo1{
        width: 100%;
        height: 60%;
        display: flex;
        justify-content: left;
    }

    .parrafo2{
        width: 100%;
        height: 15%;
        display: flex;
        justify-content: left;
    }

    .fecha{
        width: 70%;
        height: 15%;
        display: flex;
        justify-content: end;

    }
    
`


export {
    Fondo, Contenedor, Caja
}