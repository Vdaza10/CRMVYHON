import React, { useState , useEffect } from "react";
import Axios from "axios";
import {  Container, Parrafo , Caja2, Boton } from "./styled";
import imagen from "../img/tarea.jpg"
import Menu from "../menu/principal";
import CrearTarea from "../CreacionTarea";
import TablaTarea from "../tablaTarea";

import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";


function Retorno5() {

    
    const [active, setActive] = useState(false);
    const [tarea, setTarea] = useState([])
    const [loading, setLoading] = useState(true)

    let navigate = useNavigate();

    useEffect(() => {

        const userToken = localStorage.getItem("user");
        if(userToken){
            try {
            const token = jwt_decode(userToken);
        console.log(token, "❤️❤️💕💕💕❤️");
        setLoading(false);
            } catch (error) {
                console.error("Error al decodificar el token:", error);
                navigate('/'); 
            }
        }else{
            navigate('/');
        }
    },[navigate])


    const ReflejarDatos = async () => {
        // ev.preventDefault();
        const tareas = await Axios.get("http://localhost:3005/tareasTabla");
        setTarea(tareas.data);
    };
    useEffect(() => {
        ReflejarDatos();
    }, [setTarea]);



    return (
        <>
        {loading ? (
         <>
          <h1>Cargando......</h1>
         </>
        ):(
        <> 
        {tarea.length <= 0 ? (
            <>
            <Menu/>
                <Container>
                    <Caja2>
                    <img src={imagen} alt="img" style={{width:'560px',height:'300px' }} />

                    <Parrafo><h3>No hemos encontrado tareas en tu cuenta ni con los filtros <br/> que seleccionastes</h3></Parrafo>

                    <Parrafo>Crea tareas para no perder de vista las actividades y ganar mas tiempo para centrarte <br/> en lo que es más importante para tu empresa. o prueba a cambiar los filtros <br/>seleccionados para encontrar nuevos resultados.</Parrafo>

                    <Boton onClick={() => setActive(!active)}>Crear tarea</Boton>
                    {active && <CrearTarea></CrearTarea>}
                    </Caja2>
                </Container>
            </>
        ) : (
            <>
                <TablaTarea></TablaTarea>
            </>
        )}
        </>
        )}
        </>
    );
}
export default Retorno5;