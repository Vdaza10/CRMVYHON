import React, { useState } from "react";
import Menu from "../menu/principal";
import { AddPedido, AdminPedido, BodyData, ContArrow, EstadoPedido, HeadData, ListView, MontoData, PedidoData, StateData, TablePedidos, } from "./style";
import { MdAdd } from 'react-icons/md';
import FormularioPedido from "../CrearPedido";

const Pedidos = () => {
    const [showForm1, setShowForm1] = useState(false);
    const [showForm2, setShowForm2] = useState(false);
    const [showForm3, setShowForm3] = useState(false);
    const [showForm4, setShowForm4] = useState(false);

    const toggleForm1 = () => {
        setShowForm1(!showForm1);
    };
    const toggleForm2 = () => {
        setShowForm2(!showForm2);
    };
    const toggleForm3 = () => {
        setShowForm3(!showForm3);
    };
    const toggleForm4 = () => {
        setShowForm4(!showForm4);
    };

    return (
        <>
        <Menu />
        <AdminPedido> 
            <EstadoPedido>
                <ContArrow>
                    <StateData>h</StateData>
                </ContArrow>

                <ContArrow>
                    <StateData>g</StateData>
                </ContArrow>

                <ContArrow>
                    <StateData>j</StateData>
                </ContArrow>

                <ContArrow>
                    <StateData>k</StateData>
                </ContArrow>
            </EstadoPedido>

            <TablePedidos>
                <PedidoData>
                    <HeadData>
                        <MontoData></MontoData>

                        <AddPedido onClick={toggleForm1}>
                            <MdAdd style={{ fontSize: "20px" }} /> oscar1
                        </AddPedido>
                    </HeadData>

                    <BodyData>
                        <ListView></ListView>
                    </BodyData>

                    {showForm1 && <FormularioPedido isOpen={showForm1} />}
                </PedidoData>


                <PedidoData>
                    <HeadData>
                        <MontoData></MontoData>

                        <AddPedido onClick={toggleForm2}>
                            <MdAdd style={{ fontSize: "20px" }} /> oscar2
                        </AddPedido>
                    </HeadData>

                    <BodyData>
                        <ListView></ListView>
                    </BodyData>

                    {showForm2 && <FormularioPedido isOpen={showForm2} />}
                </PedidoData>

                <PedidoData>
                    <HeadData>
                        <MontoData></MontoData>

                        <AddPedido onClick={toggleForm3}>
                            <MdAdd style={{ fontSize: "20px" }} /> oscar3
                        </AddPedido>
                    </HeadData>

                    <BodyData>
                        <ListView></ListView>
                    </BodyData>

                    {showForm3 && <FormularioPedido isOpen={showForm3} />}
                </PedidoData>

                <PedidoData>
                    <HeadData>
                        <MontoData></MontoData>

                        <AddPedido onClick={toggleForm4}>
                            <MdAdd style={{ fontSize: "20px" }} /> oscar4
                        </AddPedido>
                    </HeadData>

                    <BodyData>
                        <ListView></ListView>
                    </BodyData>

                    {showForm4 && <FormularioPedido isOpen={showForm4} />}
                </PedidoData>
                {/* Los otros elementos PedidoData aquí */}
            </TablePedidos>
        </AdminPedido>
        </>
    );
};

export default Pedidos;
