import styled from "styled-components";

export const ContainerStep = styled.div`
    width: 50%;
    height: 320px;
    background-color: transparent;
    position: absolute;
    top: 75px;
    right: 80px
`

export const Title = styled.h1`
    color: hsl(213, 96%, 18%);
`

export const SubTitle = styled.h2`
    color: hsl(0, 0.80%, 50.60%);
    font-size: 16px;
    font-weight: 400;
    margin: 5px 0 45px
`
export const PlanFinish = styled.div`
    width: 100%;
    border-bottom: 1px solid hsl(0, 1.60%, 74.90%);
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between
`
export const Text = styled.div`

`
export const PlanName = styled.h3`
    color:hsl(213, 96%, 18%);
`
export const ChangePlan = styled.a`
    color: hsl(0, 0.80%, 50.60%);
    cursor: pointer;
    font-size: 18px;
    transition: 0.2s;
    &:hover{
        border-bottom: 1px solid hsl(0, 1.30%, 29.40%);
        color: hsl(0, 1.30%, 29.40%)
    }
`
export const PlanPrice = styled.h5`
    color: hsl(213, 96%, 18%);
    font-size: 20px
`

export const Items = styled.h2`
    color: hsl(0, 0.80%, 50.60%);
    font-size: 18px;
    font-weight: 400;
    margin: 20px 0;
    display: flex;
    justify-content: space-between
`

export const PriceItem = styled.span`
    color: hsl(213, 96%, 18%)
`

export const Total = styled.div`
    color: hsl(0, 0.80%, 50.60%);
    font-size: 18px;
    font-weight: 400;
    margin: 43px 0;
    display: flex;
    justify-content: space-between
`

export const PriceTotal = styled.span`
    color: hsl(243, 100%, 68%);
    font-size: 25px;
    font-weight: 700;
    
`