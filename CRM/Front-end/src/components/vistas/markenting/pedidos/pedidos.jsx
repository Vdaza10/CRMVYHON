import React, { useState } from 'react';
import { Column, Container, Task } from './style';
import FormularioPedido from '../../../formularios/CrearPedido';
import axios from 'axios';

const Pedidos = () => {
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || {
    todo: [],
    inProgress: [],
    done: [],
    newColumn: [],
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
    }
  };

  const handleTaskCreated = async (newTask) => {
    const createdTask = await createCard(newTask);
    // Agregar la nueva tarea a la columna 'Por hacer' y guardar el estado actual en el almacenamiento local
    const updatedTasks = { ...tasks, todo: [...tasks.todo, createdTask] };
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
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
              <div>{task.cliente}</div>
              <div>{task.monto}</div>
              <div>{task.fecha}</div>
            </Task>
          ))}
        </Column>
        <Column onDrop={(event) => handleDrop(event, 'inProgress')} onDragOver={(event) => event.preventDefault()}>
          <h2>En progreso</h2>
          {tasks.inProgress.map((task, index) => (
            <Task key={index} draggable onDragStart={(event) => handleDragStart(event, 'inProgress', index)}>
              <div>{task.cliente}</div>
              <div>{task.monto}</div>
              <div>{task.fecha}</div>
            </Task>
          ))}
        </Column>
        <Column onDrop={(event) => handleDrop(event, 'done')} onDragOver={(event) => event.preventDefault()}>
          <h2>Hecho</h2>
          {tasks.done.map((task, index) => (
            <Task key={index} draggable onDragStart={(event) => handleDragStart(event, 'done', index)}>
              <div>{task.cliente}</div>
              <div>{task.monto}</div>
              <div>{task.fecha}</div>
            </Task>
          ))}
        </Column>
        <Column onDrop={(event) => handleDrop(event, 'newColumn')} onDragOver={(event) => event.preventDefault()}>
          <h2>Nueva Columna</h2>
          {tasks.newColumn.map((task, index) => (
            <Task key={index} draggable onDragStart={(event) => handleDragStart(event, 'newColumn', index)}>
              <div>{task.cliente}</div>
              <div>{task.monto}</div>
              <div>{task.fecha}</div>
            </Task>
          ))}
        </Column> 
      </Container>
    </>
  );
};

export default Pedidos;
