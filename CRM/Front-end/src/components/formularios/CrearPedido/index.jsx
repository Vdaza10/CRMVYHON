import React, { useState } from 'react';
import axios from 'axios';
import { Button, Div, FormGroup, FormularioContainer, Input, Label } from './style.jsx';


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
      const fecha = new Date().toISOString().slice(0, 10);
      const nuevaTarea = {
        cliente: cliente,
        monto: monto,
        fecha: fecha,
      };

      // Enviar la nueva tarea a la base de datos mediante una solicitud POST
      const response = await axios.post(`${process.env.REACT_APP_URL_BACKEND}/pedidos`, nuevaTarea);
      const createdTask = response.data;
      onTaskCreated(createdTask);
      setCliente('');
      setMonto('');
      console.log('Tarea creada correctamente.');
    } catch (error) {
      console.error('Error al crear la tarea:', error);
    }
  };

  return (
    <FormularioContainer onSubmit={handleSubmit}>
      <FormGroup>
        <Div><Label>Cliente:</Label></Div>
        <Input type="text" value={cliente} onChange={handleClienteChange} required />
      </FormGroup>
      <FormGroup>
        <Div><Label>Monto:</Label></Div>
        <Input type="number" value={monto} onChange={handleMontoChange} required />
      </FormGroup>
      <Button type="submit">Enviar</Button>
    </FormularioContainer>
  );
};

export default FormularioPedido;