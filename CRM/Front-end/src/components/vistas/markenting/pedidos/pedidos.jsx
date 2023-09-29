import React, { useState, useEffect } from 'react';
import { Column, Container, Task } from './style';
import FormularioPedido from '../../../formularios/CrearPedido';
import axios from 'axios';

const Pedidos = () => {
  const [tasks, setTasks] = useState({
    todo: [],
    inProgress: [],
    done: []
  });
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

    if (sourceTaskType === targetTaskType) {
      return;

      
    }
    
    const updatedTasks = { ...tasks };
    updatedTasks[sourceTaskType].splice(sourceTaskIndex, 1);
    updatedTasks[targetTaskType] = [...updatedTasks[targetTaskType], tasks[sourceTaskType][sourceTaskIndex]];
    
    setTasks(updatedTasks);
  };
  
  const createCard = async (newTask) => {
    try {
      const response = await axios.post('http://localhost:3005/pedidos', newTask);
      return response.data;
    } catch (error) {
      console.error('Error al crear la tarea:', error);
    }
  };

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:3005/pedidos');
      setTasks({
        todo: response.data,
        inProgress: [],
        done: []
      });
    } catch (error) {
      console.error('Error al obtener las tareas:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleTaskCreated = async (newTask) => {
    const createdTask = await createCard(newTask);
    setTasks({
      ...tasks,
      todo: [...tasks.todo, ...tasks.done ,createdTask]
    });
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
              {task.cliente}
            </Task>
          ))}
        </Column>
        <Column onDrop={(event) => handleDrop(event, 'inProgress')} onDragOver={(event) => event.preventDefault()}>
          <h2>En progreso</h2>
          {tasks.inProgress.map((task, index) => (
            <Task key={index} draggable onDragStart={(event) => handleDragStart(event, 'inProgress', index)}>
              {task.cliente}
            </Task>
          ))}
        </Column>
        <Column onDrop={(event) => handleDrop(event, 'done')} onDragOver={(event) => event.preventDefault()}>
          <h2>Hecho</h2>
          {tasks.done.map((task, index) => (
            <Task key={index} draggable onDragStart={(event) => handleDragStart(event, 'done', index)}>
              {task.cliente}
            </Task>
          ))}
        </Column>
      </Container>
    </>
  );
};

export default Pedidos;
