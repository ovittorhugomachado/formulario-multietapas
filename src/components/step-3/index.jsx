import { useContext } from "react";
import { AdditionalsContext } from "../contexts/additionalsContext";
import { PaymentContext } from "../contexts/paymentContext";
import { ContainerStep, Title, SubTitle, DivAdditionals, Additional, CheckBox, NameDescription, DivText, PriceAdditional, AdditionalName } from "./style";
import { PlanContext } from "../contexts/planContext";

export const ContainerStep3Component = () => {
    const { payment } = useContext(PaymentContext);
    const { plan } = useContext(PlanContext) // Obtém os planos e adicionais do pagamento selecionado
    const { additionals, addAdditional } = useContext(AdditionalsContext); // Obtém os adicionais selecionados

    console.log(plan)
    console.log(payment.plans[plan])
    console.log(`pagemento tipo: ${payment.name} planio selecionado: ${payment.plans[plan].name}`)


    

    return (
        <ContainerStep>
            <Title>Adicionais</Title>
            <SubTitle>Adicionais para melhorar sua experiência de jogo</SubTitle>
            <DivAdditionals>
                {payment.additionals.map((additional) => (
                    <Additional
                        key={additional.key}
                        onClick={() => addAdditional(additional)}
                        className={additionals.some(a => a.key === additional.key) ? "active" : ""}
                    >
                        <CheckBox 
                            type="checkbox"
                            checked={additionals.some(a => a.key === additional.key)}
                            readOnly
                        />
                        <DivText>
                            <AdditionalName>{additional.name}</AdditionalName>
                            <NameDescription>{additional.description}</NameDescription>
                        </DivText>
                        <PriceAdditional>R$ {additional.price + payment.suffix}</PriceAdditional>
                    </Additional>
                ))}
            </DivAdditionals>
        </ContainerStep>
    );
};