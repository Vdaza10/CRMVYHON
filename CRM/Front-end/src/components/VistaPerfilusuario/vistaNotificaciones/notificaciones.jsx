import React from "react";
import { Caja, Contenedor,Fondo } from "./styled"
import { Cajaheader,Parrafo1,Parrafo,Header} from "../perfilusuario/styled";
import Menu from "../../menu/principal";

const Notificación = ({cambiarAperfil}) =>{
    return(
        <>
        <Fondo>
        <Menu />
                    <Header>
                        <Parrafo>Editar perfil</Parrafo>
                        <Parrafo style={{ fontSize: "15px", color: "gray", margin: "0", marginLeft: "20px" }}>perfil</Parrafo>
                        <Cajaheader>
                            <Parrafo1 onClick={() => cambiarAperfil(true)}>Mi perfil</Parrafo1>
                            <Parrafo1>Notificaciones
                            </Parrafo1>
                        </Cajaheader>
                    </Header>


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