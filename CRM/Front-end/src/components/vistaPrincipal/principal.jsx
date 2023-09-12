import React, { useState } from "react";
import {Contenedor,ContenedorTarjeta,Tarjeta1,Tarjeta2,} from "./styled";
import Menu from "../menu/principal";

const Vistaprincipal = () => {
const [tarjetaActual, setTarjetaActual] = useState(0);

// Define an array of card content (you can replace this with your own data)
const tarjetas = [
    { title: "EMPRESA", description: "This is card A." },
    { title: "Contactos", description: "This is card B." },
    { title: "Negocios", description: "This is card C." },
    { title: "Tareas", description: "This is card D." },
    { title: "Markenting", description: "This is card E." },
];

const asignarAnimacion = (claseActual, claseSiguiente) => {
    const tarjetas = document.querySelectorAll(".tarjeta");

    tarjetas.forEach((tarjeta) => {
    if (tarjeta.classList.contains(claseActual)) {
        tarjeta.classList.remove(claseActual);
        tarjeta.classList.add(claseSiguiente);
    }
    });
};

const handleClickNext = () => {
    const nuevaTarjeta = (tarjetaActual + 1) % tarjetas.length;
    asignarAnimacion(tarjetas[tarjetaActual], tarjetas[nuevaTarjeta]);
    setTarjetaActual(nuevaTarjeta);
};

setTimeout(() => {
    handleClickNext();
}, 2000);

return (
    <>
    <Menu />
    <Contenedor className="container">
        <ContenedorTarjeta>
        <Tarjeta2 className="carousel">
            {tarjetas.map((tarjeta, index) => (
            <Tarjeta1
                key={index}
                className={`tarjeta ${
                index === tarjetaActual ? "active" : ""
                }`}
            >
                <h2>{tarjeta.title}</h2>
                <p>{tarjeta.description}</p>
            </Tarjeta1>
            ))}
        </Tarjeta2>
        </ContenedorTarjeta>
    </Contenedor>
    </>
);
};

export default Vistaprincipal;