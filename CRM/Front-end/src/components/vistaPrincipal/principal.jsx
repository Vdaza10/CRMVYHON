    import React, { useState } from "react";//importacion react y el hook usestate desde la biblioteca react
    import {Contenedor,ContenedorTarjeta,Tarjeta1} from "./styled";//importacion de los componentes personalizados desde un archivo "style"
    import Menu from "../menu/principal"// Importa un componente Menu desde una ubicación relativa.

    const Vistaprincipal = () => { // Declara un componente funcional llamado Vistaprincipal.
    const [tarjetaActual, setTarjetaActual] = useState(0);  // Declara el estado 'tarjetaActual' con valor inicial 0 y una función para actualizarlo.
        const tarjetas = [
            {title: "card A", descripcion: "informacion empresas"},
            {title: "card B", descripcion: "informacion contactos"},
            {title: "card C", descripcion: "informacion negocios"},
            {title: "card D", descripcion: "informacion tareas"},
            {title: "card E", descripcion: "informacion markenting"},
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
    }, 2000)

    return (
        <>
        <Menu/> {/*Renderiza el componente Menu.*/}
        <Contenedor className="container"> {/*Renderiza un componente con la clase CSS "container".*/}
        {/* <button onClick={handleClickPrev}>Prev</button> */}
        <ContenedorTarjeta>{/*// Renderiza un componente llamado ContenedorTarjeta.*/}
        <div className="carousel" style={{display: "flex", backgroundColor:"silver", height: "600px",  marginLeft:"1820px"}}>
            {/*Mapea los objetos 'tarjeta' en el arreglo 'tarjetas'.*/}
            {tarjetas.map((tarjeta, index) => ( 
            <Tarjeta1
                key={index}
                className={`tarjeta ${tarjeta === tarjetas[tarjetaActual] ? "active" : ""}`}
            >
                <h2>{tarjeta.title}</h2>
                <p>{tarjeta.descripcion}</p>
            </Tarjeta1>
            ))}
        </div>
        </ContenedorTarjeta>
        {/* <button onClick={handleClickNext}>Next</button> */}
        </Contenedor>
        </>
    );
    };
    export default Vistaprincipal;