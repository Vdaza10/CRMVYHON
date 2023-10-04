import React, { useEffect, useState } from 'react';
import { Div, Column, Container, Task, ButtonCont } from './style';
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
  const [loading, setLoading] = useState(true);

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
    updateTasksInLocalStorage(updatedTasks);
  };

  const updateTasksInLocalStorage = (updatedTasks) => {
    localStorage.setItem('tasks_v7', JSON.stringify(updatedTasks));
  };

  const handleTaskCreated = async (newTaskData) => {
    try {
      // Verificar si la tarea ya existe en la lista actual de tareas
      const taskExists = tasks.todo.some(task => task.id === newTaskData.id);

      if (!taskExists) {
        setTasks((prevTasks) => {
          return {
            ...prevTasks,
            todo: [...prevTasks.todo, newTaskData],
          };
        });

        updateTasksInLocalStorage((prevTasks) => {
          return {
            ...prevTasks,
            todo: [...prevTasks.todo, newTaskData],
          };
        });

        console.log('Tarea creada exitosamente:', newTaskData);
      } else {
        console.log('La tarea ya existe en la lista.');
      }
    } catch (error) {
      console.error('Error al crear la tarea:', error);
    }
  };

  const handleDeleteTask = (taskType, taskIndex) => {
    const updatedTasks = { ...tasks };
    updatedTasks[taskType].splice(taskIndex, 1);
    setTasks(updatedTasks);
    updateTasksInLocalStorage(updatedTasks);
  };

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const storedTasks = JSON.parse(localStorage.getItem('tasks_v7'));
        const initialTasks = storedTasks
          ? storedTasks
          : {
              todo: [],
              inProgress: [],
              done: [],
              newColumn: [],
            };

        const response = await axios.get(`${process.env.REACT_APP_URL_BACKEND}/pedidos`);
        const tasksData = response.data;

        const updatedTasks = {
          todo: [...initialTasks.todo, ...tasksData.filter(task => task.estado === 'todo')],
          inProgress: [...initialTasks.inProgress, ...tasksData.filter(task => task.estado === 'inProgress')],
          done: [...initialTasks.done, ...tasksData.filter(task => task.estado === 'done')],
          newColumn: [...initialTasks.newColumn, ...tasksData.filter(task => task.estado === 'newColumn')],
        };

        setTasks(updatedTasks);
        setLoading(false);
        updateTasksInLocalStorage(updatedTasks);

        console.log('Tareas cargadas:', updatedTasks);
      } catch (error) {
        console.error('Error al obtener las tareas:', error);
        setLoading(false);
      }
    };

    loadTasks();
  }, []);

  return (
    <Div>
      <Container>
        <Column onDrop={(event) => handleDrop(event, 'todo')} onDragOver={(event) => event.preventDefault()}>
          <h2>Por hacer</h2>
          {tasks?.todo && tasks?.todo.map((task, index) => (
            <Task key={index} draggable onDragStart={(event) => handleDragStart(event, 'todo', index)}>
              <div>{task?.cliente}</div>
              <div>{task?.monto}</div>
              <div>{task?.fecha}</div>
              <button onClick={() => handleDeleteTask('todo', index)}>Eliminar</button>
            </Task>
          ))}
        </Column>

        <Column onDrop={(event) => handleDrop(event, 'inProgress')} onDragOver={(event) => event.preventDefault()}>
          <h2>En progreso</h2>
          {tasks?.inProgress && tasks?.inProgress.map((task, index) => (
            <Task key={index} draggable onDragStart={(event) => handleDragStart(event, 'inProgress', index)}>
              <div>{task?.cliente}</div>
              <div>{task?.monto}</div>
              <div>{task?.fecha}</div>
              <button onClick={() => handleDeleteTask('inProgress', index)}>Eliminar</button>
            </Task>
          ))}
        </Column>

        <Column onDrop={(event) => handleDrop(event, 'done')} onDragOver={(event) => event.preventDefault()}>
          <h2>Completadas</h2>
          {tasks?.done && tasks?.done.map((task, index) => (
            <Task key={index} draggable onDragStart={(event) => handleDragStart(event, 'done', index)}>
              <div>{task?.cliente}</div>
              <div>{task?.monto}</div>
              <div>{task?.fecha}</div>
              <button onClick={() => handleDeleteTask('done', index)}>Eliminar</button>
            </Task>
          ))}
        </Column>

        <Column onDrop={(event) => handleDrop(event, 'newColumn')} onDragOver={(event) => event.preventDefault()}>
          <h2>Nueva columna</h2>
          {tasks?.newColumn && tasks?.newColumn.map((task, index) => (
            <Task key={index} draggable onDragStart={(event) => handleDragStart(event, 'newColumn', index)}>
              <div>{task?.cliente}</div>
              <div>{task?.monto}</div>
              <div>{task?.fecha}</div>
              <button onClick={() => handleDeleteTask('newColumn', index)}>Eliminar</button>
            </Task>
          ))}
        </Column>
      </Container>
      <ButtonCont>{loading && <p>Cargando tareas...</p>}
        <button onClick={toggleForm}>
        {showForm ? 'Ocultar Formulario' : 'Mostrar Formulario'}
        </button>
        {showForm && <FormularioPedido onTaskCreated={handleTaskCreated} />}
      </ButtonCont>
    </Div>
  );
};

export default Pedidos;
