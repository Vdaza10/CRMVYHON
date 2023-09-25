import styled from "styled-components";

export const Container = styled.div`
position: absolute;
    height: 90vh;
    width: 350px;
    top: 97px;
    right: 0px;
    display: flex; 
    background-color: white;
    justify-content: center;
    @media (max-width: 865px) and (max-height: 850px){
    margin-top: 40px;
    width: 390px;
    }
`;
export const Principal = styled.div`
    height: 770px;
    width: 123%;
    background-color: white;
    background-color: aqua;
    border: solid 1px black;
    @media (max-width: 920px)and (max-height: 850px){
        height: 100%; 
        width: 123%;
        background-color: red;
    }
`
export const Caja1 = styled.div`
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Parrafo = styled.p`
    font-size: 18px;
    font-style: italic;
    display: flex;
    align-items: center;
    padding-left: 20px;
    background-color: blue
`
export const Img = styled.img`
    height: 30px;
    width: 30px;
    padding-right: 30px;
    cursor: pointer;
` 
export const Caja2 = styled.div`
    height: 600px;
    width: 325px;
    padding-left: 20px;
    background-color: green;
    @media (max-width: 920px)and (max-height: 850px){
        height: 650px;
        width: 366px;
        padding-left: 20px;
    }
    `
export const Parrafo1 = styled.p`
    font-size: 15px;
    font-style: italic;
`
export const Input = styled.input`
    height: 35px;
    width: 300px;
    font-size: 17px;
    outline: none;
    background-color: black;
    @media (max-width: 920px)and (max-height: 850px){
        height: 35px;
        width: 350px;
        font-size: 17px;
        outline: none;
        background-color: red;
    }
`

export const Caja3 = styled.div`
    height: 10%;
    width: 100%;
    display: flex;
    display: flex;
    align-items: normal;
    justify-content: space-evenly;
    align-items: center;
    right: auto;
    background-color: blue;
`

export const Boton1 = styled.button`
    background-color: #49a3db;
    color: white;
    width: 35%;
    height: 45%;
    border: none;
    border-radius: 2px;
    font-size: 14px; 
    cursor: pointer;

    &:hover {
        background-color: #3eabee76;
        color: gray;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
        }
`
export const Boton2 = styled.button`
        background-color: white;
    color: #00aaffcd;
    width: 35%;
    height: 45%;
    font-size: 14px;
    border: solid 1px gray;
    cursor: pointer;

    &:hover {
        background-color: #3eabee76;
        color: gray;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);}
`
export const ContainerInput = styled.div`
    height: 6.5%;
    width: 96%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: solid gray 1px ;
    outline: none;
    background-color: pink;
`

export const Select = styled.select`
    width: 97%;
    height: 7%;
    border: solid 1px gray;
    background-color: gray;
    
    `