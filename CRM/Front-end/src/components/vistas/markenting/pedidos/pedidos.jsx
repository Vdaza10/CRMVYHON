import React, { useEffect, useState } from 'react';
import { Div, Column, Container, Task, ButtonCont, H2 } from './style';
import FormularioPedido from '../../../formularios/CrearPedido';
import axios from 'axios';

const Pedidos = () => {

  const [tasks, setTasks] = useState({
    todo: [],
    inProgress: [],
    done: [],
    newColumn: [],
  });
  
  const [, setLoading] = useState(true);
  
  const handleDragStart = (event, taskType, taskIndex) => {
    event.dataTransfer.setData('taskType', taskType);
    event.dataTransfer.setData('taskIndex', taskIndex);
  };

  const handleDrop = async (event, targetTaskType) => {
    const sourceTaskType = event.dataTransfer.getData('taskType');
    const sourceTaskIndex = event.dataTransfer.getData('taskIndex');

    const updatedTasks = { ...tasks };
    const movedTask = updatedTasks[sourceTaskType][sourceTaskIndex];

    updatedTasks[sourceTaskType].splice(sourceTaskIndex, 1);
    updatedTasks[targetTaskType].push(movedTask);

    setTasks(updatedTasks);

    localStorage.setItem('tasks_v7', JSON.stringify(updatedTasks));
  };

  const handleTaskCreated = async (newTaskData) => {
    try {
      const taskExists = tasks.todo.some((task) => task.id === newTaskData.id);

      if (!taskExists) {
        const updatedTasks = {
          ...tasks,
          todo: [...tasks.todo, newTaskData],
        };

        setTasks(updatedTasks);

        localStorage.setItem('tasks_v7', JSON.stringify(updatedTasks));
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

    localStorage.setItem('tasks_v7', JSON.stringify(updatedTasks));
  };
  useEffect(() => {
    const loadTasks = async () => {
      try {
        const savedTasks = JSON.parse(localStorage.getItem('tasks_v7'));

        if (savedTasks) {
          setTasks(savedTasks);
        } else {
          const response = await axios.get(`${process.env.REACT_APP_URL_BACKEND}/pedidos`);
          const tasksData = response.data;

          const categorizedTasks = {
            todo: tasksData.filter((task) => task.estado === 'cotizado'),
            inProgress: tasksData.filter((task) => task.estado === 'en progreso'),
            done: tasksData.filter((task) => task.estado === 'done'),
            newColumn: tasksData.filter((task) => task.estado === 'cancelado'),
          };

          setTasks(categorizedTasks);

          localStorage.setItem('tasks_v7', JSON.stringify(categorizedTasks));
        }
      } catch (error) {
        console.error('Error al obtener las tareas:', error);
      } finally {
        setLoading(false);
      }
    };
    loadTasks();
  }, []); //

  return (
    <Div>        
      <ButtonCont>
        {<FormularioPedido onTaskCreated={handleTaskCreated} />}
      </ButtonCont> 
      <Container>

        <Column onDrop={(event) => handleDrop(event, 'todo')} onDragOver={(event) => event.preventDefault()}>
          <H2>Por hacer</H2>
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
          <H2>En progreso</H2>
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
          <H2>Completados</H2>
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
          <H2>realizado</H2>
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
    </Div>
  );
};

export default Pedidos;
