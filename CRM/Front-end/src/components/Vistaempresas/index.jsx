import React , { useState } from "react";
import {  Container , Parrafo , Boton } from "./styled";
import imagen from "../img/imgenempresa.jpg"
import Menu from "../menu/principal";
import Retorno8 from "../creacionempresa"; // Importacion del componente Retorno8

function Retorno7() {
    const [active, setActive] = useState(false); // Estado para controlar la visualización del componente Retorno8

    return (
        <>
            <Menu/> {/* Muestra el componente Menu */}
                <Container>
                      {/* Muestra una imagen */}
                    <img src={imagen} alt="img" style={{width:'25%',height:'50%',marginTop:"4%"}} />
                    <Parrafo><h3>Crea empresas</h3></Parrafo>
                    <Parrafo>Mantén el historial de todos los negocios con tu base de empresas.</Parrafo>
                    <Boton onClick={() => setActive(!active)}>Crear empresa</Boton>
                      {/* Muestra el componente Retorno8 si 'active' es true */}
                    {active && <Retorno8></Retorno8>}
                </Container>
        </>
    );
}
export default Retorno7;   