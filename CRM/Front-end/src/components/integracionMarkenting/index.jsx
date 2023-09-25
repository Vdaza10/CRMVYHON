import React from "react";
import {Container, Principal, Div1, Parrafo, Div2, Imagen, Div3, Boton1, Boton2} from "./styled.jsx";
import imagen from "../img/marketing.jpg"
import Menu from "../menu/principal";

function Retorno9() {
    return (
        <>
        <Menu/>
            <Container>
                <Principal>
                    <Div1>
                        <Parrafo>Ajustes</Parrafo>
                        <Parrafo><h3 style={{margin:"0"}}>Conectar con RD station Marketing</h3></Parrafo>
                    </Div1>
                    <Div2>
                        <Imagen src={imagen} alt="img" />
                        <Parrafo style={{margin:"0"}}><h3>Recibe los negocios generados en RD station Marketing</h3></Parrafo>
                        <Parrafo style={{margin:"0"}}>Conecte RD Station CRM con RD Station Marketing para automatizar el intercambio <br /> de información. El intercambio de información debe ser aceptado por los contactos. <br /></Parrafo>
                    </Div2>
                    <Div3>
                        <Boton1>Prueba RD Station Marketing gratis</Boton1>
                        <Boton2>Más información</Boton2>
                    </Div3>
                </Principal>
            </Container>
        </>
    );
}

export default Retorno9;
