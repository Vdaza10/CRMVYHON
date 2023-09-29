/* import React, { useState, useEffect } from "react";
import {
  KanbanContainer,
  KanbanTable,
  KanbanHeader,
  KanbanColumn,
  KanbanCard,
  CardData,
  CardHead
} from "./style.jsx";
import FormularioPedido from "../../../formularios/CrearPedido/index.jsx";
import axios from "axios";

const Pedidos = () => {
  const [showForm, setShowForm] = useState(false);
  const [pedidos, setPedidos] = useState({
    porHacer: [],
    enProgreso: [],
    completado: []
  });

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const createCard = async () => {
    try {
      const response = await axios.get("http://localhost:3005/pedidos");
      setPedidos({
        porHacer: response.data,
        enProgreso: [],
        completado: []
      });
    } catch (error) {
      console.error("Error al obtener pedidos:", error);
    }
  };

  useEffect(() => {
    createCard();
  }, []);

  return (
    <KanbanContainer>
      <h2>Kanban View</h2>
      <button onClick={toggleForm}>
        {showForm ? "Ocultar Formulario" : "Mostrar Formulario"}
      </button>
      <KanbanTable>
        <KanbanHeader>
          <tr>
            <th>Por Hacer</th>
            <th>En Progreso</th>
            <th>Completado</th>
          </tr>
        </KanbanHeader>
        <tbody>
          <tr>
            <KanbanColumn>
              <div className="kanban-column">
                {pedidos.porHacer.map((pedido) => (
                  <KanbanCard key={pedido.id}>
                    <CardHead>{pedido.cliente}</CardHead>
                    <CardData>cliente {pedido.cliente}</CardData>
                    <CardData>monto {pedido.monto}</CardData>
                    <CardData>fecha {pedido.fecha}</CardData>
                  </KanbanCard>
                ))}
              </div>
            </KanbanColumn>
            <KanbanColumn>
              <div className="kanban-column">
                {pedidos.enProgreso.map((pedido) => (
                  <KanbanCard key={pedido.id}>
                    <CardHead>{pedido.cliente}</CardHead>
                    <CardData>cliente {pedido.cliente}</CardData>
                    <CardData>monto {pedido.monto}</CardData>
                    <CardData>fecha {pedido.fecha}</CardData>
                  </KanbanCard>
                ))}
              </div>
            </KanbanColumn>
            <KanbanColumn>
              <div className="kanban-column">
                {pedidos.completado.map((pedido) => (
                  <KanbanCard key={pedido.id}>
                    <CardHead>{pedido.cliente}</CardHead>
                    <CardData>cliente {pedido.cliente}</CardData>
                    <CardData>monto {pedido.monto}</CardData>
                    <CardData>fecha {pedido.fecha}</CardData>
                  </KanbanCard>
                ))}
              </div>
            </KanbanColumn>
          </tr>
        </tbody>
      </KanbanTable>
      {showForm && <FormularioPedido />}
    </KanbanContainer>
  );
};

export default Pedidos; */

import React, { useState } from 'react';
import { Column, Container, Task } from './style';
import Menu from '../../menu/principal';
import FormularioPedido from '../../../formularios/CrearPedido';


const Pedidos = () => {
  const initialTasks = {
    todo: ['Tarea 1', 'Tarea 2', 'Tarea 3'],
    inProgress: ['Tarea 4', 'Tarea 5'],
    done: ['Tarea 6']
  };
  const [tasks, setTasks] = useState(initialTasks);
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleDragStart = (event, taskType, taskIndex) => {
    event.dataTransfer.setData('taskType', taskType);
    event.dataTransfer.setData('taskIndex', taskIndex);
  };

  const handleDrop = (event, targetTaskType) => {
    const sourceTaskType = event.dataTransfer.getData('taskType');
    const sourceTaskIndex = event.dataTransfer.getData('taskIndex');

    const updatedTasks = { ...tasks };
    updatedTasks[sourceTaskType].splice(sourceTaskIndex, 1);
    updatedTasks[targetTaskType] = [...updatedTasks[targetTaskType], tasks[sourceTaskType][sourceTaskIndex]];

    setTasks(updatedTasks);
  };

  return (
    <>
    <Menu></Menu>
    <button onClick={toggleForm}>
        {showForm ? 'Ocultar Formulario' : 'Mostrar Formulario'}
      </button>
      {showForm && <FormularioPedido/>}
    <Container>
      <Column onDrop={(event) => handleDrop(event, 'todo')} onDragOver={(event) => event.preventDefault()}>
        <h2>Por hacer</h2>
        {tasks.todo.map((task, index) => (
          <Task key={index} draggable onDragStart={(event) => handleDragStart(event, 'todo', index)}>
            {task}
          </Task>
        ))}
      </Column>
      <Column onDrop={(event) => handleDrop(event, 'inProgress')} onDragOver={(event) => event.preventDefault()}>
        <h2>En progreso</h2>
        {tasks.inProgress.map((task, index) => (
          <Task key={index} draggable onDragStart={(event) => handleDragStart(event, 'inProgress', index)}>
            {task}
          </Task>
        ))}
      </Column>
      <Column onDrop={(event) => handleDrop(event, 'done')} onDragOver={(event) => event.preventDefault()}>
        <h2>Hecho</h2>
        {tasks.done.map((task, index) => (
          <Task key={index} draggable onDragStart={(event) => handleDragStart(event, 'done', index)}>
            {task}
          </Task>
        ))}
      </Column>
    </Container>
    </>
  );
};

export default Pedidos;
