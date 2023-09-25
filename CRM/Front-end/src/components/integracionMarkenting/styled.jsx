import styled from "styled-components";

export const Container= styled.div`
    height: 70vh;
`;

export const Principal = styled.div`
    height: 100%;
    width: 100%;
    margin-top: 30px;
`
export const Div1= styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: column;
`
export const Parrafo = styled.div`
    font-size: 18px;
    margin-left: 15%;
    font-style: italic;
    display: flex;
    text-align: center;
`

export const Div2= styled.div`
    width: 100%;
    height: 50%;
    margin-top: 30px;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-direction: column;
`

export const Imagen = styled.img`
    height: 50%;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
`
export const Div3 = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
`
export const Boton1 = styled.button`
    background-color: #3eabee;
    color: white;
    width: 15%;
    height: 30%;
    border: none;
    margin-right: 30px;
    font-size: 16px; 
    cursor: pointer;

    &:hover {
        background-color: #3eaaee93;
        color: black;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
        }
`
export const Boton2 = styled.button`
    background-color: white;
    color: #3eaaee93;
    width: 10%;
    height: 30%;
    border: solid 1px gray;
    border-radius: 2px;
    font-size: 16px; 
    cursor: pointer;

    &:hover {
        background-color: #3eaaee93;
        color: gray;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
        }
`