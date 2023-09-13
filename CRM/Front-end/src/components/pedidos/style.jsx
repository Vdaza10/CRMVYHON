import styled from "styled-components";

export const AdminPedido = styled.div`
    height: 100vh;
    width: 100%;
    background: linear-gradient(135deg, #ffffff, #ffffff);
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const EstadoPedido = styled.div`
    height: 5%;
    width: 98%;
    background-color: #ffffff;
    border-radius: 3px;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
`

export const TablePedidos = styled.div`
    height: 90%;
    width: 98%;
    background-color: #50bfff;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
`

export const PedidoData = styled.div`
    height: 98%;
    width: 30%;
    background-color: #ffffff;
    border-radius: 3px;
    margin: 5px 5px 5px 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    height: 80%;
    width: 98%;
    border-radius: 3px;
    margin: 5px 5px 5px 5px;
    background-color: #45ccee;
    overflow: hidden;
`;

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
    position: relative;
    border-radius: 5px;
    margin: 10px 10px 10px 10px;
    transition: all 0.1s ease;
    background-color: #67daee;
    border: solid white;
`

export const ContArrow = styled.div`
    height: 100%;
    width: 100%;
`

export const StateData = styled.div`
    width: 430px;
    height: 70%;
    background-color: #50bfff;
    margin: 5px 5px 5px 5px;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        right: -15px;
        width: 0;
        height: 0;
        border-top: 15px solid transparent;
        border-bottom: 20px solid transparent; 
        border-left: 15px solid #50bfff;
    }
`

export const Pedidocard = styled.div`
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    background-color: #fff;
`

