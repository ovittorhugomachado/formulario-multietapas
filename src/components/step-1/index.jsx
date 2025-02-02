import React from "react";
import { ContainerStep, Title, SubTitle, LabelInput, Input, ErrorMessage } from "./style";
import { IMaskInput } from "react-imask";

export const ContainerStep1Component = ({ register, errors, setValue }) => {
    return (
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
            {errors?.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

            <LabelInput>Email</LabelInput>
            <Input
                className={errors?.email && "input-error"}
                type="email"
                placeholder="Seu e-mail"
                {...register("email", { 
                    required: "E-mail é obrigatório",
                    pattern: {
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: "Digite um endereço de e-mail válido",
                    },
                })}
            />
            {errors?.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

            <LabelInput>Celular</LabelInput>
            <IMaskInput
                mask="(00) 00000-0000"
                placeholder="(99) 99999-9999"
                className={errors?.number && "input-error"}

                {...register("number", {
                    required: "Celular é obrigatório",
                    pattern: {
                        value: /^\(\d{2}\) \d{5}-\d{4}$/,
                        message: "Digite no formato (99) 99999-9999",
                    },
                    
                })}
                onAccept={(value) => {
                    // Atualiza o valor no react-hook-form
                    setValue("number", value, { shouldValidate: true });
                }}
            />
            {errors?.number && <ErrorMessage>{errors.number.message}</ErrorMessage>}
        </ContainerStep>
    );
};
