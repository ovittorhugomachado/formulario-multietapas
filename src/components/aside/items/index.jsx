import { NumberItem, InfoSteps, Info, InfoH3, InfoH4 } from "./style";
import { useContext } from "react";
import { StepContext } from "../../../contexts/stepContext";

export const Items = () => {

    const { currentStep } = useContext(StepContext)
    return (
        <>
            <InfoSteps>
                <NumberItem className={currentStep == 0 ? "active" : ""}>1</NumberItem>
                <Info>
                    <InfoH4>PASSO 1</InfoH4>
                    <InfoH3>SEUS DADOS</InfoH3>
                </Info>

            </InfoSteps>
            <InfoSteps>
                <NumberItem className={currentStep == 1 ? "active" : ""}>2</NumberItem>
                <Info>
                    <InfoH4>PASSO 2</InfoH4>
                    <InfoH3>PLANO</InfoH3>
                </Info>

            </InfoSteps>
            <InfoSteps>
                <NumberItem className={currentStep == 2 ? "active" : ""}>3</NumberItem>
                <Info>
                    <InfoH4>PASSO 3</InfoH4>
                    <InfoH3>ADICIONAIS</InfoH3>
                </Info>

            </InfoSteps>
            <InfoSteps>
                <NumberItem className={currentStep == 3 ? "active" : ""}>4</NumberItem>
                <Info>
                    <InfoH4>PASSO 4</InfoH4>
                    <InfoH3>SUMÁRIO</InfoH3>
                </Info>

            </InfoSteps>

        </>

    )
}