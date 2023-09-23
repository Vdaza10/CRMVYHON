import React, { useState } from "react";
import Menu from "../menu/principal";
import { AddPedido, AdminPedido, BodyData, ContArrow, EstadoPedido, HeadData, ListView, MontoData, PedidoData, StateData, TablePedidos } from "./style";
import { MdAdd } from 'react-icons/md';
import FormularioPedido from "../CrearPedido";

const Pedidos = () => {
    const [showForm, setShowForm] = useState(false);
    const [selectedPedido, setSelectedPedido] = useState(null);

    const toggleForm = (pedido) => {
        if (showForm && selectedPedido === pedido) {
        setShowForm(false);
        setSelectedPedido(null);
        } else {
        setShowForm(true);
        setSelectedPedido(pedido);
        }
    };

    return (
        <>
        <Menu />
        <AdminPedido>
            <EstadoPedido>
            <ContArrow><StateData>h</StateData></ContArrow>
            <ContArrow><StateData>g</StateData></ContArrow>
            <ContArrow><StateData>j</StateData></ContArrow>
            <ContArrow><StateData>k</StateData></ContArrow>
            </EstadoPedido>

            <TablePedidos>
            <PedidoData>
                <HeadData>
                <MontoData></MontoData>
                <AddPedido onClick={() => toggleForm(1)}>
                    <MdAdd style={{ fontSize: "20px" }} /> oscar1
                </AddPedido>
                </HeadData>
                <BodyData>
                <ListView></ListView>
                </BodyData>
                {showForm && selectedPedido === 1 && <FormularioPedido />}
            </PedidoData>

            <PedidoData>
                <HeadData>
                <MontoData></MontoData>
                <AddPedido onClick={() => toggleForm(2)}>
                    <MdAdd style={{ fontSize: "20px" }} /> oscar2
                </AddPedido>
                </HeadData>
                <BodyData>
                <ListView></ListView>
                </BodyData>
                {showForm && selectedPedido === 2 && <FormularioPedido />}
            </PedidoData>

            <PedidoData>
                <HeadData>
                <MontoData></MontoData>
                <AddPedido onClick={() => toggleForm(3)}>
                    <MdAdd style={{ fontSize: "20px" }} /> oscar3
                </AddPedido>
                </HeadData>
                <BodyData>
                <ListView></ListView>
                </BodyData>
                {showForm && selectedPedido === 3 && <FormularioPedido />}
            </PedidoData>

            <PedidoData>
                <HeadData>
                <MontoData></MontoData>
                <AddPedido onClick={() => toggleForm(4)}>
                    <MdAdd style={{ fontSize: "20px" }} /> oscar4
                </AddPedido>
                </HeadData>
                <BodyData>
                <ListView></ListView>
                </BodyData>
                {showForm && selectedPedido === 4 && <FormularioPedido />}
            </PedidoData>

            {/* Agrega más elementos PedidoData aquí */}
            </TablePedidos>
        </AdminPedido>
        </>
    );
};

export default Pedidos;