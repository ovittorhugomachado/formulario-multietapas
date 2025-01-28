import { ChangePlan, ContainerStep, PlanFinish, PlanName, SubTitle, Title, Total, Text, PlanPrice, Items, PriceItem, PriceTotal } from "./style"
import { useContext } from "react";
import { AdditionalsContext } from "../contexts/additionalsContext";
import { paymentContext } from "../contexts/paymentContext";
import { planContext } from "../contexts/planContext";

export const ContainerStep4Component = () => {

    const { selectedPayment, changePayment } = useContext(paymentContext);
    console.log(selectedPayment)

    const { selectedPlan, handlePlan } = useContext(planContext)
    return (
        <>
            <ContainerStep>
                <Title>Resumo</Title>
                <SubTitle>Confira abaixo o resumo detalhado das suas assinaturas</SubTitle>
                <PlanFinish>
                    <Text>
                        <PlanName>{selectedPlan}</PlanName>
                        <ChangePlan>trocar plano</ChangePlan>
                    </Text>
                    <PlanPrice>{selectedPlan.price}</PlanPrice>

                </PlanFinish>

                <Items>Serviço online<PriceItem>+R$ 1/mês</PriceItem></Items>
                <Items>Serviço online<PriceItem>+R$ 1/mês</PriceItem></Items>

                <Total>Total (por mês)<PriceTotal>R$ 12/mês</PriceTotal></Total>

            </ContainerStep>
        </>
    )
}