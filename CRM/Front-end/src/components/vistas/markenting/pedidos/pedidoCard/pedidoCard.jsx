import React from "react";
import { CardContainer, CardDetail, CardTitle } from "./style.jsx"

const PedidoCard = ({ cliente, producto, monto, fecha }) => {
    return (
        <CardContainer>
            <CardTitle>Detalles del Pedido</CardTitle>
            <CardDetail><strong>Cliente:</strong> {cliente}</CardDetail>
            <CardDetail><strong>Monto:</strong> {monto}</CardDetail>
            <CardDetail><strong>Fecha:</strong> {fecha}</CardDetail>
        </CardContainer>
    );
};

export default PedidoCard;
