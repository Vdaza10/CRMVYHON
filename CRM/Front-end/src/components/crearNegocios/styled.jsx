import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    height: 89vh;
    width: 30vh;
    top: 97px;
    right: 70px;
    background-color: white;
`;
export const Principal = styled.div`
    height: 100%; 
    width: 123%;
    background-color: white;
    /* background-color: aqua; */
    border: solid 1px black;
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
`
export const Img = styled.img`
    height: 30px;
    width: 30px;
    padding-right: 30px;
    cursor: pointer;
` 
export const Caja2 = styled.div`
    height: 75%;
    padding-left: 20px;
`
export const Parrafo1 = styled.p`
    font-size: 15px;
    font-style: italic;
`
export const Input = styled.input`
    height: 5%;
    width: 90%;
    font-size: 17px;
    outline: none;
`
export const Select = styled.select`
    background-color: #ffffff;
    height: 6%;
    width: 92%;
    font-size: 17px;
    font-style: italic;
    color: gray;
    border: solid 1px gray;
    outline: none;
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
`

export const Boton1 = styled.button`
    background-color: #49a3db;
    color: white;
    width: 35%;
    height: 45%;
    border: none;
    border-radius: 2px;
    font-size: 15px; 
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
    color: #49a3db;
    width: 32%;
    height: 45%;
    font-size: 15px; 
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