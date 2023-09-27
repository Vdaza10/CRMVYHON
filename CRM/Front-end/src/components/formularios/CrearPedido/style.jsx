import styled from "styled-components";

export const FormContainer = styled.div`
    position: absolute;
    top: 37%;
    left: 20;
    width: 20%;
    max-height: ${(props) => (props.isOpen ? "80%" : "")};
    overflow: hidden;
    background-color: #4cf5cb;
    opacity: 90%;
    transition: max-height 0.5s ease-in-out;
    border: 1px solid #000000;
    border-radius: 5px;
`;

export const FormGroup = styled.div`
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Label = styled.label`
    display: block;
    margin-bottom: 5px;
`

export const Input = styled.input`
    width: 80%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`

export const Select = styled.select`
    width: 85%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`

export const ConvertButton = styled.button`
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`

export const CloseOpen = styled.div`
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    justify-content: space-evenly; 
`

export const ButtonState = styled.button`
    height: 80%;
    width: 25%;
    color: white;
    background-color: #007bff;
    border-radius: 5px;
    border: 0;
    cursor: pointer;
`

export const InputDate = styled.data`
    
` 