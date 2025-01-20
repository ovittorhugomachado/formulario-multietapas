import { Container, ButtonNext, ButtonBack, Buttons } from "./style";

export const Main = ({children}) => {
    return (
        <>
            <Container>
                {children}
                <Buttons>
                    <ButtonBack>Voltar</ButtonBack>
                    <ButtonNext>Próximo</ButtonNext>
                </Buttons>

            </Container>
        </>
    )
}