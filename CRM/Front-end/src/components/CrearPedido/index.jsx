import React, { useState } from "react";
import axios from "axios";
import {
    FormContainer,
    FormGroup,
    Label,
    Input,
    Select,
    ConvertButton,
    ButtonState,
    CloseOpen
    } from "./style";

    const FormularioPedido = () => {
    const [cliente, setCliente] = useState("");
    const [negocio, setNegocio] = useState("");
    const [monto, setMonto] = useState("");
    const [moneda, setMoneda] = useState("pesos");
    const [correo, setCorreo] = useState("");

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        const response = await axios.post("/pedidos", {
            cliente: cliente,
            producto: negocio,
            monto: monto,
            fecha: new Date(),
            columna: correo
        });

        console.log(response.data); // Puedes hacer algo con la respuesta si lo deseas

        // Restablecer los campos del formulario después de guardar los datos
        setCliente("");
        setNegocio("");
        setMonto("");
        setMoneda("pesos");
        setCorreo("");
        } catch (error) {
        console.error(error);
        }
    };

    return (
        <FormContainer onSubmit={handleSubmit}>
        <FormGroup>
            <Label>Cliente:</Label>
            <Input
            type="text"
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
            />
        </FormGroup>

        <FormGroup>
            <Label>Negocio:</Label>
            <Input
            type="text"
            value={negocio}
            onChange={(e) => setNegocio(e.target.value)}
            />
        </FormGroup>

        <FormGroup>
            <Label>Monto:</Label>
            <Input
            type="number"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            />
            <Select value={moneda} onChange={(e) => setMoneda(e.target.value)}>
            <option value="pesos">Pesos Colombianos</option>
            <option value="dolares">Dólares</option>
            </Select>

            <ConvertButton onClick={handleConvert}>Convertir</ConvertButton>
        </FormGroup>

        <FormGroup>
            <Label>Correo Electrónico:</Label>
            <Input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            />
        </FormGroup>

        <CloseOpen>
            <ButtonState type="submit">Guardar</ButtonState>
        </CloseOpen>
        </FormContainer>
    );
};

export default FormularioPedido;