import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;

export const Column = styled.div`
  flex: 1;
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 15px;
  margin: 0 10px;
`;

export const Task = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
  cursor: pointer;
`;

