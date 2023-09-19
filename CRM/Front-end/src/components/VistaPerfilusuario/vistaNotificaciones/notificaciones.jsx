import React from "react";
import { Caja, Contenedor, Fondo } from "./styled"

const Notificación = () =>{
    return(
        <>

        <Fondo>

            <Contenedor>

                <Caja className="hover">

                <Caja className="perfil">foto de: cara de patacón quemado 🥶</Caja>

                <Caja className="contenedorParrafo">

                    <Caja className="parrafo1"> hola cara de arróz con patacón, quemado: tienes una invitacion de radio watapuri, a las 5pm el lunes septiembre de 2023 </Caja>
                    <Caja className="parrafo2">hace  2minutos</Caja>

                <Caja className="fecha"> 7/09/2023</Caja>

                </Caja>

                </Caja>

            </Contenedor>

        </Fondo>

        </>
    )
}

export default Notificación