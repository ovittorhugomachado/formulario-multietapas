import { Container, Buttons, ButtonNext, ButtonConfirm, ButtonBack, } from "./style";
import { ContainerStep1Component } from "../step-1";
import { ContainerStep2Component } from "../step-2";
import { ContainerStep3Component } from "../step-3";
import { ContainerStep4Component } from "../step-4";
import { ContainerStep5Component } from "../step-5";
import { useState } from "react";

export const Main = ({children}) => {
    const steps = [
        <ContainerStep1Component key={0} />,
        <ContainerStep2Component key={1} />,
        <ContainerStep3Component key={2} />,
        <ContainerStep4Component key={3} />,
        <ContainerStep5Component key={4} />
    ]

    const [currentStep, SetCurrentStep] = useState(0);

    const nextStep = () => {
        if(currentStep < steps.length - 1 ){
            SetCurrentStep(currentStep + 1)
        }
    }

    const prevStep = () => {
        if(currentStep > 0){
            SetCurrentStep(currentStep - 1)
        }
    }
    return (
        <>
            <Container>
                {children}
                {steps[currentStep]}
                <Buttons>
                    <ButtonBack onClick={prevStep} className={currentStep < 1 ? "disable" : ""}>Voltar</ButtonBack>
                    <ButtonNext onClick={nextStep} className={currentStep > 2 ? "disable" : ""}>Próximo</ButtonNext>
                    <ButtonConfirm className={currentStep < 3 || currentStep === 4 ? "disable" : ""}>Confirmar</ButtonConfirm>
                </Buttons>
            </Container>
        </>
    )
}