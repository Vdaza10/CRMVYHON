    import React from 'react';
    import Menu from '../menu/principal';
    import Formulario from './fromPedido';
    import {
    RootContainer,
    Contenedor,
    PanelStyled,
    ButtonGroupStyled,
    ButtonStyled,
    } from './styled';
    import { Steps, Placeholder } from 'rsuite';

    const Pedidos = () => {
    const [step, setStep] = React.useState(0);

    const onChange = nextStep => {
        setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
    };

    const onNext = () => onChange(step + 1);
    const onPrevious = () => onChange(step - 1);

        return (
        <>
            <Menu />
            <RootContainer>
                <Contenedor>
                    <Steps current={step} className='Steps'>
                    <Steps.Item title="Finished"/>
                    <Steps.Item title="In Progress"/>
                    <Steps.Item title="Waiting" />
                    </Steps>
                    <hr />
                    <PanelStyled>
                    <Placeholder.Paragraph />
                    </PanelStyled>
                    <hr />
                    <ButtonGroupStyled>
                    <ButtonStyled onClick={onPrevious} disabled={step === 0}>
                        Previous
                    </ButtonStyled>
                    <ButtonStyled onClick={onNext} disabled={step === 3}>
                        Next
                    </ButtonStyled>
                    </ButtonGroupStyled>
                </Contenedor>
            </RootContainer>
            <Formulario/>
            </>
        );
    };

    export default Pedidos;
