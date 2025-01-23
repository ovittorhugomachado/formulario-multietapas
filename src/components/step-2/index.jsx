import { DivPlans, Plan, PricePlan, ContainerStep, SubTitle, Title, NamePlan, ButtonToggle, DivToggle, TextToggle, TextPlan } from "./style";
import { useState } from "react";

export const ContainerStep2Component = () => {
    {/*const [isActive, set] = useState(false);

    const handleToggle = () => {
        setIsactive((prev) => !prev);
    };*/}//Não sei se vai precisar

    return (
        <>
            <ContainerStep>
                <Title>Selecione seu plano</Title>
                <SubTitle>Você tem a opção de cobrança mensal ou anual</SubTitle>
                <DivPlans>
                    <Plan>
                        <img src="/icon-arcade.svg" alt="" />
                        <TextPlan>
                            <NamePlan>Arcade</NamePlan>
                            <PricePlan>R$10 p/ mês</PricePlan>
                        </TextPlan>
                    </Plan>
                    <Plan>
                        <img src="/icon-advanced.svg" alt="" />
                        <TextPlan>
                            <NamePlan>Advanced</NamePlan>
                            <PricePlan>R$20 p/ mês</PricePlan>
                        </TextPlan>
                    </Plan>
                    <Plan className="active"> {/*classname teste */}
                        <img src="/icon-pro.svg" alt="" />
                        <TextPlan>
                            <NamePlan>Pro</NamePlan>
                            <PricePlan>R$30 p/ mês</PricePlan>
                        </TextPlan>

                    </Plan>
                    <DivToggle>
                        <TextToggle $isActive>Por mês</TextToggle>
                        <ButtonToggle />
                        <TextToggle>Por ano</TextToggle>
                    </DivToggle>
                </DivPlans>


            </ContainerStep>
        </>
    )
}