    import styled from 'styled-components';

export const FormContainer = styled.div`
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    width: 400px;
    margin: 0 auto;
    text-align: center;
    `;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    label {
        font-weight: bold;
    }

    input[type='text'],
    input[type='email'],
    input[type='number'] {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
    }

    input[type='text']:focus,
    input[type='email']:focus,
    input[type='number']:focus {
        outline: none;
        border: 1px solid #5acae6;
    }

    select {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
    }

    select:focus {
        outline: none;
        border: 1px solid #5acae6;
    }

    button {
        background-color: #5acae6;
        color: #fff;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        font-size: 18px;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
        background-color: #4aa1c0;
    }
}`;

