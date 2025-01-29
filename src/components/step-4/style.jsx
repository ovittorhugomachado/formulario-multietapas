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
        height: 430px;
        width: 90%;
        padding-top: 30px;
        };
    @media (max-width: ${MediaSizes.mobile}) {
        padding-left: 10px;    
        padding-right: 10px; 
    };
`

export const Title = styled.h1`
`

export const SubTitle = styled.h2`
`

export const PlanFinish = styled.div`
    width: 100%;
    border-bottom: 1px solid var(--secondary-color);
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between
`
export const Text = styled.div`
    text-align: start;
`
export const PlanName = styled.h3`
`
export const ChangePlan = styled.a`
    color: var(--secondary-color);;
    cursor: pointer;
    font-size: 18px;
    transition: 0.2s;
    &:hover{
        border-bottom: 1px solid color: var(--secondary-color);;
        color: color: var(--secondary-color);
    }
`
export const PlanPrice = styled.h5`
    color: var(--primary-color);;
    font-size: 20px
`

export const Item = styled.h2`
    color: var(--secondary-color);
    font-size: 18px;
    font-weight: 400;
    margin: 20px 0;
    display: flex;
    justify-content: space-between
`

export const PriceItem = styled.span`
    color: var(--primary-color)
`

export const Total = styled.div`
    color: var(--secondary-color);
    font-size: 18px;
    font-weight: 400;
    margin: 43px 0;
    display: flex;
    justify-content: space-between
`

export const PriceTotal = styled.span`
    color: var(--purple);
    font-size: 25px;
    font-weight: 700;
    
`