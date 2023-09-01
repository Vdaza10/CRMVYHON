import React from "react";
import { Container, Input, ContainerInput, Parrafo, Conteiner1, Conteiner2, Checkbox, Caja, ParrafoCheckbox, Boton1, Boton2 } from "./styled";
import { BsSearch } from 'react-icons/bs';



function Retorno6() {
    
    

    return (
                <Container>
                    <Conteiner1>
                        <ContainerInput>
                            <Input placeholder="Buscar" />
                            <BsSearch style={{ marginRight: "5px" }} />
                        </ContainerInput>
                    </Conteiner1> 

                    <Conteiner2>
                        <Parrafo><h4 style={{ margin: "0%", padding: "0%" }}>Todas las tareas</h4></Parrafo>
                        <Parrafo style={{ color: "#00A9FF" }}><h4 style={{ margin: "0%", padding: "0%" }}>Mis tareas</h4></Parrafo>
                        <Parrafo>Responsables</Parrafo>
                        <Caja>
                            <Checkbox type="checkbox"></Checkbox>
                            <ParrafoCheckbox>Responsable</ParrafoCheckbox>
                        </Caja>
                    </Conteiner2>
                    <hr style={{ width: "100%" }} />
                    <Conteiner1>
                        <Boton1>Aplicar</Boton1>
                        <Boton2>Limpiar</Boton2>
                    </Conteiner1> 
                </Container> 
    );
}

export default Retorno6;