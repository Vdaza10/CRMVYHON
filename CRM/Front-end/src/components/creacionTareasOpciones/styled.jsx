import styled from "styled-components";


export const Container = styled.div`
position: absolute;
height: 30%;
width: 10%;
border: solid gray 1px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: white;
margin-top: 17%;
`

export const Input = styled.input`
    height: 90%;
    width: 100%;
    font-size: 17px;
    border: none;
    margin-left: 5px;
`
export const ContainerInput= styled.div`
    height: 50%;
    width: 90%;
    border: solid 1px gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
`
export const Parrafo = styled.p`
font-size: 13px;
font-style: italic;
margin: 0%;
padding: 0%;
margin-top: 25px;
margin-left: 20px;
`;
export const Conteiner1 = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Conteiner2 = styled.div`
    width: 100%;
    height: 60%;
`
export const Checkbox = styled.input`
    width: 25px;
    height: 70%;
    margin-top: 5px;
    margin-left: 20px;
`
export const Caja = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    margin-top: 15px;
`
export const ParrafoCheckbox = styled.p`
font-size: 13px;
margin: 0;
padding: 0;
`
export const Boton1 = styled.button`
    background-color: #00A9FF;
    color: white;
    width: 30%;
    height: 50%;
    border: none;
    border-radius: 2px;
    margin-right: 20px;
    font-size: 12px; 
    cursor: pointer;

    &:hover {
        background-color: #0cdd5ff5;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
        }
`
export const Boton2 = styled.button`
    background-color: white;
    color: #00A9FF;
    width: 30%;
    height: 50%;
    border: solid 1px gray;
    border-radius: 2px;
    font-size: 12px; 
    cursor: pointer;

    &:hover {
        background-color: #0cdd5ff5;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
        }
`
export const Hr = styled.hr`
    width: 100%;
    border: solid gray 1px;
`