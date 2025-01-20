import { DivPlans, Plan, PricePlan, Step2, SubTitle, Title, NamePlan, ButtonToggle, DivToggle, TextToggle } from "./style";
import { useState } from "react";

export const Step2Component = () => {
    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive((prev) => !prev);
    };

    return (
        <>
            <Step2>
                <Title>Selecione seu plano</Title>
                <SubTitle>Você tem a opção de cobrança mensal ou anual</SubTitle>
                <DivPlans>
                    <Plan>
                        <img src="/icon-arcade.svg" alt="" />
                        <NamePlan>Arcade</NamePlan>
                        <PricePlan>R$10 p/ mês</PricePlan>
                    </Plan>
                    <Plan>
                        <img src="/icon-advanced.svg" alt="" />
                        <NamePlan>Advanced</NamePlan>
                        <PricePlan>R$20 p/ mês</PricePlan>
                    </Plan>
                    <Plan className="active">
                        <img src="/icon-pro.svg" alt="" />
                        <NamePlan>Pro</NamePlan>
                        <PricePlan>R$30 p/ mês</PricePlan>
                    </Plan>
                    <DivToggle>
                        <TextToggle isActive>Por mês</TextToggle>
                        <ButtonToggle />
                        <TextToggle>Por ano</TextToggle>
                    </DivToggle>
                </DivPlans>


            </Step2>
        </>
    )
}