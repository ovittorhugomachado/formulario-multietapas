import { DivPlans, Plan, PricePlan, ContainerStep, SubTitle, Title, NamePlan, ButtonToggle, DivToggle, TextToggle, TextPlan } from "./style";
import { paymentContext, selectPayment } from "../contexts/paymentContext";
import { planContext } from "../contexts/planContext";

import { useContext } from "react";

export const ContainerStep2Component = () => {
    const handleClick = () => {
        changePayment();
    };
    const handleClickPlan = (i) => {
        handlePlan(i);
    };

    const { selectedPayment, changePayment } = useContext(paymentContext);

    const { selectedPlan, handlePlan } = useContext(planContext)
    console.log(`plano selecionado: ${selectedPlan}, com pagamento: ${selectedPayment === selectPayment.month ? "Pagamento mensal" : "Pagamento anual"}`)

    return (
        <>
            <ContainerStep>
                <Title>Selecione seu plano</Title>
                <SubTitle>Você tem a opção de cobrança mensal ou anual</SubTitle>
                <DivPlans>
                    <Plan
                        className={selectedPlan == 'Arcade' ? 'active' : ''}
                        onClick={() => handleClickPlan('Arcade')}>
                        <img src="/icon-arcade.svg" alt="" />
                        <TextPlan>
                            <NamePlan>Arcade</NamePlan>
                            <PricePlan>{selectedPayment.plans.arcade.price}</PricePlan>
                        </TextPlan>
                    </Plan>
                    <Plan
                        className={selectedPlan == 'Advanced' ? 'active' : ''}
                        onClick={() => handleClickPlan('Avanced')}>
                        <img src="/icon-advanced.svg" alt="" />
                        <TextPlan>
                            <NamePlan>Advanced</NamePlan>
                            <PricePlan>{selectedPayment.plans.advanced.price}</PricePlan>
                        </TextPlan>
                    </Plan >
                    <Plan
                        className={selectedPlan == 'pro' ? 'active' : ''}
                        onClick={() => handleClickPlan('Pro')}> {/*classname teste */}
                        <img src="/icon-pro.svg" alt="" />
                        <TextPlan>
                            <NamePlan>Pro</NamePlan>
                            <PricePlan>{selectedPayment.plans.pro.price}</PricePlan>
                        </TextPlan>

                    </Plan>
                    <DivToggle>
                        <TextToggle className={selectedPayment === selectPayment.month ? "active" : ""}>Por mês</TextToggle>
                        <ButtonToggle selectedPayment={selectedPayment} onClick={handleClick} />
                        <TextToggle className={selectedPayment === selectPayment.year ? "active" : ""}>Por ano</TextToggle>
                    </DivToggle>
                </DivPlans>


            </ContainerStep>
        </>
    )
}