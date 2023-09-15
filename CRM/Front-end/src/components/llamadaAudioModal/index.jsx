import React  from "react";
import {  Container, ContenedorModal , Header , Body , Input1 , Caja , Boton ,Select1} from "./styled";
import { GrClose } from "react-icons/gr";



const Audiollamada = ({estado, cambiarEstado}) => {
    return(
        <>
        { estado &&
        <Container>
            <ContenedorModal>
              <Header>
                <h1>hola</h1>
                <GrClose onClick={() => cambiarEstado(false)} style={{ marginRight: "30px", color: "red", fontSize: "20px" }}></GrClose>
              </Header>
              <Body>
                <Select1>
                <option style={{color:""}} value="">Seleccionar negocio...</option>
                </Select1>
                <Input1 placeholder="Ingresar nombre" ></Input1>
                <Input1 placeholder="Ingresar apellido"></Input1>
                <Input1 placeholder="Ingresar Identificacion"></Input1>
                <Caja>
                  <Input1 placeholder="Ingresar telefono personal" className="InputTelefono"></Input1>
                  <Input1 placeholder="Ingresar telefono fijo" className="InputTelefono"></Input1>
                </Caja>
                <Input1 placeholder="Ingresar dirrecion" ></Input1>
                <Input1 placeholder="Ingresar Correo electronico"></Input1>
              </Body>
              <Boton> Guardar</Boton>
            </ContenedorModal>
        </Container>
        }
        </>
    )
}
export default Audiollamada;