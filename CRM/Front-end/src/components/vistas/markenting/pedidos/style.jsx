import styled from "styled-components";

export const AdminPedido = styled.div`
    height: 90vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const EstadoPedido = styled.div`
    height: 8%;
    width: 98%;
    border-radius: 3px;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    background-color: #ffffff;
    background-color: red;
`

export const TablePedidos = styled.div`
    height: 100%;
    width: 98%;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
`

export const PedidoData = styled.div`
    height: 98%;
    width: 30%;
    border-radius: 3px;
    margin: 5px 5px 5px 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeadData = styled.div`
    height: 20%;
    width: 98%;
    border-radius: 3px;
    margin: 5px 5px 5px 5px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #ffffff;
`
export const BodyData = styled.div`
    position: relative;
    max-height: 80%;
    width: 96%;
    border-radius: 3px;
    margin: 5px 5px 5px 5px;
    background-color: #50bfff;
    overflow-y: auto;
    ::-webkit-scrollbar{
        display: none;
    }
`

export const MontoData = styled.div`
    height: 40%;
    width: 98%;
    border-radius: 3px;
    margin: 5px 5px 5px 5px;
    background-color: #50bfff;
`

export const AddPedido = styled.button`
    height: 40%;
    width: 98%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 5px 5px 5px 5px;
    background-color: #59dbfc;
    transition: background-color 0.3s ease;
    cursor: pointer;

    &:hover {
        background-color: #ffffff;
        border: solid #59dbfc;
    }

    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border: 0;
`

export const ListView = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;
    transition: all 0.1s ease;
`

export const ContArrow = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
`

export const StateData = styled.div`
    width: 414px;
    height: 60%;
    left: 10px;
    background-color: #50bfff;
    margin: 5px 5px 5px 5px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &.letras{
        font-size: large;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: white;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        right: -15px;
        width: 0;
        height: 2px;
        border-top: 15px solid transparent;
        border-bottom: 20px solid transparent; 
        border-left: 15px solid #50bfff;
    }
`


