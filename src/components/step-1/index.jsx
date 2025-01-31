import React from "react";
import { ContainerStep, Title, SubTitle, LabelInput, Input, ErrorMessage } from "./style";
import ReactInputMask from "react-input-mask";

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
                        required: "E-mail é obrigatório", //faz com que o input seja obrigatório
                        pattern: {
                            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                            message: "digite um endereço de email válido" //garante que o email digitado está no formato correto                           message: "Digite um e-mail válido",
                        },
                    })}
                />
                {errors?.email && <ErrorMessage >{errors.email.message}</ErrorMessage>}

                <LabelInput>Celular</LabelInput>
                <ReactInputMask
                    style={{ color: "var(--primary-color)", fontSize: "15px"}}
                    mask="(99) 99999-9999"
                    maskChar={null}  // Remove os caracteres de máscara ao digitar
                    placeholder="(99) 99999-9999"
                    className={errors?.number && "input-error"}
                    {...register("number", {
                        required: "Celular é obrigatório",
                        pattern: {
                            value: /^\(\d{2}\) \d{5}-\d{4}$/,
                            message: "Formato inválido. Use (99) 99999-9999",
                        },
                    })}
                />
                {errors?.number && <ErrorMessage>{errors.number.message}</ErrorMessage>}
            </ContainerStep>
        </>
    );
};
