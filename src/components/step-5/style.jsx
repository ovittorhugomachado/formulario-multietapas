import styled from "styled-components";
import { MediaSizes } from "../../style/media-sizes/media-sizes";

export const DivThanks = styled.div`
    width: 50%;
    background-color: transparent;
    position: absolute;
    top: 75px;
    right: 80px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    margin-top: 25px;
    margin-bottom: 10px;
`

export const Description = styled.h2`
`