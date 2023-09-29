import React from "react";
import { BodyCard, Container, ContainerCard, FooterCard, HeaderCard, Card, Title, BoxPromotion, RowCard, RowCard1, Button, ContainerTitle, Card2,BodyCard2,HeaderCard2,RowCard2, HeaderTable, ContainerImg, LettersHeaderCard, Image, Icono  } from "./styled";
import imagen from "../../../img/oro2.jpg"
import imagen1 from "../../../img/silver.png"
import imagen2 from "../../../img/membresia-bronce.webp"
const Promocion = () => {
    return(
        <>
        
            <Container>
                <BoxPromotion>
                    <ContainerTitle>
                    <Title><h1> choose your membership </h1></Title>
                    </ContainerTitle>
                    <HeaderTable>
                    <HeaderTable className="hijo"></HeaderTable>
                    </HeaderTable>
                    <ContainerCard>
                        <Card>
                            <HeaderCard> 
                                <ContainerImg>
                                    <Image src={imagen1} alt="" />
                                </ContainerImg>
                                <LettersHeaderCard>elias el rey </LettersHeaderCard>
                            </HeaderCard>
                            <BodyCard>
                                
                                <RowCard> soporte 24/7 </RowCard>
                                <RowCard> certificado </RowCard>
                                <RowCard className="containerButton">
                                    <Button className="button1"> SIGN UP </Button>
                                </RowCard>
                            </BodyCard>
                        </Card>
                        <Card2>
                            <HeaderCard2>
                            <ContainerImg>
                                <Image src={imagen} alt="" />
                            </ContainerImg>
                                <LettersHeaderCard>elias el rey </LettersHeaderCard>
                            </HeaderCard2>
                            <BodyCard2>
                                <RowCard2> $900 </RowCard2>
                                <RowCard2> 3-6 meses </RowCard2>
                                <RowCard2 className="card3"> ✔️ </RowCard2>
                                <RowCard2> ✔️</RowCard2>
                                <RowCard2> 28 </RowCard2>
                                <RowCard2 className="card6"> ELIAS EL REY</RowCard2>
                            </BodyCard2>
                            <FooterCard>
                                <Button
                                style={{color:"#00000083"}}
                                > SIGN UP </Button>
                            </FooterCard>
                        </Card2>
                        <Card>
                            <HeaderCard>
                            <ContainerImg>
                                <Image src={imagen2} alt="" />
                            </ContainerImg>
                                <LettersHeaderCard>elias el rey </LettersHeaderCard>
                            </HeaderCard>
                            <BodyCard>
                                <RowCard1>
                                    <Icono></Icono>
                                $700 </RowCard1>
                                <RowCard1>
                                <Icono></Icono>
                                3-6 meses </RowCard1>
                                <RowCard1 style={{height:"10%"}}> 
                                <Icono></Icono>
                                </RowCard1>
                                <RowCard1> 
                                    <Icono>✔️</Icono> </RowCard1>
                                <RowCard1> 20 </RowCard1>
                                <RowCard1 style={{height:"10%"}}>ELIAS EL REY</RowCard1>
                            </BodyCard>
                            <FooterCard 
                            style={{backgroundColor:"#dfeef8"}}
                            >        
                                <Button>SIGN UP</Button>
                            </FooterCard>
                        </Card>
                    </ContainerCard>
                </BoxPromotion>
            </Container>
            </>
            
    )
}
export default Promocion