import { DivPlans, Plan, PricePlan, ContainerStep, SubTitle, Title, NamePlan, ButtonToggle, DivToggle, TextToggle, TextPlan } from "./style";
import { paymentContext, selectPayment } from "../contexts/paymentContext";
import { planContext, plans } from "../contexts/planContext";

import { useContext } from "react";

export const ContainerStep2Component = () => {
    console.log(DivPlans)
    const handleClick = () => {
        changePayment();
    };
    const handleClickPlan = (i) => {
        handlePlan(i);
    };

    const { selectedPayment, changePayment } = useContext(paymentContext);

    const { selectedPlan, handlePlan } = useContext(planContext)

    console.log(selectedPlan)

    return (
        <>
            <ContainerStep>
                <Title>Selecione seu plano</Title>
                <SubTitle>Você tem a opção de cobrança mensal ou anual</SubTitle>
                <DivPlans>
                    <Plan
                        className={selectedPlan == 0 ? 'active' : ''}
                        onClick={() => handleClickPlan(0)}>
                        <img src="/icon-arcade.svg" alt="" />
                        <TextPlan>
                            <NamePlan>Arcade</NamePlan>
                            <PricePlan>{selectedPayment.plans.arcade}</PricePlan>
                        </TextPlan>
                    </Plan>
                    <Plan
                        className={selectedPlan == 1 ? 'active' : ''}
                        onClick={() => handleClickPlan(1)}>
                        <img src="/icon-advanced.svg" alt="" />
                        <TextPlan>
                            <NamePlan>Advanced</NamePlan>
                            <PricePlan>{selectedPayment.plans.advanced}</PricePlan>
                        </TextPlan>
                    </Plan >
                    <Plan
                        className={selectedPlan == 2 ? 'active' : ''}
                        onClick={() => handleClickPlan(2)}> {/*classname teste */}
                        <img src="/icon-pro.svg" alt="" />
                        <TextPlan>
                            <NamePlan>Pro</NamePlan>
                            <PricePlan>{selectedPayment.plans.pro}</PricePlan>
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