import React, { useEffect, useState } from "react";
<<<<<<< HEAD:CRM/Front-end/src/components/pedidos/pedidos.jsx
import Menu from "../menu/principal";
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
import FormularioPedido from "../CrearPedido";
import PedidoCard from "../pedidoCard/pedidoCard.jsx";
=======
import Menu from "../../menu/principal";
import { AddPedido, AdminPedido, BodyData, ContArrow, EstadoPedido, HeadData, ListView, MontoData, PedidoData, StateData, TablePedidos } from "./style";
import { MdAdd } from "react-icons/md";
import FormularioPedido from "../../../formularios/CrearPedido"
import Card from "../pedidos/pedidoCard/pedidoCard"
>>>>>>> 5ce952246c90db9d0311d62e3822bc0d90326b61:CRM/Front-end/src/components/vistas/markenting/pedidos/pedidos.jsx
import axios from "axios";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Pedidos = () => {
    const [orders, setOrders] = useState([[], [], [], []]);
    const [showForms, setShowForms] = useState([false, false, false, false]);
<<<<<<< HEAD:CRM/Front-end/src/components/pedidos/pedidos.jsx
    const [cardPedidos, setCardPedidos] = useState([[], [], [], []]); // Usar matrices separadas para cada columna
=======
    const [cardPedidos, setCardPedidos] = useState([]);
    const titles = ["creacion", "negociacion", "confirmacion", "realizado"];
>>>>>>> 5ce952246c90db9d0311d62e3822bc0d90326b61:CRM/Front-end/src/components/vistas/markenting/pedidos/pedidos.jsx

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
        const response = await axios.get("http://localhost:3005/pedidos/", {});
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

<<<<<<< HEAD:CRM/Front-end/src/components/pedidos/pedidos.jsx
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
=======
        return orderColumn.map((pedido, index) => (
            <ListView key={index}>
                <Card
>>>>>>> 5ce952246c90db9d0311d62e3822bc0d90326b61:CRM/Front-end/src/components/vistas/markenting/pedidos/pedidos.jsx
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
<<<<<<< HEAD:CRM/Front-end/src/components/pedidos/pedidos.jsx
        <Menu />
        <AdminPedido>
            <EstadoPedido>
            {[1, 2, 3, 4].map((_, index) => (
                <ContArrow key={index}>
                <StateData className="letras">creacion</StateData>
                </ContArrow>
            ))}
            </EstadoPedido>
=======
            <Menu />
            <AdminPedido>
            <EstadoPedido>
    {titles.map((title, index) => (
        <ContArrow key={index}>
            <StateData className="letras">{title}</StateData>
        </ContArrow>
    ))}
</EstadoPedido>

>>>>>>> 5ce952246c90db9d0311d62e3822bc0d90326b61:CRM/Front-end/src/components/vistas/markenting/pedidos/pedidos.jsx

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
