import { Description, DivThanks, Title } from "./style";

export const ContainerStep5Component = () => {
    return (
        <>
            <DivThanks>
                <img width={90} src="/icon-thank-you.svg" alt="" />
                <Title>Obrigado!</Title>
                <Description>Recebemos suas informações com sucesso e em breve entraremos em contato.
                    <br />
                    <br />
                    Se precisar de algo, não hesite em nos chamar. Agradecemos pelo seu tempo e confiança! 😊
                    <br />
                    <br />
                    Atenciosamente, Vitor Hugo Machado</Description>
            </DivThanks>
        </>
    )
}