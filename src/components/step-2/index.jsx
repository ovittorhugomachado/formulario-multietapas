import { DivPlans, Plan, PricePlan, ContainerStep, SubTitle, Title, NamePlan, ButtonToggle, DivToggle, TextToggle, TextPlan } from "./style";
import { PaymentContext } from "../contexts/paymentContext";
import { PlanContext } from "../contexts/planContext";
import { useContext } from "react";
import { PlanName } from "../step-4/style";

export const ContainerStep2Component = () => {

    const { payment, changePayment } = useContext(PaymentContext)

    const { plan, setPlan } = useContext(PlanContext)

    const plans = payment.plans

    return (
        <>
            <ContainerStep>
                <Title>Selecione seu plano</Title>
                <SubTitle>Você tem a opção de cobrança mensal ou anual</SubTitle>
                <DivPlans>
                    {plans.map((i) => (
                        <Plan
                            key={plans}
                            onClick={() => setPlan(i.key)}
                            className={i.key === plan ? 'active' : ''}
                        >
                            <img src={i.image} alt="" />
                            <TextPlan>
                                <NamePlan>{i.name}</NamePlan>
                                <PricePlan>{i.price}</PricePlan>
                            </TextPlan>

                        </Plan>
                    ))}
                    <DivToggle>
                        <TextToggle className={payment.name === "month" ? "active" : ""}>Por mês</TextToggle>
                        <ButtonToggle prop={payment} onClick={changePayment} />
                        <TextToggle className={payment.name === "year" ? "active" : ""}>Por ano</TextToggle>
                    </DivToggle>
                </DivPlans>
            </ContainerStep>
        </>
    )
}