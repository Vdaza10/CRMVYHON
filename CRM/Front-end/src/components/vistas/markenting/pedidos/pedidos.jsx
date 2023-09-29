import React, { useEffect, useState } from "react";

import {
    AddPedido,
    AdminPedido,
    BodyData,
    ContArrow,
    EstadoPedido,
    HeadData,
    ListView,
    MontoData,
    PedidoData,
    StateData,
    TablePedidos,
} from "./style";
import { MdAdd } from "react-icons/md";
import FormularioPedido from "../../../formularios/CrearPedido/index";
import PedidoCard from "./pedidoCard/pedidoCard.jsx";
import axios from "axios";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Pedidos = () => {
    const [orders, setOrders] = useState([[], [], [], []]);
    const [showForms, setShowForms] = useState([false, false, false, false]);
    const [cardPedidos, setCardPedidos] = useState([[], [], [], []]); // Usar matrices separadas para cada columna

    const toggleForm = (index) => {
        const updatedForms = [...showForms];
        for (let i = 0; i < updatedForms.length; i++) {
        updatedForms[i] = i === index ? !updatedForms[i] : false;
        }
        setShowForms(updatedForms);
    };

    // Modificar addCardPedido para que tome el índice de la columna como argumento
    const addCardPedido = (cliente, producto, monto, fecha, columnaIndex) => {
        const newCardPedido = {
        cliente,
        producto,
        monto,
        fecha,
        columna: columnaIndex, // Asigna el índice de la columna
        };

        // Agrega la nueva carta a la columna correspondiente en el estado
        const updatedCardPedidos = [...cardPedidos];
        updatedCardPedidos[columnaIndex].push(newCardPedido);

        setCardPedidos(updatedCardPedidos);
    };

    const getDataPedido = async () => {
        try {
        const response = await axios.get(`${process.env.REACT_APP_URL_BACKEND}/pedidos/`, {});
        const data = response.data.map((pedido, index) => ({
            ...pedido,
            id: index + 1, // Asignar un ID único basado en el índice
        }));
        setOrders(data);
        console.log(data, 'orders');
        } catch (error) {
        console.error(error);
        }
    };

    useEffect(() => {
        getDataPedido();
    }, []);

    const onDragEnd = (result) => {
        if (!result.destination) {
        return;
        }

        const sourceIndex = result.source.index;
        const destinationIndex = result.destination.index;

        const copiedOrders = [...orders];
        const copiedCardPedidos = [...cardPedidos];

        if (
        result.source.droppableId === "orders" &&
        result.destination.droppableId === "cardPedidos"
        ) {
        const draggedItem = copiedOrders[sourceIndex];
        copiedOrders.splice(sourceIndex, 1);
        copiedCardPedidos.splice(destinationIndex, 0, draggedItem);
        } else if (
        result.source.droppableId === "cardPedidos" &&
        result.destination.droppableId === "orders"
        ) {
        const draggedItem = copiedCardPedidos[sourceIndex];
        copiedCardPedidos.splice(sourceIndex, 1);
        copiedOrders.splice(destinationIndex, 0, draggedItem);
        }

        setOrders(copiedOrders);
        setCardPedidos(copiedCardPedidos);
    };

    const renderPedido = (pedido, index, isCardPedido, columnIndex) => (
        <Draggable
            key={pedido.id}
            draggableId={`${pedido.id}-${columnIndex}`}
            index={index}
            >
            {(provided, snapshot) => (
                <ListView
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                isDragging={snapshot.isDragging}
                >
                <PedidoCard
                    cliente={pedido.cliente}
                    producto={pedido.producto}
                    monto={pedido.monto}
                    fecha={pedido.fecha}
                    columna={columnIndex}
                />
                </ListView>
            )}
            </Draggable>
        );


    return (
        <>
        <AdminPedido>
            <EstadoPedido>
            {[1, 2, 3, 4].map((_, index) => (
                <ContArrow key={index}>
                <StateData className="letras">creacion</StateData>
                </ContArrow>
            ))}
            </EstadoPedido>

            <DragDropContext onDragEnd={onDragEnd}>
            <TablePedidos>
                {[1, 2, 3, 4].map((table, index) => (
                <PedidoData key={table}>
                    <HeadData>
                    <MontoData></MontoData>
                    <AddPedido onClick={() => toggleForm(index)}>
                        <MdAdd style={{ fontSize: "20px" }} />
                    </AddPedido>
                    </HeadData>

                    <Droppable
                        droppableId={`droppable-${table}-${index}`}
                        key={table}
                    type="LISTVIEW">
                    {(provided, snapshot) => (
                        <BodyData
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                        >
                        {orders
                            .filter((pedido) => pedido.columna === table)
                            .map((pedido, index) =>
                            renderPedido(pedido, index, false, table)
                            )}
                        {cardPedidos
                            .filter((pedido) => pedido.columna === table)
                            .map((pedido, index) =>
                            renderPedido(pedido, index, true, table)
                            )}
                        {provided.placeholder}
                        </BodyData>
                    )}
                    </Droppable>
                    {showForms[index] && (
                    <FormularioPedido
                        isOpen={showForms[index]}
                        columna={index} // Pasa el índice de la columna
                        addCardPedido={addCardPedido}
                    />
                    )}
                </PedidoData>
                ))}
            </TablePedidos>
            </DragDropContext>
        </AdminPedido>
        </>
    );
};

export default Pedidos;
