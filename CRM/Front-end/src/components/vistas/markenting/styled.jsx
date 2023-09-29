import styled from "styled-components";

export const PanelControl = styled.div`
  background-color: #f0f0f0;
  width: 15%;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
`;

export const Contenido = styled.div`
  margin-left: 260px;
  padding: 20px;
`;

export const Enlace = styled.a`
  display: block;
  margin-bottom: 10px;
  text-decoration: none;
  color: #333;
  &:hover {
    text-decoration: underline;
  }
`;

export const Modulo = styled.div`
  font-size: 20px;
  cursor: pointer; /* Hacer que el módulo sea clicable */
`;

export const Submodulo = styled.div`
background-color: red;
`;
