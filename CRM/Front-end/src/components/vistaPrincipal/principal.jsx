    import React, { useState, useEffect } from "react";
    import {
    ConInformacion,
    Contenedor,
    ContenedorTarjeta,
    Tarjeta2,
    Titulo,
    } from "./styled";
    import Menu from "../menu/principal";
    import prueba from "../img/carruzel1.avif";
    import prueba1 from "../img/carruzel2.jpg";
    import prueba2 from "../img/carruzel3.avif";

    const Vistaprincipal = () => {
    // Datos de las tarjetas a mostrar en lugar del carrusel
    const tarjetas = [
        { titulo: "Negocios", informacion: "helena", imagen: prueba },
        { titulo: "Empresas", informacion: "helena", imagen: prueba1 },
        { titulo: "Contactos", informacion: "helena", imagen: prueba2 },
        { titulo: "Tareas", informacion: "helena", imagen: prueba },
        { titulo: "Analisis", informacion: "helena", imagen: prueba },
        { titulo: "Markenting", informacion: "helena", imagen: prueba },
    ];

    // Estado para mantener el índice de la tarjeta actualmente visible
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    useEffect(() => {
        // Configuración del intervalo para cambiar de tarjeta cada 3 segundos
        const interval = setInterval(() => {
        // Calcula el índice de la siguiente tarjeta a mostrar
        const nextIndex =
            currentCardIndex === tarjetas.length - 1 ? 0 : currentCardIndex + 1;
        setCurrentCardIndex(nextIndex);
        }, 3000); // Cambia de tarjeta cada 3 segundos

        // Limpia el intervalo cuando el componente se desmonta
        return () => {
        clearInterval(interval);
        };
    }, [currentCardIndex, tarjetas.length]);

    return (
        <>
        <Menu />
        <Contenedor>
            <ContenedorTarjeta>
            {tarjetas.map((tarjeta, index) => (
                <Tarjeta2
                key={index}
                style={{
                display: index === currentCardIndex ? "block" : "none",
                }}>
                <Titulo>{tarjeta.titulo}</Titulo> {/* Include the Titulo component for the title */}
                <p>{tarjeta.informacion}</p>
                <img
                    src={tarjeta.imagen}
                    alt=""
                    style={{ width: "60%", height: "100%" }}
                ></img>
                </Tarjeta2>
            ))}
            </ContenedorTarjeta>
            {/* Contenedor para la información adicional */}
            <ConInformacion>{/* Contenido de Información Adicional */}</ConInformacion>
        </Contenedor>
        </>
    );
    };

    export default Vistaprincipal;
