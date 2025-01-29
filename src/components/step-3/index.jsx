import { DivAdditionals, Additional, AdditionalName, ContainerStep, SubTitle, Title, CheckBox, NameDescription, DivText, PriceAdditional } from "./style";
import { PaymentContext, plans } from "../contexts/paymentContext";
import { useContext } from "react";

export const ContainerStep3Component = () => {
    const { payment } = useContext(PaymentContext)

    const { listAdditionals, setListAdditionals, addAdditional } = useContext(PaymentContext)
    
    const list = payment.additionals



    return (
        <ContainerStep>
            <Title>Adicionais</Title>
            <SubTitle>Adicionais para melhorar sua experiência de jogo</SubTitle>
            <DivAdditionals>
                {list.map((additional) => (
                    <Additional
                    key={additional.key}
                    onClick={() => addAdditional(additional.name)}
                    className={listAdditionals.includes(additional.name) ? 'active' : ''}
                    >
                    <CheckBox 
                    type="checkbox"
                    checked={listAdditionals.includes(additional.name)}
                    readOnly/>
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
