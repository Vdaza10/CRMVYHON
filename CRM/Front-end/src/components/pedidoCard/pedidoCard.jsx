import React from "react";

const PedidoCard = ({ cliente, producto, monto, fecha }) => {
    return (
        <div style={{display:"flex",}}>
            <h3>Cliente: {cliente}</h3>
            <p>Producto: {producto}</p>
            <p>Monto: {monto}</p>
            <p>Fecha: {fecha}</p>
            <hr />
        </div>
    );
};

export default PedidoCard;