import styled from "styled-components";
import { MediaSizes } from "../../style/media-sizes/media-sizes";

export const ContainerStep = styled.div`
    width: 50%;
    background-color: transparent;
    position: absolute;
    top: 75px;
    right: 80px;
    margin-bottom: 40px;
    @media (max-width: ${MediaSizes.desktopSmall}) {
        background-color: #fff;
        padding: 40px 30px;
        width: 80%;
        height: 400px;
        position: absolute;
        top: 100px;
        right: 50%;
        transform: translateX(50%);
        border-radius: 10px;
        text-align: center;     
    };
    @media (max-width: ${MediaSizes.tablet}) {
        height: 490px;
        width: 90%;
        padding-top: 30px;
    };
`

export const Title = styled.h1``

export const SubTitle = styled.h2`
`

export const DivPlans = styled.div`
    width: 500px;
    display: flex;
    position: absolute;
    right: 50%;
    transform: translateX(50%);;
    justify-content: center;
    flex-wrap: wrap;
    @media (max-width: 880px) {
        justify-content: end;
    }
    @media (max-width: ${MediaSizes.desktopSmall}) {
        width: 95%;
        justify-content: center;  
    };
`

export const Plan = styled.div`
    text-align: start;
    width: 150px;
    height: 100%;
    border: 1px solid hsl(0, 1.60%, 74.90%);
    margin: 0 6px;
    border-radius: 10px;
    padding: 18px;
    cursor: pointer;
    &.active {
        border-color: hsl(213, 96%, 18%);
        background-color: hsl(212, 100.00%, 89.90%);
        };
    @media (max-width: 880px) {
        width: 130px;  
    };
    @media (max-width: ${MediaSizes.tablet}) {
        width: 100%;
        height: 85px;
        margin-bottom: 10px; 
        display: flex; 
        text-align: start;
    };
`

export const Radio = styled.input`
    opacity: 0;
    position: absolute;
    width: 0;
    height: 0
`

export const TextPlan = styled.div`

    width: 100%;
    @media (max-width: 565px) {
        width: 50%; 
        text-align: start;
        margin-left: 20px
    };
`

export const NamePlan = styled.h3`
    margin: 35px 0 5px 0;
    @media (max-width: ${MediaSizes.tablet}) {
        margin-top: 0; 
    };
`

export const PricePlan = styled.h4`
    font-size: 16px;
`

export const DivToggle = styled.div`
    width: 100%;
    height: 40px;
    position: absolute;
    bottom: -80px;
    display: flex;
    justify-content: center;
    gap: 12px;
    @media (max-width: ${MediaSizes.mobile}) {
        bottom: -50px;
        }
`

export const ButtonToggle = styled.button`
    width: 42px;
    height: 20px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    background-color: hsl(213, 96%, 18%);
    color: white;
    font-weight: bold;
    position: relative;
    transition: background-color 0.3s ease;

    &:before {
        content: "";
        position: absolute;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: white;
        top: 10%;
        left: ${({ prop }) => prop.positionXButton};
        transition: 0.4s ease;
    }
`

export const TextToggle = styled.h3`
    color: var(--secondary-color);
    transition: left 0.3s ease;
    &.active {
        color: var(--primary-color)
    }
`;

export const ErrorMessage = styled.p`
    color: var(--error-color);
    font-size: 14px;
    width: 100%;
    height: 40px;
    position: absolute;
    bottom: -50px;
    display: flex;
    gap: 12px;
    justify-content: center;      
`
