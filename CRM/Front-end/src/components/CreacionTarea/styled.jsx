import styled from "styled-components";
import Select from "react-select";


export const Container = styled.div`
position: absolute;
    height: 90vh;
    width: 18%;
    top: 92px;
    right: 0px;
    display: flex; 
    justify-content: center; 
`;
export const Principal = styled.div`
    height: 100%;
    width: 100%;
    background-color: white;
    border: solid 1px black;
`
export const Caja1 = styled.div`
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Parrafo = styled.p`
    font-size: 18px;
    font-style: italic;
    display: flex;
    align-items: center;
    padding-left: 20px;
`
export const Img = styled.img`
    height: 30px;
    width: 30px;
    padding-right: 30px;
    cursor: pointer;
` 
export const Caja2 = styled.div`
    height: 75%;
    padding-left: 20px;
`
export const Parrafo1 = styled.p`
    font-size: 15px;
    font-style: italic;
`
export const Input = styled.input`
    height: 6%;
    width: 94%;
    font-size: 17px;
    outline: none;
`

export const Caja3 = styled.div`
    height: 10%;
    width: 100%;
    display: flex;
    display: flex;
    align-items: normal;
    justify-content: space-evenly;
    align-items: center;
    right: auto;
`

export const Boton1 = styled.button`
    background-color: #49a3db;
    color: white;
    width: 35%;
    height: 45%;
    border: none;
    border-radius: 2px;
    font-size: 14px; 
    cursor: pointer;

    &:hover {
        background-color: #3eabee76;
        color: gray;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
        }
`
export const Boton2 = styled.button`
        background-color: white;
    color: #00aaffcd;
    width: 35%;
    height: 45%;
    font-size: 14px;
    border: solid 1px gray;
    cursor: pointer;

    &:hover {
        background-color: #3eabee76;
        color: gray;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);}
`
export const ContainerInput = styled.div`
    height: 6.5%;
    width: 96%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: solid gray 1px ;
    outline: none;
`
    const options = [
        { value: '1', label: 'opción1' },
        { value: '2', label: 'opción2' },
        { value: '3', label: 'opción3' },
    ];
    
    export const ContactoSelect = () => (
        <div style={{height:"6%", width:"96%" , border:"solid gray 1px"}}>
            <Select
        placeholder="Seleccionar"
        options={options}
        styles={{
            control: (provided) => ({
            ...provided,
            // border: 'solid 1px gray',
            height: '110%',
            border:"none",
            fontSize:"17px",
            width: '100%', // Cambia la altura según tus necesidades
            // Otras propiedades de estilo
            }),
            // Puedes personalizar otros estilos aquí
        }}
        theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
            ...theme.colors,
            primary25: '#80808025',
            primary: 'black',
            },
        })}
        />
        </div>
    );
    
    export default ContactoSelect;