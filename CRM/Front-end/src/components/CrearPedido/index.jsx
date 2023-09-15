import React, { useState } from "react";
import { FormContainer, FormGroup, Label, Input, Select, ConvertButton, ButtonState, CloseOpen } from "./style";
import axios from "axios";

const FormularioPedido = (props) => {
    const [cliente, setCliente] = useState("");
    const [producto, setProducto] = useState("");
    const [monto, setMonto] = useState("");
    const [moneda, setMoneda] = useState("pesos");

    const getFechaActual = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, "0"); 
        const day = String(now.getDate()).padStart(2, "0"); 
        return `${year}-${month}-${day}`;
    };
    
    const getColumn = () => {
        const columna = props.columna + 1
        return columna
    }

    const createPedido = async (e) => {
        try {
            const fechaActual = getFechaActual();
            const columna = getColumn()
            const response = await axios.post("http://localhost:3005/pedidos", {
                cliente,
                producto,
                monto,
                columna: columna,
                fecha: fechaActual,
            });
            console.log("pedido creado:", response.data);
        } catch (error) {
            console.log("error al crear pedido:", error);
        }
        setTimeout(() => {
            window.location.href = "/pedidos";
        }, 0);
    };

    const handleConvert = () => {
        const tasaDolar = 0.045;

        if (moneda === "dolares") {
            const montoPesos = parseFloat(monto) / tasaDolar;
            setMonto(montoPesos.toFixed(2));
        } else if (moneda === "pesos") {
            const montoDolares = parseFloat(monto) * tasaDolar;
            setMonto(montoDolares.toFixed(2));
        }
    };

    return (
        <FormContainer>
            <FormGroup>
                <Label>cliente:</Label>
                <Input
                    type="text"
                    value={cliente}
                    onChange={(e) => setCliente(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Label>Producto:</Label>
                <Input
                    type="email"
                    value={producto}
                    onChange={(e) => setProducto(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Label>Costo:</Label>
                <Input
                    type="number"
                    value={monto}
                    onChange={(e) => setMonto(e.target.value)}
                />
                <Select
                    value={moneda}
                    onChange={(e) => setMoneda(e.target.value)}
                >
                    <option value="pesos">Pesos Colombianos</option>
                    <option value="dolares">Dólares</option>
                </Select>
                <ConvertButton onClick={handleConvert}>Convertir</ConvertButton>
            </FormGroup>
            <CloseOpen>
                <ButtonState onClick={createPedido}>crear pedido</ButtonState>
            </CloseOpen>
        </FormContainer>
    );
};

export default FormularioPedido;
