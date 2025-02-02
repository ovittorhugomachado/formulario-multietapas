import { createContext, useState } from "react";

export const StepContext = createContext();

export const StepProvider = ({ children }) => {
    const [currentStep, setCurrentStep] = useState(0);

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

    const changePlan = () => {
        setCurrentStep(1)
    }

    return (
        <StepContext.Provider value={{ currentStep, nextStep, prevStep, changePlan }}>
            {children}
        </StepContext.Provider>
    );
};
