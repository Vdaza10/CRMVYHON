import React from "react";
import { BodyCard, Container, ContainerCard, FooterCard, HeaderCard, Card, Title, BoxPromotion } from "./styled";
import Menu from "../../menu/principal";

const Promocion = () => {
    return(
        <>
        <Menu/>
            <Container>
                <BoxPromotion>
                    <Title><h1>planes de promociónddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</h1></Title>
                    <ContainerCard>
                        <Card>
                            <HeaderCard></HeaderCard>
                            <BodyCard>
                                
                            </BodyCard>
                            <FooterCard></FooterCard>
                        </Card>
                        <Card>
                            <HeaderCard></HeaderCard>
                            <BodyCard>
                                
                            </BodyCard>
                            <FooterCard></FooterCard>
                        </Card>
                        <Card>
                            <HeaderCard></HeaderCard>
                            <BodyCard>

                            </BodyCard>
                            <FooterCard></FooterCard>
                        </Card>
                        <Card>
                            <HeaderCard></HeaderCard>
                            <BodyCard>

                            </BodyCard>
                            <FooterCard></FooterCard>
                        </Card>
                    </ContainerCard>
                </BoxPromotion>
            </Container>
            </>
            
    )
}
export default Promocion