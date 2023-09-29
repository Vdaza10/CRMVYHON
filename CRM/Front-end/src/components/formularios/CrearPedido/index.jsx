import React, { useState } from "react";
import axios from "axios";
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

      // Enviar los datos a la base de datos usando la API
      const response = await axios.post(`${process.env.REACT_APP_URL_BACKEND}/pedidos`, {
        cliente: cliente,
        monto: monto,
        fecha: fecha,
      });

      // Obtener la nueva tarea creada desde la respuesta de la API
      const nuevaTarea = response.data;

      // Llamar a la función proporcionada por las propiedades para pasar la nueva tarea a Pedidos
      onTaskCreated(nuevaTarea);

      // Restablecer los campos del formulario después de enviar los datos
      setCliente('');
      setMonto('');

      // Aquí puedes manejar cualquier lógica adicional después de enviar los datos
      console.log('Datos enviados correctamente.');
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      // Aquí puedes manejar errores de envío, como mostrar un mensaje de error al usuario
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
