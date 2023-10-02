import React, { useState } from 'react';
import { Column, Container, Task } from './style';
import FormularioPedido from '../../../formularios/CrearPedido';
import axios from 'axios';

const Pedidos = () => {
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || {
    todo: [],
    enProgreso: [],
    vendido: [],
    cancelado: [],
  };

  const [tasks, setTasks] = useState(storedTasks);
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

    const movedTask = tasks[sourceTaskType][sourceTaskIndex];
    const updatedTasks = { ...tasks };
    updatedTasks[sourceTaskType].splice(sourceTaskIndex, 1);
    updatedTasks[targetTaskType].push(movedTask);

    setTasks(updatedTasks);
    // Guardar el estado actual de las tareas en el almacenamiento local
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const createCard = async (newTask) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_URL_BACKEND}/pedidos`, newTask);
      return response.data;
    } catch (error) {
      console.error('Error al crear la tarea:', error);
      return null;
    }
  };

  const handleTaskCreated = async (newTask, columnType) => {
    // Verificar si la nueva tarea tiene las propiedades necesarias
    if (newTask.cliente && newTask.monto && newTask.fecha) {
      const createdTask = await createCard(newTask);
      if (createdTask) {
        // Agregar la nueva tarea a la columna especificada y guardar el estado actual en el almacenamiento local
        const updatedTasks = { ...tasks, [columnType]: [...tasks[columnType], createdTask] };
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      } else {
        console.error('Error al crear la tarea');
      }
    } else {
      console.error('La nueva tarea no tiene todas las propiedades necesarias');
    }
  };

  return (
    <>
      <button onClick={toggleForm}>
        {showForm ? 'Ocultar Formulario' : 'Mostrar Formulario'}
      </button>
      {showForm && <FormularioPedido onTaskCreated={handleTaskCreated} />}
      <Container>
        <Column onDrop={(event) => handleDrop(event, 'todo')} onDragOver={(event) => event.preventDefault()}>
          <h2>Por hacer</h2>
          {tasks.todo.map((task, index) => (
            <Task key={index} draggable onDragStart={(event) => handleDragStart(event, 'todo', index)}>
              {task.cliente && task.monto && task.fecha && (
                <>
                  <div>{task.cliente}</div>
                  <div>{task.monto}</div>
                  <div>{task.fecha}</div>
                </>
              )}
            </Task>
          ))}
        </Column>
        <Column onDrop={(event) => handleDrop(event, 'enProgreso')} onDragOver={(event) => event.preventDefault()}>
          <h2>En progreso</h2>
          {tasks.enProgreso.map((task, index) => (
            <Task key={index} draggable onDragStart={(event) => handleDragStart(event, 'enProgreso', index)}>
              {task.cliente && task.monto && task.fecha && (
                <>
                  <div>{task.cliente}</div>
                  <div>{task.monto}</div>
                  <div>{task.fecha}</div>
                </>
              )}
            </Task>
          ))}
        </Column>
        <Column onDrop={(event) => handleDrop(event, 'vendido')} onDragOver={(event) => event.preventDefault()}>
          <h2>Vendido</h2>
          {tasks.vendido.map((task, index) => (
            <Task key={index} draggable onDragStart={(event) => handleDragStart(event, 'vendido', index)}>
              {task.cliente && task.monto && task.fecha && (
                <>
                  <div>{task.cliente}</div>
                  <div>{task.monto}</div>
                  <div>{task.fecha}</div>
                </>
              )}
            </Task>
          ))}
        </Column>
        <Column onDrop={(event) => handleDrop(event, 'cancelado')} onDragOver={(event) => event.preventDefault()}>
          <h2>Cancelado</h2>
          {tasks.cancelado.map((task, index) => (
            <Task key={index} draggable onDragStart={(event) => handleDragStart(event, 'cancelado', index)}>
              {task.newTask (
                <>
                  <div>{task.cliente}</div>
                  <div>{task.monto}</div>
                  <div>{task.fecha}</div>
                </>
              )}
            </Task>
          ))}
        </Column>
      </Container>
    </>
  );
};

export default Pedidos;
