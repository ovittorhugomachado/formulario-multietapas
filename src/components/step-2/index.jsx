import { DivPlans, Plan, PricePlan, ContainerStep, SubTitle, Title, NamePlan, ButtonToggle, DivToggle, TextToggle, TextPlan } from "./style";
import { paymentContext, selectPayment } from "../contexts/paymentContext";

import { useContext } from "react";

export const ContainerStep2Component = () => {
    console.log(DivPlans)
    const handleClick = () => {
        changePayment();
    };

    const {selectedPayment, changePayment} = useContext(paymentContext);


    return (
        <>
            <ContainerStep>
                <Title>Selecione seu plano</Title>
                <SubTitle>Você tem a opção de cobrança mensal ou anual</SubTitle>
                <DivPlans>
                    <Plan key={0}>
                        <img src="/icon-arcade.svg" alt="" />
                        <TextPlan>
                            <NamePlan>Arcade</NamePlan>
                            <PricePlan>{selectedPayment.plans.arcade}</PricePlan>
                        </TextPlan>
                    </Plan>
                    <Plan key={1}>
                        <img src="/icon-advanced.svg" alt="" />
                        <TextPlan>
                            <NamePlan>Advanced</NamePlan>
                            <PricePlan>{selectedPayment.plans.advanced}</PricePlan>
                        </TextPlan>
                    </Plan >
                    <Plan key={2} className="active"> {/*classname teste */}
                        <img src="/icon-pro.svg" alt="" />
                        <TextPlan>
                            <NamePlan>Pro</NamePlan>
                            <PricePlan>{selectedPayment.plans.pro}</PricePlan>
                        </TextPlan>

                    </Plan>
                    <DivToggle>
                        <TextToggle className={selectedPayment === selectPayment.month ? "active" : ""}>Por mês</TextToggle>
                        <ButtonToggle selectedPayment={selectedPayment} onClick={handleClick}/>
                        <TextToggle className={selectedPayment === selectPayment.year ? "active" : ""}>Por ano</TextToggle>
                    </DivToggle>
                </DivPlans>


            </ContainerStep>
        </>
    )
}