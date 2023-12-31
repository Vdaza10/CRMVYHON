import styled from "styled-components";


export const ContainerPrincipal = styled.div`
height: 90vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`;

export const Heder = styled.div`
    height: 15%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    h1{
        margin: 0;
        margin-left: 2%;
        margin-bottom: 15px;
        font-size: 30px;
        font-weight: 300;
        font-family: 'DM Sans', sans-serif;
    }
`

export const ContainerInput = styled.div`
    border-bottom: 1px solid gray;
    width: 12%;
    height: 40%;
    margin-right: 2%;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
`
export const Input = styled.input`
    height: 80%;
    width:80%;
    background-color: transparent;
    font-size: 18px;
    border: none;
    outline: none;
    margin-left: 15px;
`

export const HederTabla = styled.div`
    height: 8%;
    width: 90%;
    display: flex;
    border-bottom: 1px solid gray;
`
export const Caja1 = styled.div`
    height: 90%;
    width: 17%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Parrafo = styled.p`
    margin: 0;
    font-size: 18px;
    font-weight:500;
    margin-left: 7px;
` 

export const BodyTabla = styled.div`
    height: 8%;
    width: 90%;
    display: flex;
    border-bottom: 1px solid gray;
`

export const CajaIcono = styled.div`
    height: 100%;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: baseline;
    margin-left: 5%;
`
export const Logo = styled.img`
    height: 80%;
    width: 20%;
`;


export const FooterTabla = styled.div`
    height: 8%;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid gray;
`

export const Boton = styled.button`
background-color: #3eabee;
color: #eaeff1;
width: 10%;
height: 60% ;
display: flex;
align-items: center;
justify-content: center;
border-radius: 2px;
border: none;
font-size: 16px;
cursor: pointer;

&:hover {
    background-color: #3eabee76;
    color: gray;
}

&:focus {
    outline: none;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
}
`;