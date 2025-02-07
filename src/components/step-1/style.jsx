import styled from "styled-components";
import { MediaSizes } from "../../style/media-sizes/media-sizes";


export const ContainerStep = styled.div`
    width: 50%;
    background-color: transparent;
    position: absolute;
    top: 75px;
    right: 80px;
    margin-bottom: 100px;
    @media (max-width: ${MediaSizes.desktopSmall}) {
        background-color: #fff;
        padding: 40px 30px;
        width: 80%;
        position: absolute;
        top: 100px;
        right: 50%;
        transform: translateX(50%);
        border-radius: 10px;    
    };
    @media (max-width: ${MediaSizes.tablet}) {
        width: 90%;    
    }
`

export const Title = styled.h1`
`

export const SubTitle = styled.h2`
`

export const LabelInput = styled.label`
`

export const Input = styled.input`
    color: var(--primary-color);
    @media (max-width: ${MediaSizes.mobile}) {
        height: 36px;
        padding-left: 15px
    }
    &.input-error {
        border: 1px solid var(--error-color)
    };
`

export const DivInput = styled.div`
    
`

export const ErrorMessage = styled.p`
        color: var(--error-color);
        font-size: 14px;
        transform: translateY(-125%)
    
`

