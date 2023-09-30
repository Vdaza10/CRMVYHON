import styled from "styled-components";

export const PanelControl = styled.div`
  background-color: #f0f0f0;
  width: 15%;
  height: 80%;
  flex-direction: column;
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
  font-size: 20px;
  cursor: pointer; 
  display: flex;
`;

export const Submodulo = styled.div`
margin: 5px;

`;
