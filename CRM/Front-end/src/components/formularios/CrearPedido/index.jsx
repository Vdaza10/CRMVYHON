import React, { useState } from "react";
import { Button, FormGroup, FormularioContainer, Input, Label } from "./style.jsx";

const FormularioPedido = ({ onTaskCreated }) => {
    const [cliente, setCliente] = useState('');
    const [monto, setMonto] = useState('');

    const handleClienteChange = (event) => {
    setCliente(event.target.value);
    };

    const handleMontoChange = (event) => {
    setMonto(event.target.value);
    };

    const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Obtener la fecha actual en el formato deseado (año/mes/día)
        const fecha = new Date().toISOString().slice(0, 10);
        const nuevaTarea = {
        cliente: cliente,
        monto: monto,
        fecha: fecha,
        };
        onTaskCreated(nuevaTarea);
        setCliente('');
        setMonto('');
        console.log('Datos enviados correctamente.');
    } catch (error) {
        console.error('Error al enviar los datos:', error);
    }
    };

    return (
    <FormularioContainer onSubmit={handleSubmit}>
        <FormGroup>
            <Label>Cliente:</Label>
            <Input type="text" value={cliente} onChange={handleClienteChange} required />
        </FormGroup>
        <FormGroup>
            <Label>Monto:</Label>
            <Input type="number" value={monto} onChange={handleMontoChange} required />
        </FormGroup>
        <Button type="submit">Enviar</Button>
    </FormularioContainer>
    );
};

export default FormularioPedido;
