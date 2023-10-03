import React, { useEffect, useState } from 'react';
import { Column, Container, Task } from './style';
import FormularioPedido from '../../../formularios/CrearPedido';
import axios from 'axios';

const Pedidos = () => {
  const [tasks, setTasks] = useState({
    todo: [],
    inProgress: [],
    done: [],
    newColumn: [],
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
      throw error; // Propagar el error para manejarlo en el componente que llama a createCard
    }
  };

  const handleTaskCreated = async (newTask) => {
    try {
      const createdTask = await createCard(newTask);

      // Agregar la nueva tarea a la columna 'Por hacer' y guardar el estado actual en el almacenamiento local
      const updatedTasks = { ...tasks, todo: [...tasks.todo, createdTask] };
      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));

      console.log('Tarea creada exitosamente:', createdTask);
    } catch (error) {
      console.error('Error al crear la tarea:', error);
      // Manejar el error aquí o dejar que el componente que llama a handleTaskCreated lo maneje
    }
  };

  const getTasks = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_URL_BACKEND}/pedidos`);
      const tasksData = response.data;
      console.log('Datos de las tareas obtenidas:', tasksData);
      setTasks(tasksData); // Actualizar el estado con las tareas obtenidas del servidor
    } catch (error) {
      console.error('Error al obtener las tareas:', error);
      // Manejar el error aquí o dejar que el componente que llama a getTasks lo maneje
    }
  };

  useEffect(() => {
    console.log('Obteniendo tareas...');
    getTasks();
  }, []); // Vacío para que se ejecute solo una vez al montar el componente

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
              <div>{task.pedidos?.cliente}</div>
              <div>{task.pedidos?.monto}</div>
              <div>{task.pedidos?.fecha}</div>
            </Task>
          ))}
        </Column>
        {/* Resto de las columnas */}
      </Container>
    </>
  );
};

export default Pedidos;
