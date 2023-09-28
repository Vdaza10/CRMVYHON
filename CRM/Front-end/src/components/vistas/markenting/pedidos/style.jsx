import styled from "styled-components";

// Estilos para el componente Kanban
export const KanbanContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;

export const KanbanTable = styled.table`
    width: 80%;
    border-collapse: collapse;
    margin-top: 20px;
`;

export const KanbanHeader = styled.thead`
    background-color: #333;
    color: white;
`;

export const KanbanColumn = styled.td`
    padding: 10px;
    border: 1px solid #ccc;
`;

export const KanbanCard = styled.div`
    background-color: #f5f5f5;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
`;