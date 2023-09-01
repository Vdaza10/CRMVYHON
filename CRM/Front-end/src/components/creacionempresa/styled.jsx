import styled from "styled-components";

import { useState } from "react";
import Select, { components } from "react-select";

// Componente personalizado para las opciones del Select
const InputOption = ({
  getStyles,
  Icon,
  isDisabled,
  isFocused,
  isSelected,
  children,
  innerProps,
  ...rest
}) => {
  const [isActive, setIsActive] = useState(false);
  // Funciones para gestionar el estado del checkbox
  const onMouseDown = () => setIsActive(true);
  const onMouseUp = () => setIsActive(false);
  const onMouseLeave = () => setIsActive(false);

  // Estilos condicionales para resaltar la opción seleccionada
  let bg = "transparent";
  if (isFocused) bg = "#eee";
  if (isActive) bg = "#0069f2";

  const style = {
    alignItems: "center",
    backgroundColor: bg,
    color: "inherit",
    display: "flex ",
  };

  //Propiedades del componente Option
  const props = {
    ...innerProps,
    onMouseDown,
    onMouseUp,
    onMouseLeave,
    style
  };

  return (
    <components.Option
      {...rest}
      isDisabled={isDisabled}
      isFocused={isFocused}
      isSelected={isSelected}
      getStyles={getStyles}
      innerProps={props}
    >
      <input type="checkbox" checked={isSelected} />
      {children}
    </components.Option>
  );
};
// Opciones para el Select
const allOptions = [
  { value: "option 1", label: "option 1" },
  { value: "option 2", label: "option 2" },
  { value: "option 3", label: "option 3" },
  { value: "option 4", label: "option 4" }
];
// Componente principal
export  function App() {
  // const [selectedOptions, setSelectedOptions] = useState([]);

  return (
    <div className="App" style={{width:"90%",height:"5.9%", outline: "none", fontSize:"17px" ,border:"solid gray 1px"}}>
      <Select
        defaultValue={[]}
        isMulti
        placeholder = 'Selecionar'
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        onChange={(options) => {
          if (Array.isArray(options)) {
            // setSelectedOptions(options.map((opt) => opt.value));
          }
        }}
        options={allOptions}
        components={{
          Option: InputOption
        }}
        theme={(theme) => ({
          ...theme,
          
          colors: {
            ...theme.colors,
            primary25: 'red',
            primary: 'black',
            },
          })}
      />
    </div>
  );
}

// Estilo para el contenedor principal
export const Div1 = styled.div`
position: absolute;
    height: 90vh;
    width: 18%;
    top: 92px;
    right: 0px;
    display: flex; 
    justify-content: center; 
`;
// Estilo para el contenedor que envuelve el contenido principal
export const Container1 = styled.div`
    height: 100%;
    width: 100%;
    background-color: white;
    border: solid 1px black;
`
// Estilo para una caja que contiene elementos
export const Caja = styled.div`
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
// Estilo para el párrafo
export const Parrafo = styled.p`
    font-size: 20px;
    font-style: italic;
    display: flex;
    align-items: center;
    padding-left: 20px;
`
// Estilo para la imagen
export const Img = styled.img`
    height: 30px;
    width: 30px;
    padding-right: 30px;
` 
// Estilo para otro párrafo
export const Parrafo1 = styled.p`
    font-size: 15px;
    font-style: italic;
`
// Estilo para una caja que contiene elementos (sección principal)
export const Caja1 = styled.div`
    height: 75%;
    width: 100%;
    padding-left: 20px;
`
// Estilo para el input
export const Input = styled.input`
    height: 5.5%;
    width: 90%;
    font-size: 17px;
    outline: none;
`
// Estilo para el área de texto
export const Area = styled.textarea`
    height: 20%;
    width: 90%;
    font-size: 17px;
    outline: none;
`
// Estilo para un botón de acción
export const Boton1 = styled.button`
    background-color: #49a3db;
    color: white;
    width: 35%;
    height: 40%;
    border: none;
    border-radius: 2px;
    font-size: 15px; 
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
// Estilo para otro botón de acción
export const Boton2 = styled.button`
    background-color: white;
    color: #49a3db;
    width: 25%;
    height: 40%;
    font-size: 15px; 
    border: solid 1px gray;
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
// Estilo para una caja que contiene elementos (sección de botones)
export const Caja2 = styled.div`
    height: 10%;
    width: 100%;
    display: flex;
    display: flex;
    align-items: normal;
    justify-content: space-evenly;
    align-items: center;
    right: auto;
`

