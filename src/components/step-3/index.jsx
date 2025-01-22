import { DivAdditionals, Additional, AdditionalName, ContainerStep, SubTitle, Title, CheckBox, NameDescription, DivText, PriceAdditional } from "./style";

export const ContainerStep3Component = () => {
    return (
        <>
            <ContainerStep>
                <Title>Adicionais</Title>
                <SubTitle>Adicionais para melhorar sua experiência de jogo</SubTitle>
                <DivAdditionals>
                    <Additional>
                        <CheckBox type="checkbox" />
                        <DivText>
                            <AdditionalName>Serviço online</AdditionalName>
                            <NameDescription>Acesso parcial</NameDescription>
                        </DivText>
                        <PriceAdditional>+1 p/ mês</PriceAdditional>
                    </Additional>
                    <Additional>
                    <CheckBox type="checkbox" />
                        <DivText>
                            <AdditionalName>Serviço online</AdditionalName>
                            <NameDescription>Acesso parcial</NameDescription>
                        </DivText>
                        <PriceAdditional>+1 p/ mês</PriceAdditional>
                    </Additional>
                    <Additional className="active">
                    <CheckBox type="checkbox" />
                        <DivText>
                            <AdditionalName>Serviço online</AdditionalName>
                            <NameDescription>Acesso parcial</NameDescription>
                        </DivText>
                        <PriceAdditional>+1 p/ mês</PriceAdditional>
                    </Additional>
                </DivAdditionals>

            </ContainerStep>
        </>
    )
}