import React from "react";
import { ContainerStep, Title, SubTitle, LabelInput, Input, ErrorMessage } from "./style";

export const ContainerStep1Component = ({ register, errors }) => {
    return (
        <>
            <ContainerStep>
                <Title>Seus dados</Title>
                <SubTitle>Por favor insira seu nome, email e celular</SubTitle>

                <LabelInput>Nome</LabelInput>
                <Input
                    className={errors?.name && "input-error"}
                    type="text"
                    placeholder="Seu nome"
                    {...register("name", { required: "Nome é obrigatório" })}
                />
                {errors?.name && <ErrorMessage >{errors.name.message}</ErrorMessage>}

                <LabelInput>Email</LabelInput>
                <Input
                    className={errors?.email && "input-error"}
                    type="email"
                    placeholder="Seu e-mail"
                    {...register("email", {
                        required: "E-mail é obrigatório",
                        pattern: {
                            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                            message: "Digite um e-mail válido",
                        },
                    })}
                />
                {errors?.email && <ErrorMessage >{errors.email.message}</ErrorMessage>}

                <LabelInput>Celular</LabelInput>
                <Input
                    className={errors?.number && "input-error"}
                    type="number"
                    placeholder="Celular"
                    {...register("number", {
                        required: "Celular é obrigatório",
                        minLength: {
                            value: 11,
                            message: "O celular precisa ter 11 números",
                        },
                    })}
                />
                {errors?.number && <ErrorMessage>{errors.number.message}</ErrorMessage>}
            </ContainerStep>
        </>
    );
};
