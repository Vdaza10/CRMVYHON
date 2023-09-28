import React, { useState } from "react";
import {
    KanbanContainer, 
    KanbanTable, 
    KanbanHeader, 
    KanbanColumn, 
    KanbanCard} 
    from "./style.jsx"
import FormularioPedido from "../../../formularios/CrearPedido/index.jsx";


const Pedidos = () => {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

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
                                <KanbanCard>Tarea 1</KanbanCard>
                                <KanbanCard>Tarea 2</KanbanCard>
                            </div>
                        </KanbanColumn>
                        <KanbanColumn>
                            <div className="kanban-column">
                                <KanbanCard>Tarea 3</KanbanCard>
                                <KanbanCard>Tarea 4</KanbanCard>
                            </div>
                        </KanbanColumn>
                        <KanbanColumn>
                            <div className="kanban-column">
                                <KanbanCard>Tarea 5</KanbanCard>
                                <KanbanCard>Tarea 6</KanbanCard>
                            </div>
                        </KanbanColumn>
                    </tr>
                </tbody>
            </KanbanTable>
            {showForm && <FormularioPedido />}
        </KanbanContainer>
    );
};

export default Pedidos;
