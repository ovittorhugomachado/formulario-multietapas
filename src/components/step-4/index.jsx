import { ChangePlan, ContainerStep, PlanFinish, PlanName, SubTitle, Title, Total, Text, PlanPrice, Item, PriceItem, PriceTotal, DivPlanMoreAdditionals } from "./style"
import { useContext } from "react"
import { PaymentContext } from "../../contexts/paymentContext"
import { PlanContext } from "../../contexts/planContext"
import { AdditionalsContext } from "../../contexts/additionalsContext"
import { StepContext } from "../../contexts/stepContext"

export const ContainerStep4Component = () => {

    const { changePlan } = useContext(StepContext)

    const { payment } = useContext(PaymentContext)

    const { plan } = useContext(PlanContext)

    const { additionals } = useContext(AdditionalsContext)

    const pricePlan = payment.plans[plan].price

    const priceAdditionals = additionals.reduce((acc, item) => acc + item.price, 0);

    return (
        <>
            <ContainerStep>
                <Title>Resumo</Title>
                <SubTitle>Confira abaixo o resumo detalhado das suas assinaturas</SubTitle>
                <DivPlanMoreAdditionals>
                    <PlanFinish>
                        <Text>
                            <PlanName>{payment.plans[plan].name}</PlanName>
                            <ChangePlan onClick={() => changePlan()}>trocar plano</ChangePlan>
                        </Text>
                        <PlanPrice>R$ {payment.plans[plan].price + payment.suffix}</PlanPrice>
                    </PlanFinish>
                    {additionals.map((i) => (
                        <Item key={i.key}>
                            {i.name}
                            <PriceItem>R$ {i.price + payment.suffix}</PriceItem>
                        </Item>
                    ))}
                </DivPlanMoreAdditionals>

                <Total>Total<PriceTotal>R$ {pricePlan + priceAdditionals + payment.suffix}</PriceTotal></Total>
            </ContainerStep>
        </>
    )
}