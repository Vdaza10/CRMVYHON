import React, { useState } from "react";
import Menu from "../menu/principal.jsx";
import { AddPedido, AdminPedido, BodyData, ContArrow, EstadoPedido, HeadData, ListView, MontoData, PedidoData, StateData, TablePedidos } from "./style";
import { MdAdd } from 'react-icons/md';
import FormularioPedido from "../CrearPedido/index.jsx";
import Card from "../pedidoCard/pedidoCard.jsx";

const Pedidos = () => {
    const [showForm, setShowForm] = useState(false);
    const [selectedPedido, setSelectedPedido] = useState(null);
    const [cards, setCards] = useState([]); // Un estado para almacenar las tarjetas

    const toggleForm = (pedido) => {
        if (showForm && selectedPedido === pedido) {
            setShowForm(false);
            setSelectedPedido(null);
        } else {
            setShowForm(true);
            setSelectedPedido(pedido);
        }
    };

    // Función para agregar una tarjeta al arreglo de cards
    const addCard = (cardData) => {
        setCards([...cards, cardData]);
    };

    return (
        <>
            <Menu />
            <AdminPedido>
                <EstadoPedido>
                    <ContArrow><StateData>creacion</StateData></ContArrow>
                    <ContArrow><StateData>negociacion</StateData></ContArrow>
                    <ContArrow><StateData>vendido</StateData></ContArrow>
                    <ContArrow><StateData>finalizado</StateData></ContArrow>
                </EstadoPedido>

                <TablePedidos>
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            title={card.cliente}
                            content={card.producto}
                            footer={card.monto}
                        />
                    ))}

                    {/* Renderizar los botones de AddPedido */}
                    {[1, 2, 3, 4].map((pedido) => (
                        <PedidoData key={pedido}>
                            <HeadData>
                                <MontoData></MontoData>
                                <AddPedido onClick={() => toggleForm(pedido)}>
                                    <MdAdd style={{ fontSize: "20px" }} />
                                </AddPedido>
                            </HeadData>
                            <BodyData>
                                <ListView></ListView>
                            </BodyData>
                            {showForm && selectedPedido === pedido && (
                                <FormularioPedido
                                    onSave={addCard} // Pasar la función para agregar una tarjeta
                                />
                            )}
                        </PedidoData>
                    ))}
                </TablePedidos>
            </AdminPedido>
        </>
    );
};

export default Pedidos;
