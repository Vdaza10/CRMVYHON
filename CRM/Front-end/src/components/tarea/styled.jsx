    import styled from "styled-components";
    export const Container = styled.div`
    height: 75vh;
    width: 100%;
`;

    export const Select = styled.select`
    height: 40%;
    width: 20%;
    font-size: 17px;
    color: gray;
    font-style: italic;
    border: none;
    margin-right: 10px;
    `;
    export const Menudesplegable = styled.div`
    display: ${({ perfilDesplegable }) => (perfilDesplegable ? "block" : "none")};
    width: 130%;
    height: 350px;
    list-style: none;
    position: absolute;
    top: 130%;
    left: 105px;  
    padding: 0;
    border: 1px solid  gray;
    background-color: white;
`

    export const Caja1 = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    `;
    export const Parrafo = styled.p`
    font-size: 20px;
    font-style: italic;
    display: flex;
    text-align: center;
    `;

    export const Caja2 = styled.div`
    width: 100%;
    height: 750px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    `;
    export const Boton = styled.button`
    background-color: #3eabee;
    color: #eaeff1;
    width: 10%;
    height: 35px ;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    border: none;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background-color: #3eabee76;
        color: gray;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
    }
    `;
    export const IconContainer = styled.div`
    border: gray solid 1px;
    width: 13%;
    height: 35%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    cursor: pointer;
    `;

export const SelectParrafo = styled.div`
    color: gray;
    font-size: 15px;
    font-style: italic;
    cursor: pointer;
`
export const OpcionesParrafo = styled.li`
    margin-right: 10%;
    margin-left: 10%;
    cursor: pointer;
    &:last-child{
        margin-right: 20px;
    }
    &:hover{
        background-color:#3eaaee93;
        color: #333;
    }
`

export const SelectOpciones = styled.div`
    background-color: #0b2943;
    height: 2em;
    width: 2em;
    `
