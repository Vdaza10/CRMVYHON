import React from "react";
import { InputInfor ,Caja , Input , Select1  } from "./styled";
import { Container, ContenedorModal ,Header,Body ,Boton} from "../../vistas/markenting/llamadaAudioModal/styled";
import { GrClose } from "react-icons/gr";
import { BiSolidUser } from 'react-icons/bi';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaFlag } from 'react-icons/fa';

function DatosPerfil ({estado, cambiarEstado}){
    return (
        <>
        {estado && (
        <Container>
            <ContenedorModal>
                <Header>
                <h1>Datos adicionales</h1>
              <GrClose
                onClick={() => cambiarEstado(false)}
                style={{ marginRight: "30px", color: "red", fontSize: "20px" }}
              ></GrClose>
                </Header>
                <Body>
                    <Caja>
                    <Select1></Select1>
                <fieldset className="Cajafieldset">
                                <legend>Fecha de nacimiento</legend>
                              <InputInfor className="InputFecha" type="date"></InputInfor>
                              </fieldset>
                              <fieldset className="Cajafieldset">
                                <legend>Nacionalidad</legend>
                              <InputInfor></InputInfor>
                              <FaFlag className="IconoGrandes"></FaFlag>
                              </fieldset>
                              <fieldset className="Cajafieldset">
                                <legend>holaoolalaloao</legend>
                              <InputInfor></InputInfor>
                              <BsTelephoneFill className="IconoGrandes"></BsTelephoneFill>
                              </fieldset>
                              <fieldset className="Cajafieldset">
                                <legend>holaoolalaloao</legend>
                              <BiSolidUser className="Icono"></BiSolidUser>
                              <InputInfor></InputInfor>
                              </fieldset>
                              <fieldset className="Cajafieldset">
                                <legend>holaoolalaloao</legend>
                              <FaFlag className="Icono"></FaFlag>
                              <InputInfor></InputInfor>
                              </fieldset>
                              <fieldset className="Cajafieldset">
                                <legend>holaoolalaloao</legend>
                              <FaFlag className="Icono"></FaFlag>
                              <InputInfor></InputInfor>
                              </fieldset>
                              </Caja>
                </Body>
                <Boton>Agregar</Boton>
            </ContenedorModal>
        </Container>
        )}
        </>
    )
}
export default DatosPerfil;