import { ChangePlan, ContainerStep, PlanFinish, PlanName, SubTitle, Title, Total, Text, PlanPrice, Items, PriceItem, PriceTotal } from "./style"


export const ContainerStep4Component = () => {
    return (
        <>
            <ContainerStep>
                <Title>Resumo</Title>
                <SubTitle>Confira abaixo o resumo detalhado das suas assinaturas</SubTitle>
                <PlanFinish>
                    <Text>
                        <PlanName>Arcade (mensal)</PlanName>
                        <ChangePlan>trocar plano</ChangePlan>
                    </Text>
                    <PlanPrice>R$ 10/mês</PlanPrice>
                    
                </PlanFinish>
                
                    <Items>Serviço online<PriceItem>+R$ 1/mês</PriceItem></Items>
                    <Items>Serviço online<PriceItem>+R$ 1/mês</PriceItem></Items>
                
                <Total>Total (por mês)<PriceTotal>R$ 12/mês</PriceTotal></Total>

            </ContainerStep>
        </>
    )
}