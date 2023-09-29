  import React, { useState, useEffect } from 'react';
  import { Column, Container, Task } from './style';
  import FormularioPedido from '../../../formularios/CrearPedido';
  import axios from 'axios';

  const Pedidos = () => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || {
      todo: [],
      inProgress: [],
      done: []
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

    const handleDrop = async (event, targetTaskType, targetIndex) => {
      const sourceTaskType = event.dataTransfer.getData('taskType');
      const sourceTaskIndex = event.dataTransfer.getData('taskIndex');
      
      if (sourceTaskType === targetTaskType && sourceTaskIndex === targetIndex) {
        return;
      }

      const updatedTasks = { ...tasks };
      const movedTask = updatedTasks[sourceTaskType][sourceTaskIndex];
      updatedTasks[sourceTaskType].splice(sourceTaskIndex, 1);
      updatedTasks[targetTaskType].splice(targetIndex, 0, movedTask);

      setTasks(updatedTasks);
    };

    const createCard = async (newTask) => {
      try {
        const response = await axios.post(`${process.env.REACT_APP_URL_BACKEND}/pedidos`, newTask);
        return response.data;
      } catch (error) {
        console.error('Error al crear la tarea:', error);
      }
    };

    const fetchTasks = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_URL_BACKEND}/pedidos`);
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
      // Guardar en el almacenamiento local cuando cambia el estado de las tareas
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
      fetchTasks();
    }, []);

    const handleTaskCreated = async (newTask) => {
      const createdTask = await createCard(newTask);
      setTasks((prevTasks) => ({
        ...prevTasks,
        todo: [...prevTasks.todo, createdTask]
      }));
    };

    return (
      <>
        <button onClick={toggleForm}>
          {showForm ? 'Ocultar Formulario' : 'Mostrar Formulario'}
        </button>
        {showForm && <FormularioPedido onTaskCreated={handleTaskCreated} />}
        <Container>
          <Column onDrop={(event) => handleDrop(event, 'todo', 0)} onDragOver={(event) => event.preventDefault()}>
            <h2>Por hacer</h2>
            {tasks.todo.map((task, index) => (
              <Task key={index} draggable onDragStart={(event) => handleDragStart(event, 'todo', index)}>
                <div>{task.cliente}</div>
                <div>{task.monto}</div>
                <div>{task.fecha}</div>
              </Task>
            ))}
          </Column>
          <Column onDrop={(event) => handleDrop(event, 'inProgress', 0)} onDragOver={(event) => event.preventDefault()}>
            <h2>En progreso</h2>
            {tasks.inProgress.map((task, index) => (
              <Task key={index} draggable onDragStart={(event) => handleDragStart(event, 'inProgress', index)}>
                <div>{task.cliente}</div>
                <div>{task.monto}</div>
                <div>{task.fecha}</div>
              </Task>
            ))}
          </Column>
          <Column onDrop={(event) => handleDrop(event, 'done', 0)} onDragOver={(event) => event.preventDefault()}>
            <h2>Hecho</h2>
            {tasks.done.map((task, index) => (
              <Task key={index} draggable onDragStart={(event) => handleDragStart(event, 'done', index)}>
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
