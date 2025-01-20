import { NumberItem, InfoSteps, Info, InfoH3, InfoH4 } from "./style";

export const Items = () => {
    return (
        <>
            <InfoSteps>
                <NumberItem className="active">1</NumberItem>
                <Info>
                    <InfoH4>PASSO 1</InfoH4>
                    <InfoH3>SEUS DADOS</InfoH3>
                </Info>

            </InfoSteps>
            <InfoSteps>
                <NumberItem>2</NumberItem>
                <Info>
                    <InfoH4>PASSO 2</InfoH4>
                    <InfoH3>PLANO</InfoH3>
                </Info>

            </InfoSteps>
            <InfoSteps>
                <NumberItem>3</NumberItem>
                <Info>
                    <InfoH4>PASSO 3</InfoH4>
                    <InfoH3>ADICIONAIS</InfoH3>
                </Info>

            </InfoSteps>
            <InfoSteps>
                <NumberItem>4</NumberItem>
                <Info>
                    <InfoH4>PASSO 4</InfoH4>
                    <InfoH3>SUMÁRIO</InfoH3>
                </Info>

            </InfoSteps>

        </>

    )
}