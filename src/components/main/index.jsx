import { Container, Buttons, ButtonNext, ButtonConfirm, ButtonBack, } from "./style";
import { ContainerStep1Component } from "../step-1";
import { ContainerStep2Component } from "../step-2";
import { ContainerStep3Component } from "../step-3";
import { ContainerStep4Component } from "../step-4";
import { ContainerStep5Component } from "../step-5";
import { useContext } from "react";
import { StepContext } from "../contexts/stepContext";
import { useForm } from "react-hook-form";


export const Main = ({ children }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        nextStep(); // Avança se os dados forem válidos
    };

    const { currentStep, nextStep, prevStep } = useContext(StepContext)
    const steps = [
        <ContainerStep1Component key={0} register={register} errors={errors} />,
        <ContainerStep2Component key={1} register={register} errors={errors} />,
        <ContainerStep3Component key={2} register={register} errors={errors} />,
        <ContainerStep4Component key={3} register={register} errors={errors} />,
        <ContainerStep5Component key={4} register={register} errors={errors} />,
    ]
    return (

        <>
            <Container>
                {children}
                {steps[currentStep]}
                <Buttons>
                    <ButtonBack onClick={prevStep} className={currentStep < 1 ? "disable" : ""}>Voltar</ButtonBack>
                    <ButtonNext onClick={handleSubmit(onSubmit)} className={currentStep > 2 ? "disable" : ""}>Próximo</ButtonNext>
                    <ButtonConfirm onClick={nextStep} className={currentStep < 3 || currentStep === 4 ? "disable" : ""}>Confirmar</ButtonConfirm>
                </Buttons>
            </Container>
        </>
    )
}