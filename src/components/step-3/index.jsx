import { DivAdditionals, Additional, AdditionalName, ContainerStep, SubTitle, Title, CheckBox, NameDescription, DivText, PriceAdditional } from "./style";
import { paymentContext } from "../contexts/paymentContext";
import { useContext } from "react";

export const ContainerStep3Component = () => {
    console.log(useContext(paymentContext))
    const { selectedPayment, changePayment} = useContext(paymentContext)
    return (
        <>
            <ContainerStep>
                <Title>Adicionais</Title>
                <SubTitle>Adicionais para melhorar sua experiência de jogo</SubTitle>
                <DivAdditionals>
                    <Additional>
                        <CheckBox type="checkbox" />
                        <DivText>
                            <AdditionalName>Serviço online</AdditionalName>
                            <NameDescription>Acesso parcial</NameDescription>
                        </DivText>
                        <PriceAdditional>{selectedPayment.additionals.onlineServices}</PriceAdditional>
                    </Additional>
                    <Additional>
                    <CheckBox type="checkbox" />
                        <DivText>
                            <AdditionalName>Mais memória</AdditionalName>
                            <NameDescription>1TB extra de memória na nuvem</NameDescription>
                        </DivText>
                        <PriceAdditional>{selectedPayment.additionals.largerStorage}</PriceAdditional>
                    </Additional>
                    <Additional className="active">
                    <CheckBox type="checkbox" />
                        <DivText>
                            <AdditionalName>Perfil personalizável</AdditionalName>
                            <NameDescription>Customize o tema do seu perfil</NameDescription>
                        </DivText>
                        <PriceAdditional>{selectedPayment.additionals.customizableProfile}</PriceAdditional>
                    </Additional>
                </DivAdditionals>

            </ContainerStep>
        </>
    )
}