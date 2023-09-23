/* import React, { useEffect, useState } from "react";
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
import PedidoCard from "../PedidosCard/index.jsx";
import axios from "axios";
import FormularioPedido from "../CrearPedido/index";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";

const Pedidos = () => {
  const [orders, setOrders] = useState([[], [], [], []]);
  const [openFormIndex, setOpenFormIndex] = useState(null);
  const [cardPedidos, setCardPedidos] = useState([]);
  const [columnPositions, setColumnPositions] = useState([]);

  const toggleForm = (index) => {
    if (openFormIndex === index) {
      setOpenFormIndex(null);
    } else {
      setOpenFormIndex(index);
    }
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }const sourceIndex = result.source.index;
const destinationIndex = result.destination.index;
const sourceColumnIndex = parseInt(
  result.source.droppableId.split("-")[1],
  10
);
const destinationColumnIndex = parseInt(
  result.destination.droppableId.split("-")[1],
  10
);

if (
  isNaN(sourceColumnIndex) ||
  isNaN(destinationColumnIndex) ||
  sourceColumnIndex < 0 ||
  sourceColumnIndex >= orders.length ||
  destinationColumnIndex < 0 ||
  destinationColumnIndex >= orders.length
) {
  return;
}

const movedPedido = orders[sourceColumnIndex][sourceIndex];
const newSourceColumn = [...orders[sourceColumnIndex]];
newSourceColumn.splice(sourceIndex, 1);

const newDestinationColumn = [...orders[destinationColumnIndex]];
newDestinationColumn.splice(destinationIndex, 0, movedPedido);

const newOrders = [...orders];
newOrders[sourceColumnIndex] = newSourceColumn;
newOrders[destinationColumnIndex] = newDestinationColumn;

setOrders(newOrders);
setColumnPositions([...columnPositions, destinationColumnIndex]);
  };

  const addCardPedido = (cliente, producto, monto, fecha, columna) => {
    const newCardPedido = {
      cliente,
      producto,
      monto,
      fecha,
      columna,
    };
    setCardPedidos([...cardPedidos, newCardPedido]);
  };

  const getDataPedido = async () => {
    try {
      const response = await axios.get("http://localhost:3005/pedidos", {});
      const loadedOrders = [[], [], [], []];
      response.data.forEach((pedido) => {
        if (pedido.Columna >= 1 && pedido.Columna <= 4) {
          loadedOrders[pedido.Columna - 1].push(pedido);
        }
      });
      setOrders(loadedOrders);
      console.log(loadedOrders, "orders");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDataPedido();
  }, []);

  const orderbyColumns = (i) => {
    const orderColumn = orders[i];
    return orderColumn.map((pedido, index) => {
      const draggableId = `pedido-${pedido.idPedido}`;
      return (
        <Draggable key={draggableId} draggableId={draggableId} index={index}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <ListView>
                <PedidoCard
                  cliente={pedido.cliente}
                  producto={pedido.producto}
                  monto={pedido.monto}
                  fecha={pedido.fecha}
                  columna={i}
                />
              </ListView>
            </div>
          )}
        </Draggable>
      );
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <>
        <Menu />
        <AdminPedido>
          <EstadoPedido>
            {[0, 1, 2, 3].map((_, index) => (
              <ContArrow key={index}>
                <StateData className="letras">creación</StateData>
              </ContArrow>
            ))}
          </EstadoPedido>
          <TablePedidos>
            {[0, 1, 2, 3].map((index) => (
              <PedidoData key={index}>
                <HeadData>
                  <MontoData></MontoData>
                  <AddPedido onClick={() => toggleForm(index)}>
                    <MdAdd style={{ fontSize: "20px" }} />
                  </AddPedido>
                </HeadData>
                <Droppable
                  droppableId={`table-${uuidv4()}`}
                  key={index}
                  type="LISTVIEW"
                >
                  {(provided, snapshot) => (
                    <BodyData
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      isDraggingOver={snapshot.isDraggingOver}
                    >
                      {orderbyColumns(index)}
                      {provided.placeholder}
                    </BodyData>
                  )}
                </Droppable>
                {openFormIndex === index && (
                  <FormularioPedido
                    isOpen={true}
                    columna={index}
                    addCardPedido={addCardPedido}
                  />
                )}
              </PedidoData>
            ))}
          </TablePedidos>
        </AdminPedido>
      </>
    </DragDropContext>
  );
};

export default Pedidos; */