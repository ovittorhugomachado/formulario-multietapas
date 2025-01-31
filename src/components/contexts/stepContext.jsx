import { createContext, useState } from "react";

export const StepContext = createContext();

export const StepProvider = ({ children }) => {
    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = () => {
        if (currentStep < 4) {
            setCurrentStep((prevStep) => prevStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep((prevStep) => prevStep - 1);
        }
    };

    return (
        <StepContext.Provider value={{ currentStep, nextStep, prevStep }}>
            {children}
        </StepContext.Provider>
    );
};
