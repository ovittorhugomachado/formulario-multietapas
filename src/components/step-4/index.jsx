import { ChangePlan, ContainerStep, PlanFinish, PlanName, SubTitle, Title, Total, Text, PlanPrice, Item, PriceItem, PriceTotal } from "./style"
import { useContext } from "react"
import { PaymentContext } from "../contexts/paymentContext"
import { PlanContext } from "../contexts/planContext"
import { Additional } from "../step-3/style"

export const ContainerStep4Component = () => {

const { payment, listAdditionals, setListAdditionals, addAdditional } = useContext(PaymentContext)
const { plan, setPlan } = useContext(PlanContext)



console.log(Additional.key)
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
                    <PlanPrice>{payment.plans[plan].price}</PlanPrice>

                </PlanFinish>
                    {listAdditionals.map((i) => (
                        <Item>
                        {i}
                        <PriceItem></PriceItem>
                    </Item>
                    ))}
                    <Item>

                        <PriceItem> ss</PriceItem>
                    </Item>
    

                <Total>Total (por mês)<PriceTotal>R$ 12/mês</PriceTotal></Total>

            </ContainerStep>
        </>
    )
}