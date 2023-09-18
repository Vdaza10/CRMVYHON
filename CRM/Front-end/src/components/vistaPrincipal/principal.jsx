import React, { useState, useEffect } from "react";
import {Contenedor,ContenedorTarjeta,Tarjeta1,} from "./styled";
import Menu from "../menu/principal";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import carrusel from "../img/imagenCarrusel.png"

    const Vistaprincipal = () => { // Declara un componente funcional llamado Vistaprincipal.
    const [tarjetaActual, setTarjetaActual] = useState(0);  // Declara el estado 'tarjetaActual' con valor inicial 0 y una función para actualizarlo.
    const [loading, setLoading] = useState(true)
 
    
    const tarjetas = [
            {title: "DATOS DE CONTACTO DEL CLIENTE", descripcion: "Nombre" ,descripcion2: "Direccion de correo electronico"},
            {title: "HISTORIAL DE INTERRACCIONES", descripcion: "Registros de llamadas", descripcion2: "correos electronicos enviados y recibidos"},
            {title: "INFORMACIÓN SOBRE OPORTUNIDADES DE VENTA ", descripcion: "Detalles sobre las oportunidades de negocio co el cliente, incluye el estado, el valor estimado y las fechas importantes"},
            {title: "ACTIVIDADES PENDIENTES", descripcion: "Tareas y recordatorios reacionados con el cliente, como seguimientos programados, llamadas de seguimientos, presentaciones pendientes"},
            {title: "HITORIAL DE COMPRAS", descripcion: "informacion sobre las compras previas realidas por el cliente, productos o servios adquiridas y fechas de compras"},
        ]
        // Función para asignar animaciones a las tarjetas.
    const asignarAnimacion = (claseActual, claseSiguiente) => {
        const tarjetas = document.querySelectorAll(".tarjeta"); // Selecciona todos los elementos con la clase CSS "tarjeta".

        tarjetas.forEach((tarjeta) => {// Itera sobre cada tarjeta seleccionada.
        if (tarjeta.classList.contains(claseActual)) { // Comprueba si la tarjeta tiene la clase 'claseActual'.
            tarjeta.classList.remove(claseActual);  // Si es así, elimina la clase 'claseActual'.
            tarjeta.classList.add(claseSiguiente);// Agrega la clase 'claseSiguiente'.
        }
        });
    };
    // Función para manejar el clic en el botón "Next". este boton next esta oculto 
    const handleClickNext = () => {
        const nuevaTarjeta = (tarjetaActual + 1) % tarjetas.length; // Calcula el índice de la próxima tarjeta.
        asignarAnimacion(tarjetas[tarjetaActual], tarjetas[nuevaTarjeta]);// Aplica animaciones a las tarjetas.
        setTarjetaActual(nuevaTarjeta); // Actualiza el estado 'tarjetaActual' con el nuevo índice.
    };
    // Establece un temporizador para avanzar automáticamente a la siguiente tarjeta cada 2 segundos.
    setTimeout(()=>{
        handleClickNext() // Llama a la función 'handleClickNext' para avanzar.
    }, 5000)



setTimeout(() => {
    handleClickNext();
}, 5000);

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

return (
    <>
    {loading ? (
        <>
        <h1>cargando.....</h1>
        </>
    ):(

    <>
        <Menu/> {/*Renderiza el componente Menu.*/}
        <div style={{backgroundImage: `url(${carrusel})`, backgroundRepeat:"no-repeat",backgroundPosition:"center", backgroundSize:"cover",height:"700px", }}>
       <h1 style={{textAlign:"center", margin:"0", color:"white"}}>TARJETAS INFORMATIVAS</h1>
        <Contenedor className="container"> {/*Renderiza un componente con la clase CSS "container".*/}
        {/* <button onClick={handleClickPrev}>Prev</button> */}
        <ContenedorTarjeta>{/*// Renderiza un componente llamado ContenedorTarjeta.*/}
        <div className="carousel" style={{display: "flex", height: "400px",  marginLeft:"1575px"}}>
            {/*Mapea los objetos 'tarjeta' en el arreglo 'tarjetas'.*/}
            {tarjetas.map((tarjeta, index) => ( 
            <Tarjeta1
                key={index}
                className={`tarjeta ${tarjeta === tarjetas[tarjetaActual] ? "active" : ""}`}
            >
                <h2 style={{textAlign:"center", color:"white"}}>{tarjeta.title}</h2>
                <p style={{textAlign:"center", color:"white"}}>{tarjeta.descripcion}</p>
                <p style={{textAlign:"center", color:"white"}}>{tarjeta.descripcion2}</p>
            </Tarjeta1>
            ))}
        </div>
        </ContenedorTarjeta>
    </Contenedor>            
        </div>
 
    </>
    )}
    </>
);
};

export default Vistaprincipal;
