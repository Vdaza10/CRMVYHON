import styled from "styled-components";

export const Container = styled.div`
width: 100%;
    height:100% ;
    position: fixed;
    /* top: 0;
    left: 0; */
    background-color: rgba(0,0,0,.5);
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ContenedorModal = styled.div`
    width: 35%;
    height: 45%;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Encabezado = styled.div`
width: 100%;
height: 15%;
    display: flex;
    align-items: center;
    justify-content: space-between ;
    /* margin-bottom: 20px;
    padding-bottom: 20px; */
    border-bottom: 2px solid #E8E8E8;

    h1{ 
        font-weight: 200;
        font-size: 25px;
        margin-left: 30px;
    }
`

export const Input1 = styled.input`
    width: 90% ;
    height: 13%;
    margin-bottom: 5px;
    color: gray;
    border: solid 1px gray;
`

export const Contenido = styled.div`
    height: 65%;
    width: 95%;
    border: solid 1px #817e7e66;
    margin-top: 12px;
    display: flex;
    align-items: center;
`

export const ContainerInput= styled.div`
    width: 70%;
    height: 95%;
    padding-left: 20px;
    margin-top: 10px;
`
export const ContainerFoto = styled.div`
    width: 30%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
`

export const Boton = styled.button`
    width: 30%;
    height: 40px;
    background-color: #49a3db;
    border: none;
    margin-top: 10px;
    font-size: 15px;
    color: white;

    &:hover {
        background-color: #3eabee76;
        color: gray;
    }
`


export const Foto = styled.img`
    height: 60%;
    width: 80%;
    margin-top: 20px;
    border-radius: 10px;
`
export const Texto = styled.p`
    color: rgb(44, 42, 42);
    margin: 0;
    display: flex;
    margin-left: 10px;
    font-weight: 500;
`




