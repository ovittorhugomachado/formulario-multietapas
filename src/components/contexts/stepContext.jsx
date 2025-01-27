import { createContext, useState } from "react";
import { ContainerStep1Component } from "../step-1";
import { ContainerStep2Component } from "../step-2";
import { ContainerStep3Component } from "../step-3";
import { ContainerStep4Component } from "../step-4";
import { ContainerStep5Component } from "../step-5";

export const StepContext = createContext();

export const StepProvider = ({ children }) => {
    const [currentStep, SetCurrentStep] = useState(1);

    const steps = [
            <ContainerStep1Component key={0} />,
            <ContainerStep2Component key={1} />,
            <ContainerStep3Component key={2} />,
            <ContainerStep4Component key={3} />,
            <ContainerStep5Component key={4} />
        ]

    const nextStep = () => {
        if(currentStep < steps.length - 1 ){
            SetCurrentStep((prevStep) => prevStep + 1)
        }
    }

    const prevStep = () => {
        if(currentStep > 0){
            SetCurrentStep((prevStep) => (prevStep > 0 ? prevStep - 1 : 0))
        }
    }

    return (
        <StepContext.Provider value={{ currentStep, nextStep, prevStep }}>
            {children}
        </StepContext.Provider>
    );
};

// Hook personalizado para acessar o contexto
export const useStep = () => useContext(StepContext);