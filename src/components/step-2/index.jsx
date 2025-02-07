import { DivPlans, Plan, PricePlan, ContainerStep, SubTitle, Title, NamePlan, ButtonToggle, DivToggle, TextToggle, TextPlan, Radio, ErrorMessage } from "./style";
import { PaymentContext } from "../../contexts/paymentContext";
import { PlanContext } from "../../contexts/planContext";
import { useContext } from "react";

export const ContainerStep2Component = ({ register, errors, clearErrors }) => {

    const { payment, changePayment } = useContext(PaymentContext)

    const { plan, changePlan } = useContext(PlanContext)

    const plans = payment.plans

    return (
        <>
            <ContainerStep>
                <Title>Selecione seu plano</Title>
                <SubTitle>Você tem a opção de cobrança mensal ou anual</SubTitle>
                <DivPlans>
                    {plans.map((i) => (
                        <Plan
                            key={i.key}
                            onClick={() => {
                                changePlan(i.key);
                                clearErrors('plan')
                            }}
                            className={plan == i.key ? 'active' : ''}>
                            <img src={i.image} alt="" />
                            <TextPlan>
                                <NamePlan>{i.name}</NamePlan>
                                <PricePlan>R$ {i.price + payment.suffix}</PricePlan>
                            </TextPlan>
                            <Radio
                                type="radio"
                                value={i.key}
                                checked={plan === i.key}
                                {...register("plan", { required: "Selecione um plano!" })}
                            />
                        </Plan>
                    ))}
                    {errors.plan && <ErrorMessage style={{ color: "red" }}>{errors.plan.message}</ErrorMessage>}
                    <DivToggle>
                        <TextToggle className={payment.suffix === "/mês" ? "active" : ""}>Por mês</TextToggle>
                        <ButtonToggle prop={payment} onClick={changePayment} />
                        <TextToggle className={payment.suffix === "/ano" ? "active" : ""}>Por ano</TextToggle>
                    </DivToggle>
                    {errors.plan && <ErrorMessage style={{ color: "red" }}>{errors.plan.message}</ErrorMessage>}
                </DivPlans>

            </ContainerStep>
        </>
    )
}