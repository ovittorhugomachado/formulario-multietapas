import styled from "styled-components";

export const ContainerStep = styled.div`
    width: 50%;
    height: 320px;
    background-color: transparent;
    position: absolute;
    top: 75px;
    right: 80px;
    margin-bottom: 40px;
    @media (max-width: 800px) {
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
    @media (max-width: 565px) {
        height: 500px;
        padding-top: 30px;
        
    };
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

export const DivPlans = styled.div`
    width: 500px;
    height: 160px;
    display: flex;
    position: absolute;
    right: 50%;
    transform: translateX(50%);;
    justify-content: center;
    flex-wrap: wrap;
    @media (max-width: 880px) {
        justify-content: end;
    }
    @media (max-width: 800px) {
        width: 95%;
        justify-content: center;  
    };
    
    
    
`

export const Plan = styled.div`
    width: 150px;
    height: 100%;
    border: 1px solid hsl(0, 1.60%, 74.90%);
    margin: 0 6px;
    border-radius: 10px;
    padding: 18px;
    &.active {
        border-color: hsl(213, 96%, 18%);
        background-color: hsl(212, 100.00%, 89.90%);
        };
    @media (max-width: 880px) {
        width: 130px;  
    };
    @media (max-width: 565px) {
        width: 100%;
        height: 75px;
        justify-content: center; 
        margin-bottom: 10px; 
    };
    @media (max-width: 565px) {
        display: flex; 
        justify-content: start;
    };
`

export const TextPlan = styled.div`
    width: 100%;
    @media (max-width: 565px) {
        width: 50%; 
        text-align: start;
        margin-left: 20px
    };
`

export const NamePlan = styled.h4`
    font-size: 18px;
    color: hsl(213, 96%, 18%);
    margin: 35px 0 5px 0;
    @media (max-width: 565px) {
        margin-top: 0; 
    };
`

export const PricePlan = styled.h4`
    font-size: 18px;
    color: hsl(0, 0.80%, 50.60%);
    font-size: 16px;
    font-weight: 400;
`

export const DivToggle = styled.div`
    width: 100%;
    height: 40px;
    position: absolute;
    bottom: -80px;
    display: flex;
    justify-content: center;
    gap: 12px;
    @media (max-width: 565px) {
        bottom: -180px 
    };
    @media (max-width: 455px) {
        bottom: -150px 
    };
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
        top: 47%;
        left: ${(props) => (props.isActive ? "calc(100% - 35px)" : "3px")};
        transform: translateY(-50%);
        transition: left 0.3s ease;
    }
`

export const TextToggle = styled.h3`
    color: ${(props) => (props.isActive ? "hsl(213, 96%, 18%)" : "hsl(0, 1.60%, 74.90%)")}  
`