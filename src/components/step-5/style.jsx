import styled from "styled-components";

export const DivThanks = styled.div`
    height: 350px;
    padding: 40px 60px;
    text-align: center;
    transform: translatey(-50px);
    @media (max-width: 800px) {
        background-color: #fff;
        padding: 40px 30px;
        width: 80%;
        height: 400px;
        position: absolute;
        top: 150px;
        border-radius: 10px       
    }
`

export const Title = styled.h2`
    color: hsl(213, 96%, 18%);
    font-size: 20px;
    margin: 40px 0 20px
`

export const Description = styled.h3`
    color: hsl(0, 0.80%, 50.60%);
    font-size: 18px;
    font-weight: 400
`