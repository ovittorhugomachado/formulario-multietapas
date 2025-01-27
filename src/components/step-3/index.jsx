import { DivAdditionals, Additional, AdditionalName, ContainerStep, SubTitle, Title, CheckBox, NameDescription, DivText, PriceAdditional } from "./style";
import { useContext } from "react";
import { AdditionalsContext } from "../contexts/additionalsContext";
import { paymentContext } from "../contexts/paymentContext";

export const ContainerStep3Component = () => {
    const { additionals, addOrRemove } = useContext(AdditionalsContext);
    const { selectedPayment } = useContext(paymentContext);

    // Dados dinâmicos dos adicionais
    const additionalsList = [
        {
            id: 0,
            name: "Serviço online",
            description: "Acesso parcial",
            price: selectedPayment.additionals.onlineServices,
        },
        {
            id: 1,
            name: "Mais memória",
            description: "1TB extra de memória na nuvem",
            price: selectedPayment.additionals.largerStorage,
        },
        {
            id: 2,
            name: "Perfil personalizável",
            description: "Customize o tema do seu perfil",
            price: selectedPayment.additionals.customizableProfile,
        },
    ];
    
    return (
        <ContainerStep>
            <Title>Adicionais</Title>
            <SubTitle>Adicionais para melhorar sua experiência de jogo</SubTitle>
            <DivAdditionals>
                {additionalsList.map((additional) => (
                    <Additional
                        key={additional.id}
                        onClick={() => addOrRemove(additional.id)} // Chama a função passando o ID
                        className={additionals.includes(additional.id) ? "active" : ""} // Adiciona classe "active" se estiver selecionado
                    >
                        
                        <CheckBox
                            type="checkbox"
                            checked={additionals.includes(additional.id)} // Controla o estado do checkbox
                            readOnly // Evita warnings no React
                        />
                        <DivText>
                            <AdditionalName>{additional.name}</AdditionalName>
                            <NameDescription>{additional.description}</NameDescription>
                        </DivText>
                        <PriceAdditional>{additional.price}</PriceAdditional>
                    </Additional>
                ))}
            </DivAdditionals>
        </ContainerStep>
    );
};
