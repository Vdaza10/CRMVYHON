import styled from "styled-components";

export const Div = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff; /* Cambiado a verde oscuro */
`;

export const ButtonCont = styled.div`
  width: 90%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 90%;
  height: 80%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  justify-content: space-between;
`;

export const Column = styled.div`
  width: 24%;
  max-height: 100%;
  border-radius: 10px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  overflow-y: auto;
  ::-webkit-scrollbar {
    overflow: hidden;
  }
`;

export const H2 = styled.h2`
  font-size: 25px;
  border-bottom: solid #9e9c9c;
  text-align: center;
  margin: 5px;
`;

export const Task = styled.div`
  background-color: #4b6e5b; /* Cambiado a un tono más claro de verde */
  border: 1px solid #3a5240; /* Cambiado a un tono más oscuro de verde */
  border-radius: 5px;
  padding: 15px;
  cursor: pointer;
  &:hover {
    background-color: #5c8366; /* Cambiado a un tono más claro de verde en hover */
  }
  &:active {
    transform: translateY(-4px);
  }
`;

export const DeleteButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 15px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #ff3333;
    transform: scale(1.05);
  }
`;

export const Form = styled.form`
  width: 300px;
  background-color: #2e4739; /* Cambiado a verde oscuro */
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #3a5240; /* Cambiado a un tono más oscuro de verde */
  border-radius: 5px;
`;

export const FormButton = styled.button`
  width: 100%;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;
