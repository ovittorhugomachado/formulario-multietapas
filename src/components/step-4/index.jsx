import { ChangePlan, ContainerStep, PlanFinish, PlanName, SubTitle, Title, Total, Text, PlanPrice, Item, PriceItem, PriceTotal } from "./style"
import { useContext } from "react"
import { PaymentContext } from "../contexts/paymentContext"
import { PlanContext } from "../contexts/planContext"
import { AdditionalsContext } from "../contexts/additionalsContext"

export const ContainerStep4Component = () => {

const { payment } = useContext(PaymentContext)
const { plan } = useContext(PlanContext)
const { additionals } = useContext(AdditionalsContext)

console.log(payment.plans[plan].name)

const pricePlan = payment.plans[plan].price
const priceAdditionals = additionals.reduce((acc, item) => acc + item.price, 0);
// const priceAdditionals = i.price

console.log(payment.payment)


    return (
        <>
            <ContainerStep>
                <Title>Resumo</Title>
                <SubTitle>Confira abaixo o resumo detalhado das suas assinaturas</SubTitle>
                <PlanFinish>
                    <Text>
                        <PlanName>{payment.plans[plan].name}</PlanName>
                        <ChangePlan>trocar plano</ChangePlan>
                    </Text>
                    <PlanPrice>R$ {payment.plans[plan].price + payment.suffix}</PlanPrice>

                </PlanFinish>
                {additionals.map((i) => (
                    <Item key={i.key}>
                    {i.name}
                    {console.log(i.key)}
                    <PriceItem>R$ {i.price + payment.suffix}</PriceItem>
                </Item>
                ))}
                
    

                <Total>Total<PriceTotal>R$ {pricePlan + priceAdditionals + payment.suffix}</PriceTotal></Total>

            </ContainerStep>
        </>
    )
}