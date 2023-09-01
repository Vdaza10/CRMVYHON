import React, { useState } from 'react';
import { Container, Parrafo, Boton } from "./styled";
import imagen from "../img/contacto.jpg"
import Menu from '../menu/principal';
import Retorno4 from '../crearcontacto'; // Importación del componente Retorno4 (¿crear contacto?)

function Retorno3() {
    const [active, setActive] = useState(false) // Estado para controlar la visibilidad del componente Retorno4
    
    return (
        <>
            {/* Componente de menú */}
            <Menu />
                <Container>
                    <img src={imagen} alt="img" style={{ width: '30%', height: '50%' , marginTop:"15px" }} />
                    <Parrafo><h3>No hemos encontrado contactos en tu cuenta ni con los filtros <br /> que seleccionaste</h3></Parrafo>
                    <Parrafo> Crear contactos para llevar el registro y los datos de todas las personas <br />con las que negocias. o prueba a cambiar los filtros seleccionados para encontrar <br /> nuevos resultados   </Parrafo>
                    {/* Botón para crear contactos */}
                    <Boton onClick={() => setActive(!active)}>Crear contactos</Boton>                    
                    {/* Renderiza el componente Retorno4 si active es true */}
                    {active && <Retorno4></Retorno4>}
                </Container>
        </>
    );
}
export default Retorno3;
