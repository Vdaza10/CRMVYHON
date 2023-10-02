import styled from "styled-components";

export const PanelControl = styled.div`
  width: 20%;
  height: 100%;
  flex-direction: column;
  display: flex;
  background-color: #c7c5c5;
`;

export const ContenedorComponents = styled.div`
  width: auto;
  height: 100%;
  display: flex;
`;
export const ContenedorVisual = styled.div`
  height: 100%;
  width: 100%;
  background-color: #666464;
  display: flex;
`;

export const Enlace = styled.a`
  display: block;
  text-decoration: none;
  color: #333;
  &:hover {
    text-decoration: underline;
    color: #0747f7;
    cursor: pointer;
  }
`;
export const Modulo = styled.div`
  width: 80%;
  font-size: 20px;
  margin-top: 15px;
  display: flex;
  cursor: pointer;
`;

export const Submodulo = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
  flex-direction: column;
`;
