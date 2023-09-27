import React from "react";
import { BodyCard, Container, ContainerCard, FooterCard, HeaderCard, Card, Title, BoxPromotion, RowCard, RowCard1, Button, ContainerTitleText, SmallText } from "./styled";



const Promocion = () => {
    return(
        <>

            <Container>
                <BoxPromotion>
                    <ContainerTitleText>
                    <Title><h1>planes de promocion</h1></Title>
                    <SmallText> <p>aprovecha cada una de nuestras promociones, no te quedes sin la tuya</p> </SmallText>
                    </ContainerTitleText>
                    <ContainerCard>
                        <Card>
                            <HeaderCard style={{backgroundColor:"#c5eeec", fontSize:"25px", color:"#000"}}>
                                comprar todas las promociones
                            </HeaderCard>
                            <BodyCard>
                                <RowCard> siguiente mes </RowCard>
                                <RowCard> plazo de entrega </RowCard>
                                <RowCard> soporte 24/7 </RowCard>
                                <RowCard> certificado </RowCard>
                                <RowCard> clasificación de palabras clave garantizadas en la primera pagina de google </RowCard>
                            </BodyCard>
                            <FooterCard></FooterCard>
                        </Card>
                        <Card>
                            <HeaderCard style={{backgroundColor:"#cd4f77"}}>empresa</HeaderCard>
                            <BodyCard>
                                <RowCard> $900 </RowCard>
                                <RowCard> 3-6 meses </RowCard>
                                <RowCard> ✔️ </RowCard>
                                <RowCard> ✔️</RowCard>
                                <RowCard> 28 </RowCard>
                            </BodyCard>
                            <FooterCard>
                                <Button
                                style={{color:"#00000083"}}
                                >elegir promoción</Button>
                            </FooterCard>
                        </Card>
                        <Card>
                            <HeaderCard style={{backgroundColor:"#d6175a"}}>avance</HeaderCard>
                            <BodyCard>
                                <RowCard1> $700 </RowCard1>
                                <RowCard1> 3-6 meses </RowCard1>
                                <RowCard1> ✔️ </RowCard1>
                                <RowCard1> ✔️ </RowCard1>
                                <RowCard1> 20 </RowCard1>
                            </BodyCard>
                            <FooterCard 
                            style={{backgroundColor:"#dfeef8"}}
                            >        
                                <Button
                                style={{backgroundColor:"#d6175a"}}
                                >elegir promoción</Button>
                            </FooterCard>
                        </Card>
                        <Card>
                            <HeaderCard style={{backgroundColor:"#81dd9b"}}>entrante</HeaderCard>
                            <BodyCard>
                                <RowCard> $300 </RowCard>
                                <RowCard>3-6 meses </RowCard>
                                <RowCard> - </RowCard>
                                <RowCard> - </RowCard>
                                <RowCard>18 </RowCard>
                            </BodyCard>
                            <FooterCard>
                                <Button
                                style={{color:"#00000083"}}
                                >elegir promoción</Button>
                            </FooterCard>
                        </Card>
                    </ContainerCard>
                </BoxPromotion>
            </Container>
            </>
            
    )
}
export default Promocion