import React from "react"
import { useForm } from "react-hook-form";
import validator from 'validator'
import { ContainerStep, Title, SubTitle, LabelInput, Input } from "./style";

export const ContainerStep1Component = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    };
    console.log({ errors })

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
                    {...register('name', { required: true })}
                ></Input>
                {errors?.name?.type === 'required' && <p className="error-message">Name is required</p>}

                <LabelInput>Email</LabelInput>
                <Input
                    className={errors?.email && "input-error"}
                    type="email"
                    placeholder="Seu e-mail"
                    {...register('email',
                        {
                            required: true,
                            validate: (value) => validator.isEmail(value),
                        })}></Input>
                {errors?.email?.type === 'required' && <p className="error-message">Email is required</p>}
                {errors?.email?.type === 'validate' && <p className="error-message">Digite um email válido</p>}

                <LabelInput>Celular</LabelInput>
                <Input
                    className={errors?.name && "input-error"}
                    type="number"
                    placeholder="Celular"
                    {...register('number', {
                        required: true,
                        minLength: 7
                    })}>
                </Input>
                {errors?.number?.type === 'required' && <p className="error-message">Insira seu número de celular</p>}
                {errors?.number?.type === 'minLength' && ( 
                    <p className="error-message">Seu celular precisa ter 11 números</p>
                )}
                <button onClick={() => { handleSubmit(onSubmit)() }}>Criar conta</button>
            </ContainerStep >
        </>
    )
}