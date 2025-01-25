import styled from "styled-components";
import { MediaSizes } from "../../../style/media-sizes/media-sizes";

export const InfoSteps = styled.div`
    height: 50px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;
        @media (max-width: ${MediaSizes.desktopSmall}) {
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
    font-weight: 700;
    color: #fff;
        @media (max-width:  ${MediaSizes.desktopSmall}) {
            width: 40px;
        };
        &.active {
            background-color: var(--pastel-blue);
            border: none;
            color: var(--primary-color);
        }
    `

export const Info = styled.div`
    width: 200px;
    display: flex;
    gap: 2px;
    flex-direction: column;
    justify-content: center;
        @media (max-width:  ${MediaSizes.desktopSmall}) {
            display: none;
        }
    `

    export const InfoH3 = styled.h3`
    color:#fff;
        @media (max-width:  ${MediaSizes.desktopSmall}) {
            display: none;
        }
    `

export const InfoH4 = styled.h4`
        @media (max-width:  ${MediaSizes.desktopSmall}) {
            display: none;
        }
    `

