import styled from "styled-components";

export const InfoSteps = styled.div`
    height: 50px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;
    @media (max-width: 800px) {
      padding: 0;
      transform: translateY(30px)
    }
`

export const NumberItem = styled.div`
    width: 60px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    border: 2px solid #fff;
    font-size: 16px;
    color: #fff;

    &.active {
        background-color: #BEE1FF;
        border: none;
        color: hsl(213, 96%, 18%);
    };
    @media (max-width: 800px) {
        width: 40px;
    }
    `

export const Info = styled.div`
    width: 200px;
    height: 100%;
    display: flex;
    gap: 2px;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 800px) {
        width: 0;
    }
    
    `

export const InfoH4 = styled.h4`
    color:#ccc;
    font-size: 11px;
    font-weight: 400;
    @media (max-width: 800px) {
        display: none;
    }
    `

export const InfoH3 = styled.h3`
    color:#fff;
    font-weight: 700;
    font-size: 16px;
    @media (max-width: 800px) {
        display: none;
    }
    `