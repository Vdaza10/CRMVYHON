import styled from "styled-components" 

export const Fondo = styled.div`
background: rgb(0,153,255);
background: -moz-linear-gradient(180deg, rgba(0,153,255,1) 0%, rgba(238,238,238,1) 100%);
background: -webkit-linear-gradient(180deg, rgba(0,153,255,1) 0%, rgba(238,238,238,1) 100%);
background: linear-gradient(180deg, rgba(0,153,255,1) 0%, rgba(238,238,238,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0099ff",endColorstr="#eeeeee",GradientType=1);

    width: 100%;
    height:100vh;
    display: flex;
    justify-content: center;
    justify-content: space-between;
`
export const Idioma = styled.select`
    width: 90%;
    height: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 15px;
`

export const Ladero = styled.div`
    background-color: rgb(255, 255, 255);
    width: 25%;
    height:100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Ladero1 = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Ladero2 = styled.div`
    color: black;
    width: 80%;
    height: 50% ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Img = styled.img`
    width: 160px;
`

export const ContainerSelect = styled.div`
    width: 5%;
    height: 3%;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-top: 17px;

`
export const Ingresar = styled.p`
    margin-right: 15px;
    font-size: 18px;
    font-weight:500;
    cursor: pointer;

    /* &:before {
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
        width: 5%;
        
    } */

    &:hover {
        color: #c6dde7;
    }
`

export const Parrafo = styled.p`
    font-size: 17px;
    font-weight: 500;
    font-style: italic;
    display: flex;
    text-align: center;
`
export const Parrafo1 = styled.p`
    font-size: 20px;
    font-style: italic;
    display: flex;
    text-align: center;
`