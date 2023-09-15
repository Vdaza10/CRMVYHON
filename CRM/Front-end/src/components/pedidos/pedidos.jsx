import React, { useEffect, useState } from "react";
import Menu from "../menu/principal";
import {AddPedido, AdminPedido, BodyData, ContArrow, EstadoPedido, HeadData,ListView,MontoData,PedidoData,StateData,TablePedidos,
} from "./style";

import { MdAdd } from "react-icons/md";
import FormularioPedido from "../CrearPedido";
import PedidoCard from "../PedidosCard/index.jsx";
import axios from "axios";
//
const Pedidos = () => {
    const [orders, setOrders] = useState([]);
    const [showForms, setShowForms] = useState([false, false, false, false]);
    const [cardPedidos, setCardPedidos] = useState([]);

    const toggleForm = (index) => {
        const updatedForms = [...showForms];
        updatedForms[index] = !updatedForms[index];
        setShowForms(updatedForms);
    };

    const addCardPedido = (cliente, producto, monto, fecha, columna) => {
        const newCardPedido = {
            cliente,
            producto,
            monto,
            fecha,
            columna
        };
        setCardPedidos([...cardPedidos, newCardPedido]);
    };

    const getDataPedido = async () => {
        try {
            const response = await axios.get("http://localhost:3005/pedidos/", {
                //token, headers
            });
            setOrders(response.data);
            console.log(response.data, 'orders');
        } catch (error) {
            // Manejar errores aquí
        }
    };

    useEffect(() => {
        getDataPedido();
    }, []);

    const orderbyColumns = (i) => {
        const orderColumn = orders.filter((order) => order.Columna === i);
        return orderColumn.map((pedido, index) => (
            <ListView key={index}>
                <PedidoCard
                    cliente={pedido.cliente}
                    producto={pedido.producto}
                    monto={pedido.monto}
                    fecha={pedido.fecha}
                    columna={i}
                />
            </ListView>
        ));
    };

    //funcion kanban

    return (
        <>
            <Menu />
            <AdminPedido>
                <EstadoPedido>
                    {[1, 2, 3, 4].map((_, index) => (
                        <ContArrow key={index}>
                            <StateData className="letras">creacion</StateData>
                        </ContArrow>
                    ))}
                </EstadoPedido>

                <TablePedidos>
                    {[1, 2, 3, 4].map((table, index) => (
                        <PedidoData key={index}>
                            <HeadData>
                                <MontoData></MontoData>

                                <AddPedido onClick={() => toggleForm(index)}>
                                    <MdAdd style={{ fontSize: "20px" }} />
                                </AddPedido>
                            </HeadData>

                            <BodyData>{orderbyColumns(table)}</BodyData>

                            {showForms[index] && (
                                <FormularioPedido
                                    isOpen={showForms[index]}
                                    columna={index}
                                    addCardPedido={addCardPedido}
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
