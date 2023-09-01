import React from "react";
import { useState } from "react";
import { Container,Principal,Caja1,Parrafo,Img,Caja2,Parrafo1,Input,Select ,Caja3,Boton1,Boton2} from "./styled.jsx";
import imagen from "../img/img_x.webp"

function CrearNegocios() {
    
    const [cerrar, setCerrar] = useState(true);
    const cerrarcomponente = () => {
        setCerrar(false);
    }
    if (!cerrar){
        return null 
    }
    return (
        <div>
            <Container>
                <Principal>
                    <Caja1>
                        <Parrafo><h3>Crear negocio</h3></Parrafo>
                        <Img src={imagen} alt="img" onClick= {cerrarcomponente} ></Img>
                    </Caja1>
                    <hr />
                    <Caja2>
                        <Parrafo1><h3>Nombre del negocio</h3></Parrafo1>
                        <Input placeholder="Ingresar el nombre del negocio"></Input>
                        <Parrafo1><h3>Etapa del embudo</h3></Parrafo1>
                        <Input placeholder="Ingresar el medio de información"></Input>
                        <Parrafo1><h3>Fuente</h3></Parrafo1>
                        <Input placeholder="Ingresar el medio por el cual creara su negocio"></Input>
                        <Parrafo1><h3>Campaña</h3></Parrafo1>
                        <Select>
                            <option value="seleccionar"> seleccionar</option>
                            <option value="et fundación">et fundación</option>
                        </Select>
                        <Parrafo1 style={{color:'gray' , marginTog:'%8'}}></Parrafo1>
                        <Parrafo1><h3>Contacto</h3></Parrafo1>
                        <Select>
                            <option value="Seleccionar"> seleccionar</option>
                            <option value=""></option>
                        </Select>
                    </Caja2>
                        <hr />
                    <Caja3>
                        <Boton1>Crear negocio</Boton1>
                        <Boton2>Cancelar</Boton2>
                    </Caja3>
                </Principal>
            </Container>
        </div>
    );
}

export default CrearNegocios;
