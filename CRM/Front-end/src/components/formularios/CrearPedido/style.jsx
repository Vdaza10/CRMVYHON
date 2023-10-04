import styled from 'styled-components';

export const FormularioContainer = styled.form`
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
`;

export const FormGroup = styled.div`
  width: 90%;
  height: 50%;
  display: flex;
  padding: 0;
  margin-left: -20px;
`;

export const Div = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Label = styled.h4`
  text-align: center;
  padding: 10px;
  font-size: 20px;
`;

export const Input = styled.input`
  border-radius: 5px;
  border: solid none;
  width: 50%;
`;

export const Button = styled.button`
  border-radius: 5px;
  border: none;
  height: 30px;
  width: 70px;
  background-color: green;
`;