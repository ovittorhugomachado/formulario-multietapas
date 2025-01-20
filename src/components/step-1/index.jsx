import { Step1, Title, SubTitle, LabelInput, Input } from "./style";

export const Step1Component = () => {
    return (
        <>
            <Step1>
                <Title>Seus dados</Title>
                <SubTitle>Por favor insira seu nome, email e celular</SubTitle>
                <LabelInput>Nome</LabelInput>
                <Input type="text" placeholder="Digite seu nome"></Input>
                <LabelInput>Email</LabelInput>
                <Input type="text" placeholder="Digite seu email"></Input>
                <LabelInput>Celular</LabelInput>
                <Input type="text" placeholder="Digite seu número"></Input>


            </Step1>

        </>
    )
}