import React from "react";
import { CardCont, LineClient, DataClient, Data, ContentData, DataInfo, ContClient } from "./style";


export default function PedidoCard ({ cliente, producto, monto, fecha })  {
    return (
        <CardCont>

        <ContClient>
            <DataClient>Cliente: {cliente}</DataClient>
            <i class="fa-solid fa-circle-xmark"></i>
        </ContClient>

        <ContentData>
        <LineClient>
            <Data>Producto:</Data>
            <DataInfo>{producto}</DataInfo>
        </LineClient>

        <LineClient>
            <Data>Monto:</Data>
            <DataInfo>{monto}</DataInfo>
        </LineClient>

        <LineClient>
            <Data>Fecha:</Data>
            <DataInfo>{fecha}</DataInfo>

        </LineClient>
        </ContentData>
        </CardCont>
    );
};
