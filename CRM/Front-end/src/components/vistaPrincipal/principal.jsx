    import React, { useState } from "react";
    import {
    Contenedor,ContenedorTarjeta,Tarjeta1
    } from "./styled";
    import Menu from "../menu/principal"

    const Vistaprincipal = () => {
    const [tarjetaActual, setTarjetaActual] = useState(0);
    // const tarjetas = ["A", "B", "C", "D", "E"];
        const tarjetas = [
            {title: "card A", descripcion: "informacion empresas"},
            {title: "card B", descripcion: "informacion contactos"},
            {title: "card C", descripcion: "informacion negocios"},
            {title: "card D", descripcion: "informacion tareas"},
            {title: "card E", descripcion: "informacion markenting"},
        ]
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
    setTimeout(()=>{
        handleClickNext()
    }, 2000)

    return (
        <>
        <Menu/>
        <Contenedor className="container">
        {/* <button onClick={handleClickPrev}>Prev</button> */}
        <ContenedorTarjeta>
        <div className="carousel" style={{display: "flex", backgroundColor:"silver", height: "600px",  marginLeft:"1820px"}}>
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